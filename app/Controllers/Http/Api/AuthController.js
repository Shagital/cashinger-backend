'use strict'
const User = use('App/Models/User')
const Oauth = use('App/Models/Oauth')
const {validateAll} = use('Validator')
const {random, encrypt, bugsnagLogger:logger} = use("App/Common/helpers")
const moment = use("moment")
const Env = use('Env')
const FRONTEND_URL = Env.get('FRONTEND_URL')

class AuthController {
  async redirect({ally, request, response, params: {provider}}) {
    try {
      await ally.driver(provider).redirect()
    } catch (e) {
      console.error(e);
      await logger(e, request);
      response.status(500).send({'error': 'Failed to initialize login'});
    }
  }

  async callback({ally, auth, request, response, params: {provider}}) {

    try {
      const userObj = await ally.driver(provider).getUser();

      // user details to be saved
      let name = userObj.getName();
      let splitName = name.split(' ');
      const userDetails = {
        email: userObj.getEmail(),
        first_name: splitName[0],
        last_name: splitName[1],
        password: userObj.getAccessToken(),
        username: name.replace(' ', '_'),
        photo_url: userObj.getAvatar(),
        ip_address: request.ip()
      };

      let user = await this.createOrFindUser(userDetails);

      const oauthDetails = {
        user_id: user.id,
        unique_id: userObj.getId(),
        provider: provider,
      };

      const oauth = await Oauth.findOrCreate({
        unique_id: oauthDetails.unique_id
      }, oauthDetails);

      let tokenObj = await auth.withRefreshToken().generate(user);

      response.redirect(`${FRONTEND_URL}/get-started?token=${tokenObj.token}&is_new=${user.is_new}`)
    } catch (e) {
      //we want to return user to the frontend app no matter the failure
      console.error(e);
      await logger(e, request);

      response.redirect(`${FRONTEND_URL}?error=Failed to login`)
    }
  }

  async register({auth, response, request}) {
    const rules = {
      email: 'required|email',
      password: 'required:min:8',
      first_name: 'required|string',
      last_name: 'required|string',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    const data = request.only(['email', 'password', 'first_name', 'last_name']);
    data.ip_address = request.ip();

    let user = await this.createOrFindUser(data);
    let token = await auth.withRefreshToken().generate(user);

    response.send({token:token.token, ...user.toJSON()})

  }

  async createOrFindUser(data) {
    let user = await User.query().where('email', data.email).first();
    let newUser = false;

    if(!user) {
      user = new User();
      user.email = data.email;
      user.first_name = data.first_name || null;
      user.last_name = data.last_name || null;
      user.username = `${data.username || `${data.first_name || ''}${data.last_name || ''}`}_${random(4)}`;
      user.public_key = random(64);
      user.private_key = encrypt(user.public_key);
      user.subscription_ends = moment().add(1, 'M').format('YYYY-MM-DD HH:mm:ss');
      user.photo_url = data.photo_url;
      user.ip_address = data.ip_address || null;
      user.plan_id = 1;
      newUser = true;
    }

    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.password = data.password;

    await user.save();
    user.is_new = newUser;
    return user;
  }

  async login({auth, response, request}) {

    const rules = {
      email: 'required',
      password: 'required|min:8|same:password_confirmation',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    const data = request.only(['email', 'password']);

    let token = await auth.attempt(data.email, data.password);

    response.send(token)

  }

  async logout({auth, response}) {
    const apiToken = auth.getAuthHeader();
    await auth
      .revokeTokens([apiToken])
    response.status(204).send({});
  }

  async profile({auth, response, request}) {
    let user = await auth.getUser();
    await user.loadMany(['tokens', 'feedbacks', 'oauth']);
    response.send({'data' : user});
  }

  async complete({auth, response, request}) {
    const rules = {
      first_name: 'string',
      last_name: 'string',
      password: 'required|min:8|same:password_confirmation',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    const data = request.only(['email', 'password', 'first_name', 'last_name']);

    let user = await auth.getUser();
    user.email = data.email;
    user.first_name = data.first_name || null;
    user.last_name = data.last_name || null;
    user.password = data.password;
    await user.save()

    response.send(user)

  }
}

module.exports = AuthController

'use strict'
const User = use('App/Models/User');
const {encrypt} = use('App/Common/helpers');

class AuthenticateClientKey {
  async handle ({ request, params, response }, next) {
    let data = {};
    data.public_key = params.accountKey;
    data.private_key = encrypt(data.public_key);

    let user = await User.query().where(data).first();

    if(user === null) {
      return response.status(403).send({
        error:'Invalid API key'
      });
    }

    request.user_id = user.id;
    request.account_key = data.public_key;

    await next()
  }
}

module.exports = AuthenticateClientKey

'use strict'
const {validateAll} = use('Validator')
const Customer = use('App/Models/Customer')
const {random, generateOtp, sendSms, sendEmail, validateOtp} = use("App/Common/helpers")
const moment = use('moment')
const Env = use('Env')
const Hash = use('Hash')
const demoAmount = Env.get('DEMO_AMOUNT', 10000)

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with verifications
 */
class VerificationController {
  /**
   * Verify email token
   * GET verifications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async verify ({ request, response, params:{type} }) {
    const code = request.input('code', '');

    let otp = await validateOtp(code, type);

    if(!otp) {
      response.status(401).send({message:"Invalid verification code. Please try again or generate new one"});
    }

    otp.valid = false;

    let user = otp.user;
    let customer = user.customer;
    customer.meta.email_verified = true;

    if(user.email.email_verified && user.email.phone_verified) {
      customer.status = 'activated';
      let demoUser = await this.createOrFindUser({
        parent_id : user.id,
        username : user.username+random(10),
        email : `${random(16)}@${Env.get('APP_NAME')}.com`,
        first_name:user.first_name,
        last_name:user.last_name,
      });

      await Customer.create({
        user_id : demoUser.id,
        wallet : demoAmount,
      });
    }

    await Promise.all([
      customer.save(),
      user.save(),
      otp.save()
    ]);


    response.send({message:`${type} verified successfully`});

  }

  /**
   * Render a form to be used for creating a new verification.
   * POST verifications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async sendPhone ({ request, response, params: {type} }) {
    const rules = {
      phone: 'required|phone:NG',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let expires = 5;
    let phone = request.input('phone');
    let otp = await generateOtp(random(10, true), 'phone', null, expires);
    let message = `Your ${Env.get('APP_NAME')} Verification code is ${otp.code}. Expires in ${expires} minutes`;
    await sendSms(phone, message)
    response.send({message:`Verification code has been sent to ${phone}`})
  }

  /**
   * Render a form to be used for creating a new verification.
   * POST verifications/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async passwordReset ({ request, response, params: {type} }) {
    const rules = {
      email: 'required|email',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let expires = 60;
    let email = request.input('email');
    let otp = await generateOtp(random(16), 'email', null, expires);
    sendEmail(email, 'Password Reset', {otp}, 'password_reset');
    response.send({message:`Password reset code has been sent to ${email}`})
  }

  /**
   * Create/save a new verification.
   * POST verifications
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async changePassword ({ request, response, params: {type} }) {
    const rules = {
      code: 'required|min:16',
      email: 'required|email',
      password: 'required|min:8',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let data = request.only(['email', 'code']);
    let otp = await validateOtp(data.code, 'email');

    if(!otp) {
      response.status(401).send({message:'Invalid reset code.'});
    }

    otp.valid = false;
    let user = otp.user;
    user.password = Hash.make(data.password);
    await Promise.all([
      otp.save(),
      user.save()
    ]);
    response.send({message:`Password updated successfully. Please login with new password`})
  }

  /**
   * Display a single verification.
   * GET verifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing verification.
   * GET verifications/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update verification details.
   * PUT or PATCH verifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a verification with id.
   * DELETE verifications/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VerificationController

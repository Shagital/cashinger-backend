'use strict'
const User = use('App/Models/User')
const Payment = use('App/Models/Payment')
const Plan = use('App/Models/Plan')
const Coupon = use('App/Models/Coupon')
const {random, bugsnagLogger} = use("App/Common/helpers");
const Env = use('Env')
const moment = use('moment')

const Ravepay = require('flutterwave-node');

const rave = new Ravepay(Env.get('FLUTTERWAVE_PUBLIC_KEY'), Env.get('FLUTTERWAVE_SECRET_KEY'), Env.get('NODE_ENV') === 'production');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Perform action on payment success.
   * GET /api/payments/callback
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async success ({ request, response }) {

    const payload = {
      txref: request.input('transaction_reference')
    }
    try {
      const apiResponse = await rave.VerifyTransaction.verify(payload);
      await this.handlePaymentSuccess();

      if (apiResponse.status === 'success'
        && apiResponse.data
        && apiResponse.data.txref === payload.txref
        && apiResponse.data.status === 'successful'
        && apiResponse.data.custname
        && apiResponse.data.custemail
        && apiResponse.data.currency === 'USD'
      ) {
        let amount = parseFloat(apiResponse.data.amount).toFixed(2);
        let plan = await Plan.query().where({price: amount}).firstOrFail();
        let coupon = null
        // if (
        //   apiResponse.data
        //   && apiResponse.data.meta
        //   && apiResponse.data.meta[0]
        //   && apiResponse.data.meta[0].metaname == 'coupon_code'
        //   && apiResponse.data.meta[0].metavalue
        // ) {
        //   coupon = await Coupon.query()
        //     .where('reference', apiResponse.data.meta[0].metavalue)
        //     .where('expires_on', '>', moment().format('YYYY-MM-DD HH:mm:ss'))
        //     .first();
        //   if(coupon) plan.price = plan.price - ((coupon.price / 100) * plan.price);
        // }

          let user = await User.query().where('email', apiResponse.data.custemail).firstOrFail();
          let payment = await Payment.create({
            user_id: user.id,
            plan_id: plan.id,
           // coupon_id: coupon ? coupon.id : null,
            amount: amount,
            currency: apiResponse.data.currency,
            txn_ref: apiResponse.data.txref,
            reference: random(32),
            payment_ref: apiResponse.data.flwref,
          });

          user.subscription_ends = moment().add(parseInt(plan.duration), 'M').format('YYYY-MM-DD HH:mm:ss');
          user.plan_id = plan.id;
          await user.save();

          return response.status(200).send({payment:payment.toJSON(), plan: plan.toJSON(), user: user.toJSON()})
      }

      return response.status(400).send({error: "Payment Verification failed"});
    } catch (e) {
      console.error(e);
      bugsnagLogger(e, request);
      return response.status(500).send({error: "An Error occurred"});
    }
  }
}

module.exports = PaymentController

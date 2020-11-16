'use strict'
const {validateAll} = use('Validator')
const {random, generateOtp, sendSms, sendEmail, validateOtp} = use("App/Common/helpers")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {


  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async updateProfile ({ auth, request, response }) {
    let user = auth.getUser();
    const rules = {
      first_name: 'required|string',
      last_name: 'required|string',
      photo_id: 'required|exists:attachments,id',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let data = request.only(['first_name', 'last_name']);
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.photo_id = data.photo_id;
    await user.save();

    response.send({message:'Profile updated successfully'});
  }

  async updateAddress ({ auth, request, response }) {
    let user = auth.getUser();
    let customer = user.customer;

    const rules = {
      country_id: 'required|numeric|exists:countries,id',
      region_id: 'nullable|numeric|exists:regions,id',
      city_id: 'required|numeric|exists:cities,id',
      address: 'required|string',
      post_code: 'required|numeric',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let data = request.only(['country_id', 'region_id', 'city_id', 'post_code', 'address']);
    customer.country_id = data.country_id;
    customer.region_id = data.region_id || null;
    customer.city_id = data.city_id;
    customer.address = data.address;
    customer.post_code = data.post_code;
    await customer.save();

    response.send({message:'Address information updated successfully'});
  }

  async updateIdentity ({ auth, request, response }) {
    let user = auth.getUser();
    let customer = user.customer;

    const rules = {
      document_number: 'required|numeric|unique:customers,document_number',
      issue_date: `nullable|date|before:${new Date()}`,
      expiry_date: `nullable|date|after:${new Date()}`,
      document_id: 'required|numeric|exists:attachments,id',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let data = request.only(['document_id', 'issue_date', 'expiry_date', 'document_id']);
    customer.document_id = data.document_id;
    customer.issue_date = data.issue_date;
    customer.expiry_date = data.expiry_date;
    customer.document_number = data.document_number;
    await customer.save();

    response.send({message:'Identity information updated successfully'});
  }

  async updateNextOfKin ({ auth, request, response }) {
    let user = auth.getUser();
    let customer = user.customer;

    const rules = {
      first_name: 'required|string',
      last_name: 'required|string',
      relationship: 'required|string',
      email: 'required|email',
      phone: 'required|phone',
      country_id: 'required|numeric|exists:countries,id',
      region_id: 'nullable|numeric|exists:regions,id',
      city_id: 'required|numeric|exists:cities,id',
      address: 'required|string',
      post_code: 'required|numeric',
    };

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      return response.status(422).send(validation.messages())
    }

    let data = request.only(['first_name', 'last_name', 'email', 'phone', 'address', 'relationship', 'country_id', 'region_id', 'city_id', 'post_code']);
    customer.nok_first_name = data.first_name;
    customer.nok_last_name = data.last_name;
    customer.nok_email = data.email;
    customer.nok_phone = data.phone;
    customer.nok_address = data.address;
    customer.nok_relationship = data.relationship;
    customer.nok_country_id = data.country_id;
    customer.nok_region_id = data.region_id || null;
    customer.nok_city_id = data.city_id;
    customer.nok_post_code = data.post_code;
    await customer.save();

    response.send({message:'Next of Kin information updated successfully'});
  }

}

module.exports = CustomerController

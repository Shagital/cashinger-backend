'use strict'
const Country = use("App/Models/Country");
const Region = use("App/Models/Region");
const City = use("App/Models/City");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with countries
 */
class CountryController {
  /**
   * Show a list of all countries.
   * GET countries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({response, request: {qs}}) {
    let data = await Country.query().with('regions').fetch();
    response.send(data);
  }

  /**
   * Show a country and regions.
   * GET countries/:id/regions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async regions({params, response, request}) {
    let data = await Region.query().where('country_id', params.id).fetch();
    response.send(data);
  }

  /**
   * Show a country and cities.
   * GET countries/:id/cities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async cities({params, response, request}) {
    let data = await City.query().where('country_id', params.id).fetch();
    response.send(data);
  }

}

module.exports = CountryController

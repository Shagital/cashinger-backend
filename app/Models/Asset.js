'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asset extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  investmentOption () {
    return this.hasOne('App/Models/investmentOption', 'id', 'investment_option_id');
  }
}

module.exports = Asset

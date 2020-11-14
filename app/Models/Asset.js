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
    return this.hasOne('App/Models/InvestmentOption', 'id', 'investment_option_id');
  }

  logo () {
    return this.belongsTo('App/Models/Attachment', 'id', 'logo_id');
  }
}

module.exports = Asset

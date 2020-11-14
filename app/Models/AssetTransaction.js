'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AssetTransaction extends Model {
  investmentPlan () {
    return this.hasOne('App/Models/InvestmentPlan', 'id', 'investment_plan_id');
  }
}

module.exports = AssetTransaction

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Investment extends Model {
  static boot () {
    super.boot();
    this.addTrait('SoftDelete')
    this.addTrait('Timezone')

  }

  user () {
    return this.belongsTo('App/Models/User', 'id', 'user_id');
  }

  asset () {
    return this.belongsTo('App/Models/Asset', 'id', 'asset_id');
  }

  investmentOption () {
    return this.belongsTo('App/Models/InvestmentOption', 'id', 'investment_option_id');
  }
}

module.exports = Investment

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InvestmentPlan extends Model {
  static boot () {
    super.boot();
    this.addTrait('Timezone')
  }

  investment () {
    return this.belongsTo('App/Models/Investment', 'id', 'investment_id');
  }

  investmentRule () {
    return this.belongsTo('App/Models/InvestmentRule', 'id', 'investment_rule_id');
  }
}

module.exports = InvestmentPlan

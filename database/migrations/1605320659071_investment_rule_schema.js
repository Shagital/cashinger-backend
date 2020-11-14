'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentRuleSchema extends Schema {
  up () {
    this.create('investment_rules', (table) => {
      table.increments()
      table.decimal('start', 4, 2) // percent to start. If 0, buy immediately
      table.decimal('amount', 12, 6)
      table.decimal('original_rate', 12, 6)
      table.decimal('current_rate', 12, 6)
      table.decimal('percent', 12, 2)
      table.decimal('balance', 12, 6)
      table.decimal('sell_when', 4, 2)
      table.decimal('buy_when', 4, 2)
    })
  }

  down () {
    this.drop('investment_rules')
  }
}

module.exports = InvestmentRuleSchema

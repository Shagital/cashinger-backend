'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentPlanSchema extends Schema {
  up () {
    // this table is needed cos the CRON job will update it continuously
    this.create('investment_plans', (table) => {
      table.increments()
      table.integer('investment_id')
      table.integer('investment_rule_id').unsigned().references('id').inTable('investment_rules');
      table.integer('asset_id')
      table.enum('status', ['awaiting', 'running', 'paused', 'stopped']).defaultTo('running');
      table.decimal('start', 4, 2) // percent to start. If 0, buy immediately
      table.decimal('amount', 12, 6)
      table.decimal('original_rate', 12, 6)
      table.decimal('current_rate', 12, 6)
      table.decimal('percent', 12, 2)
      table.decimal('balance', 12, 6)
      table.decimal('sell_when', 4, 2)
      table.decimal('buy_when', 4, 2)
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('investment_plans')
  }
}

module.exports = InvestmentPlanSchema

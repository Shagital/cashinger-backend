'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class InvestmentSchema extends Schema {
  up () {
    this.create('investments', (table) => {
      table.increments()
      table.integer('user_id')
      table.decimal('amount', 10, 6)
      table.enum('status', ['awaiting', 'running', 'paused', 'stopped']).defaultTo('awaiting');
      table.timestamp('start_time').nullable(); // if null, start immediately
      table.timestamp('end_time').nullable(); // if null, never end until user terminates
      table.integer('investment_option_id').unsigned().references('id').inTable('investment_options');
      table.integer('asset_id').unsigned().references('id').inTable('assets');
      table.timestamp('deleted_at', { useTz: true }).nullable();
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('investments')
  }
}

module.exports = InvestmentSchema

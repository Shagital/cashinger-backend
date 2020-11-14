'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// all assets are benchmarked against the USD
class AssetSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments()
      table.integer('investment_option_id').unsigned().references('id').inTable('investment_options');
      table.string('name').unique();
      table.string('code').unique();
      table.decimal('rate', 10, 6);
      table.decimal('prev_rate', 10, 6);
    })
  }

  down () {
    this.drop('assets')
  }
}

module.exports = AssetSchema

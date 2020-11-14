'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetSaleSchema extends Schema {
  up () {
    this.create('asset_transactions', (table) => {
      table.increments()
      table.enum('type', ['sell', 'buy'])
      table.string('reference', 10).unique();
      table.integer('investment_plan_id')
      table.decimal('amount', 12, 6)
      table.string('description')
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('asset_transactions')
  }
}

module.exports = AssetSaleSchema

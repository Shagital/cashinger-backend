'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentOptionSchema extends Schema {
  up () {
    this.create('investment_options', (table) => {
      table.increments()
      table.string('name').unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('investment_options')
  }
}

module.exports = InvestmentOptionSchema

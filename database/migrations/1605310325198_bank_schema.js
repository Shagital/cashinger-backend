'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BankSchema extends Schema {
  up () {
    this.create('banks', (table) => {
      table.increments();
      table.string('name').unique();
      table.string('code').unique();
      table.integer('country_id').unsigned().references('id').inTable('countries');
    })
  }

  down () {
    this.drop('banks')
  }
}

module.exports = BankSchema

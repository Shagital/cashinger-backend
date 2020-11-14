'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('reference', 10).unique();
      table.enum('type', ['credit', 'debit']);
      table.decimal('amount', 12, 6);
      table.enum('status', ['pending', 'completed', 'rejected']);
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema

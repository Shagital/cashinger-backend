'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('payment_method_id').unsigned().references('id').inTable('payment_methods');
      table.decimal('amount', 10, 2)
      table.string('currency', 10)
      table.string('txn_ref', 80).unique();
      table.string('reference', 80).unique();
      table.string('payment_ref', 80).unique();
      table.text('meta').nullable(); // to hold metadata, but we're setting the type as text for backward compatibility
      table.timestamps(true, true)
    })
  }

  async down () {
    await Database.raw("SET FOREIGN_KEY_CHECKS=0;");
    this.drop('payments')
  }
}

module.exports = PaymentSchema

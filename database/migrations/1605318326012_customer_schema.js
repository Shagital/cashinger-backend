'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.decimal('wallet').defaultTo(0);
      table.string('phone', 20).nullable();
      table.integer('country_id').unsigned().nullable().references('id').inTable('countries');
      table.integer('region_id').unsigned().nullable().references('id').inTable('regions');
      table.integer('city_id').unsigned().nullable().references('id').inTable('cities');
      table.string('address').nullable();
      table.string('post_code', 10).nullable();
      table.integer('document_number').unsigned().nullable();
      table.integer('document_id').unsigned().nullable().references('id').inTable('attachments');
      table.integer('photo_id').unsigned().nullable().references('id').inTable('attachments');
      table.integer('bank_id').unsigned().nullable().references('id').inTable('banks');
      table.string('account_number').nullable();
      table.string('iban', 30).nullable();
      table.string('swift', 30).nullable();
      table.enum('status', ['pending', 'activated', 'verified', 'deactivated']).defaultTo('pending');
      table.text('meta').defaultTo({phone_verified:false,email_verified:false});
      table.timestamp('deleted_at', { useTz: true }).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema

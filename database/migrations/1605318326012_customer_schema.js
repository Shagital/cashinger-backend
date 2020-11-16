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

      // address
      table.integer('country_id').unsigned().nullable().references('id').inTable('countries');
      table.integer('region_id').unsigned().nullable().references('id').inTable('regions');
      table.integer('city_id').unsigned().nullable().references('id').inTable('cities');
      table.string('address').nullable();
      table.string('post_code', 10).nullable();

      // ID verification
      table.integer('document_number').unsigned().nullable().unique();
      table.date('issue_date').nullable();
      table.date('expiry_date').nullable();
      table.integer('document_id').unsigned().nullable().references('id').inTable('attachments');

      // bank
      table.integer('bank_id').unsigned().nullable().references('id').inTable('banks');
      table.string('account_number').nullable();
      table.string('iban', 30).nullable();
      table.string('swift', 30).nullable();

      // Next of kin
      table.string('nok_first_name').nullable();
      table.string('nok_last_name').nullable();
      table.string('nok_relationship').nullable();
      table.string('nok_email').nullable();
      table.string('nok_country_id').nullable();
      table.string('nok_region_id').nullable();
      table.string('nok_city_id').nullable();
      table.string('nok_post_code').nullable();
      table.string('nok_address').nullable();
      table.string('nok_phone').nullable();

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

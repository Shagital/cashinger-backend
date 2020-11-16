'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OtpSchema extends Schema {
  up () {
    this.create('otps', (table) => {
      table.increments()
      table.string('code')
      table.integer('user_id').unsigned().nullable().references('id').inTable('users');
      table.string('type', 20);
      table.boolean('valid').defaultTo(true)
      table.timestamp('expires_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('otps')
  }
}

module.exports = OtpSchema

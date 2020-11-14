'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardSchema extends Schema {
  up () {
    this.create('cards', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('card_number');
      table.string('expiry_date', 2);
      table.integer('expiry_year', 4);
      table.integer('cvv', 4);
      table.timestamp('deleted_at', { useTz: true }).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('cards')
  }
}

module.exports = CardSchema

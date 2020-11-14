'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaqSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.increments()
      table.integer('creator_id').unsigned().references('id').inTable('users');
      table.integer('category_id').unsigned().references('id').inTable('faq_categories');
      table.string('title').unique();
      table.text('description');
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqSchema

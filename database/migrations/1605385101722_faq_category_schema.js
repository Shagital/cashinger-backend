'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaqCategorySchema extends Schema {
  up () {
    this.create('faq_categories', (table) => {
      table.increments()
      table.integer('parent_id').unsigned().references('id').inTable('faq_categories');
      table.string('name').unique();
      table.string('slug').unique();
    })
  }

  down () {
    this.drop('faq_categories')
  }
}

module.exports = FaqCategorySchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('first_name', 80).nullable()
      table.string('last_name', 80).nullable()
      table.string('email', 100).notNullable().unique()
      table.string('password').notNullable()
      table.integer('photo_id').unsigned().nullable().references('id').inTable('attachments');
      table.integer('parent_id').unsigned().nullable().references('id').inTable('users'); // if set, this user is credited with a demo wallet amount of say $100,000 so as to perform demo actions on the app
      table.timestamp('deleted_at', { useTz: true }).nullable();
      table.timestamps(true, true)
    })
  }

 async down () {
    await Database.raw("SET FOREIGN_KEY_CHECKS=0;");
    this.drop('users')
  }
}

module.exports = UserSchema

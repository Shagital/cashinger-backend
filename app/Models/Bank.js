'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bank extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  country () {
    return this.belongsTo('App/Models/Country', 'id', 'country_id');
  }
}

module.exports = Bank

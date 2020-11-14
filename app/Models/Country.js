'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  regions() {
    return this.hasMany("App/Models/Region", "id", "country_id");
  }

  cities() {
    return this.hasMany("App/Models/City", "id", "country_id");
  }
}

module.exports = Country

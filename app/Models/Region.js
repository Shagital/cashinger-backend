'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Region extends Model {

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  cities() {
    return this.hasMany("App/Models/Cities", "id", "region_id");
  }

  country() {
    return this.belongsTo("App/Models/Country", "country_id", "id");
  }
}

module.exports = Region

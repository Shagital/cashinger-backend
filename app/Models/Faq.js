'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Faq extends Model {
  category() {
    return this.belongsTo("App/Models/Category", "id", "category_id");
  }
}

module.exports = Faq

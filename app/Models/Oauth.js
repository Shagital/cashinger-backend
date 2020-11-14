'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Oauth extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'id', 'user_id');
  }
}

module.exports = Oauth

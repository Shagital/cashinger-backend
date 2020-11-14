'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Card extends Model {
  static boot () {
    super.boot();
    this.addTrait('SoftDelete')
    this.addTrait('Timezone')
  }

  user () {
    return this.belongsTo('App/Models/User', 'id', 'user_id');
  }
}

module.exports = Card

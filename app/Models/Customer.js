'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  static boot () {
    super.boot();
    this.addTrait('SoftDelete')
    this.addTrait('Timezone')
  }

  user () {
    return this.belongsTo('App/Models/User', 'id', 'user_id');
  }

  document () {
    return this.belongsTo('App/Models/Attachment', 'id', 'document_id');
  }

  photo () {
    return this.hasOne('App/Models/Attachment', 'id', 'photo_id');
  }
}

module.exports = Customer

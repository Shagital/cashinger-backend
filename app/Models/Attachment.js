'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const DB = use('Database');

class Attachment extends Model {
  static boot () {
    super.boot();
    this.addTrait('SoftDelete')
    this.addTrait('Timezone')

    /**
     * A hook to get attachment object after fetch
     * it to the database.
     */
    this.addHook('afterFind', async (modelInstance) => {
      modelInstance.object = await DB.table(modelInstance.object_table).find(modelInstance.object_id);
    })
  }

  static get hidden () {
    return ['object_id', 'object_type', 'user_id']
  }

  user () {
    return this.belongsTo('App/Models/User', 'id', 'user_id');
  }

  object () {
    return this.belongsTo(this.object_type, 'id', 'object_id');
  }
}

module.exports = Attachment

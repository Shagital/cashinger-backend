'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', async (modelInstance) => {
      modelInstance.password = await Hash.make(modelInstance.password)
    });

  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get primaryKey () {
    return 'id'
  }

  static get incrementing () {
    return true
  }

  static get dates () {
    return super.dates.concat(['birthday',
'gift_rollover_date',
'boost_rollover_date',
'like_rollover_date',
'boosted_at',
'boosted_end_date',
'subscribe_end_date',
'hourly_visit_rollover_date',
'daily_visit_rollover_date',
'daily_swipe_rollover_date',
'email_verified_at',
'created_at',
'updated_at',
'deleted_at'])
  }

  static formatDates (field, value) {
    if (typeof value === 'string') {
      value = new Date(value);
    }


    if (field === 'birthday') {
      return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate()
    }

     if (field === 'gift_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'boost_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'like_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'boosted_at') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'boosted_end_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'subscribe_end_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'hourly_visit_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'daily_visit_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'daily_swipe_rollover_date') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'email_verified_at') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'created_at') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'updated_at') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

     if (field === 'deleted_at') {
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " " +
            value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()
     }

    return super.formatDates(field, value)
  }

  static castDates (field, value) {

    if (field === 'birthday') {
      return value.format('LL')
     }

    if (field === 'gift_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'boost_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'like_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'boosted_at') {
      return value.format('LLL')
    }

    if (field === 'boosted_end_date') {
      return value.format('LLL')
    }

    if (field === 'subscribe_end_date') {
      return value.format('LLL')
    }

    if (field === 'hourly_visit_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'daily_visit_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'daily_swipe_rollover_date') {
      return value.format('LLL')
    }

    if (field === 'email_verified_at') {
      return value.format('LLL')
    }

    if (field === 'created_at') {
      return value.format('LLL')
    }

    if (field === 'updated_at') {
      return value.format('LLL')
    }

    if (field === 'deleted_at') {
      return value.format('LLL')
    }

    return super.formatDates(field, value)
  }

  static get table () {
    return 'users'
  }

  static get hidden () {
    return ['password']
  }



  static allowedRelationships() {
    return []
  }

}

module.exports = User

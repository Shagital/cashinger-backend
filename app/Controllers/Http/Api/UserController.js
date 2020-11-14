'use strict'
const Env = use('Env')
const tokens = {
  consumer_key: Env.get('TWITTER_API_KEY'),
};

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tweeps
 */
class UserController {

}

module.exports = UserController

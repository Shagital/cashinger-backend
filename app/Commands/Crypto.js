'use strict'

const { Command } = require('@adonisjs/ace')
const Asset = use('App/Models/Asset')
const DB = use('Database')

class Crypto extends Command {
  static get signature () {
    return 'crypto'
  }

  static get description () {
    return 'Change price of random crypto'
  }

  generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }

  getRate(currentRate) {
    return currentRate + (currentRate * this.generateRandomInteger(-4,3)/100);
  }

  roundUp(num, places = 6) {
    return +(Math.round(num + `e+${places}`)  + `e-${places}`);
  }

  async handle (args, options) {
    let crypto = await Asset.find(1);

    while(1===1) {
      crypto.rate = this.roundUp(this.getRate(crypto.rate));
      await crypto.save();

      console.log(crypto.rate);
    }

  }
}

module.exports = Crypto

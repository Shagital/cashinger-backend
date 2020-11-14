'use strict'

/*
|--------------------------------------------------------------------------
| InvestmentOptionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const InvestmentOption = use('App/Models/InvestmentOption')

class InvestmentOptionSeeder {
  async run () {
    await InvestmentOption.createMany([
      {name:'stock', active:true},
      {name:'cryptocurrency', active:true},
      {name:'forex', active:false},
    ]);
  }
}

module.exports = InvestmentOptionSeeder

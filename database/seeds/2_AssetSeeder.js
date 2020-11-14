'use strict'

/*
|--------------------------------------------------------------------------
| AssetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Asset = use('App/Models/Asset')

class AssetSeeder {
  async run () {
    await Asset.createMany([
      {
        name:'Microsoft stock',
        investment_option_id:1,
        code:'MSS',
        rate:0.000074, // amount per dollar
        prev_rate:0.000072,
      },
      {
        name:'bitcoin',
        investment_option_id:2,
        rate:0.000044, // amount per dollar
        prev_rate:0.000082,
      },
      {
        name:'euro',
        investment_option_id:3,
        rate:0.000094, // amount per dollar
        prev_rate:0.000032,
      },
    ]);
  }
}

module.exports = AssetSeeder

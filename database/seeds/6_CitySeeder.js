'use strict'

/*
|--------------------------------------------------------------------------
| CitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const City = use('App/Models/City');
const fetch = require('node-fetch');

var url = 'https://raw.githubusercontent.com/djunehor/countries-states-cities-database/master/cities.json';
let settings = { method: "Get" };

class CitySeeder {
  async run() {
    console.info('running city seeder');
    return fetch(url, settings)
      .then(res => res.json())
      .then(async (arr) => {

        let count = 0;
        for(let a of arr)
        {
          if(process.env.NODE_ENV !== 'production' && count === 100) return;
          delete a.id;
          delete a.state_id;
          await City.findOrCreate({name:a.name, country_id:a.country_id}, a);
          count++;
        }
      });
  }
}

module.exports = CitySeeder

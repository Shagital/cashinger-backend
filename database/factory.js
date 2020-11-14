'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', (faker, i, data) => {

  return {
    username: data.username || faker.string({alpha:true, length:16}),
    first_name: data.first_name || faker.first(),
    last_name: data.last_name || faker.last(),
    password: data.password || faker.password(),
    email: data.email || faker.email(),
  }
});

Factory.blueprint('App/Models/Attachment', async (faker, i, data) => {

  return {
    user_id: data.user_id,
    url: faker.url(),
    public_id: faker.username(),
    format: 'image',
  }
});

Factory.blueprint('App/Models/Country', async (faker, i, data) => {

  return {
    name: faker.country({ full: true }) + faker.state({full: true}) + faker.sentence(),
  }
});

Factory.blueprint('App/Models/Region', async (faker, i, data) => {
  return {
    name: faker.state({ full: true }) + faker.city({ full: true }) + faker.sentence(),
    country_id : data.country_id
  }
});

Factory.blueprint('App/Models/City', async (faker, i, data) => {
  return {
    name: faker.city() + faker.postcode() + faker.sentence(),
    country_id : data.country_id,
    state_id : data.region_id
  }
});

Factory.blueprint('App/Models/Customer', (faker, i, data) => {

  return {
    user_id: data.user_id || 1,
    wallet: data.wallet || faker.floating({ min: 0, max: 1000, fixed: 8 }),
  }
});

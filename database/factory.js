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
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: 'password'
  }
});

Factory.blueprint('App/Models/Post', (faker) => {
  let active = [0,1];
  return {
    title: faker.sentence({alpha:true, length: 10}),
    slug: faker.string({alpha:true, length:10}),
    body: faker.paragraph({length:10}),
    active: !!active[Math.floor(Math.random() * active.length)],
  }
});

Factory.blueprint('App/Models/Comment', async (faker) => {
  let user = await Factory.model('App/Models/User').create();
  let post = await Factory.model('App/Models/Post').create();
  let status = ['active', 'pending', 'disabled']
  return {
    post_id: () => post.id,
    created_by: () => user.id,
    body: faker.paragraph({length:10}),
    status: status[Math.floor(Math.random() * status.length)],
  }
});

Factory.blueprint('App/Models/Attachment', async (faker) => {
  let user = await Factory.model('App/Models/User').create();
  let post = await Factory.model('App/Models/Post').create();
  return {
    table_name: () => 'posts',
    table_id: () => post.id,
    created_by: () => user.id,
    url: faker.url(),
  }
});

const {test, trait} = use('Test/Suite')('AttachmentController Test')
const Helpers = use('Helpers')
const Factory = use('Factory')
const Attachment = use('App/Models/Attachment')
const moment = use('moment')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')
trait('DatabaseTransactions')

test('can fetch user attachments', async ({client, assert}) => {
  let user = await Factory
    .model('App/Models/User')
    .create();

  let attachments = await Factory
    .model('App/Models/Attachment')
    .createMany(5, {user_id:user.id});

  const response = await client.get('api/attachments')
    .query({created_at_from: moment().format('YYYY-MM-DD HH:mm:ss')})
    .loginVia(user)
    .end();
  response.assertStatus(200);

  let responseArray = JSON.parse(response.text).data.sort();
  let attachmentArray = attachments.sort();

  assert.equal(responseArray[0].url, attachmentArray[0].toJSON().url);

});

test('can upload attachment', async ({client, assert}) => {
  let user = await Factory
    .model('App/Models/User')
    .create();


  const response = await client.post('api/attachments')
    .attach('file', Helpers.publicPath('zac.png'))
    .loginVia(user)
    .end();
  response.assertStatus(200);

}).timeout(0);

test('can view uploaded attachment', async ({client, assert}) => {
  let user = await Factory
    .model('App/Models/User')
    .create();


  const response = await client.post('api/attachments')
    .attach('file', Helpers.publicPath('zac.png'))
    .loginVia(user)
    .end();

  let responseData = JSON.parse(response.text);
  let id = responseData.id;
  const attachment = await client.get(`api/attachments/${id}`)
    .loginVia(user)
    .end();

  response.assertStatus(200);
  response.assertJSON(responseData);

}).timeout(0);

test("doesn't fetch another user's attachments", async ({client, assert}) => {
  let user = await Factory
    .model('App/Models/User')
    .create();
  let anotherUser = await Factory
    .model('App/Models/User')
    .create()

  let attachments = await Factory
    .model('App/Models/Attachment')
    .createMany(5, {user_id:anotherUser.id});

  const response = await client.get('api/attachments').loginVia(user).end();
  response.assertStatus(200);

  let responseData = JSON.parse(response.text).data[0] || {}

  assert.notInclude(responseData, attachments[0].toJSON());

});

test("can delete attachment", async ({client, assert}) => {
  let user = await Factory
    .model('App/Models/User')
    .create();
  let attachment = await Factory
    .model('App/Models/Attachment')
    .create({user_id:user.id});

  const response = await client.delete(`api/attachments/${attachment.id}`).loginVia(user).end();
  response.assertStatus(204);

  let newAttachment = await Attachment.query().where({user_id:user.id, id: attachment.id}).first();

  assert.isNull(newAttachment);

});

const Env = use('Env')
const {test, trait} = use('Test/Suite')('Env Test')

test('can read from env', async ({assert}) => {
  assert.equal('testing', Env.get('NODE_ENV'));
});

const Env = use('Env')
const {bugsnagLogger :a, slackLogger :b} = use('App/Common/helpers')
const { request } = use('FakeContext')
const {test, trait} = use('Test/Suite')('Error Logger Test')

test('can log to bugsnag', async ({assert}) => {
  try {
    throw new Error('Testing Bugsnag');
  } catch (e) {
    await a(e, request);
  }
});

test('can log to slack', async ({assert}) => {
  try {
    throw new Error('Testing Slack Logger');
  } catch (e) {
    await b(e, request, {meta:{date:new Date().getTime(), env : 'Testing'}});
  }
}).timeout(0);

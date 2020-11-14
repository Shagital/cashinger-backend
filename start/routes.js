'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** .type {typeof import('.adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

/* Web page routes */
Route.get('/', async ({request, response}) => {
  let today = new Date()
  response.send(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
});

Route.get('/deploy', 'DeployController.deploy');

/* API ROUTES */
// general routes
Route.get('api/countries', 'Api/CountryController.index');
Route.get('api/countries/:id/regions', 'Api/CountryController.regions');
Route.get('api/countries/:id/cities', 'Api/CountryController.cities');
//Route.get('api/regions/:id/cities', 'Api/RegionController.cities');
Route.post('api/payments/callback', 'Api/PaymentController.success');

// Authentication routes
Route.get('api/:provider/redirect', 'Api/AuthController.redirect');
Route.get('api/:provider/callback', 'Api/AuthController.callback');
Route.post('api/auth/register', 'Api/AuthController.register');
Route.post('api/auth/login', 'Api/AuthController.login');
Route.get('api/auth/logout', 'Api/AuthController.logout');

// authenticated internal routes
Route.group(() => {
  Route.get('auth/me', 'AuthController.profile')
  Route.put('auth/complete', 'AuthController.complete')
  Route.put('auth/update', 'AuthController.update')

  //Route.resource('feedbacks', 'FeedbackController').apiOnly();

}).namespace('Api')
.middleware('auth')
  .prefix('api');

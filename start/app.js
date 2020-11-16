'use strict'

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/drive/providers/DriveProvider',
  '@adonisjs/ally/providers/AllyProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-4-cloudinary/provider/Cloudinary',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/framework/providers/ViewProvider',
  'adonisjs-bugsnag/providers/BugSnagProvider',
  '@adonisjs/websocket/providers/WsProvider',
  '@shagital/adonisjs-phone-validator/providers/PhoneValidatorProvider',
  '@adonisjs/antl/providers/AntlProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  '@adonisjs/vow/providers/VowProvider',
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  Cloudinary: 'Adonis/Addons/AdonisCloudinary'
}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
  'App/Commands/Stock',
  'App/Commands/Investment',
  'App/Commands/Crypto',
];

// if(process.env.NODE_ENV !== 'production') {
//   console.log = function (msg, ...options) {
//     const ignore = '.returning() is not supported by mysql and will not have any effect.';
//     if(msg.indexOf( ignore) < 0) {
//       console.warn(process.env.NODE_ENV, msg, ...options);
//     }
//   }
// }

module.exports = { providers, aceProviders, aliases, commands }

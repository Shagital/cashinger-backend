'use strict';

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
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  'adonis-acl/providers/AclProvider',
  '@adonisjs/validator/providers/ValidatorProvider'
];

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
  'adonis-acl/providers/CommandsProvider',
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
  Role: 'Adonis/Acl/Role',
  Permission: 'Adonis/Acl/Permission',
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
  '@shagital/crud-generator/src/Commands/CrudInitCommand',
  '@shagital/crud-generator/src/Commands/CrudGeneratorCommand',
  '@shagital/crud-generator/src/Commands/PermissionMigrationGeneratorCommand',
  '@shagital/crud-generator/src/Commands/ControllerGeneratorCommand',
  '@shagital/crud-generator/src/Commands/ModelGeneratorCommand',
 '@shagital/crud-generator/src/Commands/ViewGeneratorCommand',
 'App/Commands/Crypto',
 'App/Commands/Investment',
];

module.exports = { providers, aceProviders, aliases, commands }

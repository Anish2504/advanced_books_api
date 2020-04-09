module.exports = {
  "development": {
    "username": "api_user",
    "password": "password",
    "database": "books_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "api_user",
    "password": "password",
    "database": "books_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "logging": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "books_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}

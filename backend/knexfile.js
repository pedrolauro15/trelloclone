// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dhsi2hl4d99e',
      user:     'zivgfmibdgeyhw',
      password: 'b0d9a8e32016e49c3a9bbcabeca9cd315237192154ce597668151e8c5dbdab96'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }

};

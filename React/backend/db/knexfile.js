// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'controle_material',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migration',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seed'
    },
    ...knexSnakeCaseMappers
  },
};
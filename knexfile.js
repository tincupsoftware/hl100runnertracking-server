// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///runners'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

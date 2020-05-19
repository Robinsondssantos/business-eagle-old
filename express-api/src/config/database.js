// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  logging: true,
  database: 'business_eagle',
  username: 'postgres',
  password: 'postgres',
  define: {
    timestamps: true,
    undercored: true,
    undercoredAll: true
  }
}
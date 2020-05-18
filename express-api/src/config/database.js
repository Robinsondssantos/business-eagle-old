// eslint-disable-next-line no-undef
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  logging: true,
  database: 'postgres',
  username: 'postgres',
  password: 'centralizer',
  define: {
    timestamps: true,
    undercored: true,
    undercoredAll: true
  }
}
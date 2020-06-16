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
    underscored: true,
    underscoredAll: true
  }
}
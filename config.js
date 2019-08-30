const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD,
  dbname: process.env.DB_NAME,
  dbhost: process.env.DB_HOST
};

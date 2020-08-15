require("dotenv").config();


module.exports = {
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "development": {
    "username": "root",
    "password": process.env.LOCALPASSWORD,
    "database": "quotegoat_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }

};
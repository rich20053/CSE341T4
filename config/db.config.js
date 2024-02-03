const dotenv = require('dotenv');
dotenv.config();

console.log("config");

module.exports = {
  url: process.env.MONGODB_URI
};
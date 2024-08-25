const { Pool } = require('pg');
const dbConfig = require('../config/dbConfig');

const pool = new Pool(dbConfig);

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};

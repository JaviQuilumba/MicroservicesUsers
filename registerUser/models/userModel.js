const db = require('../models/db');

const User = {
  create: async (data) => {
    const { username, email, password, first_name, last_name, role } = data;
    const query = `
      INSERT INTO users_inf (username, email, password, first_name, last_name, role) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [username, email, password, first_name, last_name, role];
    return db.query(query, values);
  },

  getAll: async () => {
    const query = 'SELECT * FROM users_inf';
    return db.query(query);
  },

  getById: async (id) => {
    const query = 'SELECT * FROM users_inf WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  },

  update: async (id, data) => {
    const { username, email, password, first_name, last_name, role } = data;
    const query = `
      UPDATE users_inf 
      SET username = $1, email = $2, password = $3, first_name = $4, last_name = $5, role = $6
      WHERE id = $7 RETURNING *`;
    const values = [username, email, password, first_name, last_name, role, id];
    return db.query(query, values);
  },

  delete: async (id) => {
    const query = 'DELETE FROM users_inf WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = User;

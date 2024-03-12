const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConfig = require('../database/dbConfig');
const mysql = require('mysql2/promise');

exports.createUser = async (username, password) => {
  const connection = await mysql.createConnection(dbConfig);
  const hashedPassword = await bcrypt.hash(password, 10);
  await connection.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  connection.end();
};

exports.authenticate = async (username, password) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
  connection.end();
  const user = rows[0];
  if (!user) {
    throw new Error('Invalid username or password.');
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid username or password.');
  }
  return jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
};

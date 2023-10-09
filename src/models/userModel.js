// src/models/userModel.js
const db = require('../configs/db');

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [email]);
    return rows[0];
};

const createUser = async ({ email, password, role }) => {
    const [result] = await db.query('INSERT INTO users (username, password,role) VALUES (?, ?,?)', [email, password, role]);
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    return user[0];
};
module.exports = {
    getUserById,
    getUserByEmail,
    createUser,
};

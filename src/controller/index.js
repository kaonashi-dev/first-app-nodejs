const db = require('../mock/db');

const getAll = () => db;
const get = (user) => db[0];

module.exports = {
    getAll,
    get
}
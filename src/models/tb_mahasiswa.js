const dbPool = require('../config/database.js');

const getAllUsers = () => {
  const query = 'SELECT * FROM mahasiswa';

  return dbPool.execute(query);
};

const createNewUser = (body) => {
  const query = `INSERT INTO mahasiswa (nama, email, tugas, uts, uas) 
                  VALUES ('${body.nama}', '${body.email}', '${body.tugas}', '${body.uts}',
                  '${body.uas}'
                  )`;

  return dbPool.execute(query);
};

const getAvarage = (id) => {
  const query = `SELECT (tugas + uts + uas)/3 AS avarage FROM kampus.mahasiswa WHERE id = '${id}'`;

  return dbPool.execute(query);
};

const updateUser = (body, id) => {
  const query = `UPDATE mahasiswa 
                  SET nama = '${body.nama}', email = '${body.email}', tugas = '${body.tugas}', uts = '${body.uts}', uas = '${body.uas}' 
                  WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deleteUser = (id) => {
  const query = `DELETE FROM mahasiswa WHERE id = '${id}'`;

  return dbPool.execute(query);
};

module.exports = {
  getAllUsers,
  createNewUser,
  getAvarage,
  updateUser,
  deleteUser,
};

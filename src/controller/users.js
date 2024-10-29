const userModel = require('../models/tb_mahasiswa.js');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers().sort('-nama');

    res.json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getAvarage = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await userModel.getAvarage(id);

    res.json({
      message: 'GET avarage success',
      average: rows[0].avarage,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.nama || !body.email) {
    return res.status(400).json({
      message: 'Anda mengirim data yang tidak sesuai',
      data: null,
    });
  }

  try {
    await userModel.createNewUser(body);
    res.json({
      message: 'CREATE new user success',
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await userModel.updateUser(body, id);

    res.json({
      message: 'UPDATE user success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await userModel.deleteUser(id);

    res.json({
      message: 'DELETE user success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getAvarage,
  createNewUser,
  updateUser,
  deleteUser,
};

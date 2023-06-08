const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });

    return res.status(200).json({
      status: 'success',
      quantity: users.length,
      message: 'all the dates is available',
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({ name, email, password, role });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: `the user with id ${id} not found `,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',

      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: `the user with id ${id} not found `,
      });
    }

    await user.update({ name, email });

    return res.status(200).json({
      status: 'success',
      message: 'user updated',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: `the user with id ${id} not found `,
      });
    }

    await user.update({ status: 'disable' });

    return res.status(200).json({
      status: 'success',
      message: 'user updated',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

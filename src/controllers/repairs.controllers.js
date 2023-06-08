const Repair = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
  try {
    const repair = await Repair.findAll({
      where: {
        status: 'peding',
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const repair = await Repair.create({ date, userId });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.findOneRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({
      id,
      status: 'peding',
    });

    if (!repair) {
      return res.status(404).json({
        status: 'fail',
        message: `the user with id ${id} not found`,
      });
    }

    await repair.update({ status: 'completed' });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

exports.deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      id,
      status: 'peding',
    });

    if (!repair) {
      return res.status(404).json({
        status: 'fail',
        message: `the user with id ${id} not found`,
      });
    }

    await repair.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
      message: 'all the dates is available',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      estatus: 'fail',
      message: 'Something ewent very wrong! 💣',
    });
  }
};

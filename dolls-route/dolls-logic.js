const dollsDao = require('./dolls-dao');

const getOneDoll = async (id) => {
  return await dollsDao.getOneDoll(id);
};

const getAllDolls = async () => {
  return await dollsDao.getAllDolls();
};

const updateDoll = async (updatedDoll, id) => {
  return await dollsDao.updateDoll(updatedDoll, id);
};

module.exports = {
  getOneDoll,
  getAllDolls,
  updateDoll,
};

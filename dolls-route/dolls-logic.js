const dollsDao = require('./dolls-dao');

const getOneDoll = async (id) => {
  return await dollsDao.getOneDoll(id);
};

const getAllDolls = async () => {
  return await dollsDao.getAllDolls();
};

const getOnlyOwned = async () => {
  return await dollsDao.getOnlyOwned();
};

const updateDoll = async (updatedDoll, id) => {
  return await dollsDao.updateDoll(updatedDoll, id);
};

module.exports = {
  getOneDoll,
  getAllDolls,
  updateDoll,
  getOnlyOwned,
};

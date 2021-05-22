const dollsDao = require('./dolls-dao');


const getOneDoll = async (id) => {
  return await dollsDao.getOneDoll(id);
};

const getAllDolls = async () => {
  return await dollsDao.getAllDolls();
};


module.exports = {
  getOneDoll,
  getAllDolls,
};

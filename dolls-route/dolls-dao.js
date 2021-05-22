const connection = require('../connection-wrapper');

const getOneDoll = async (id) => {
  let sql = 'SELECT * FROM dolls WHERE dolls.id=?;';

  try {
    const dollDetails = await connection.executeWithParameters(sql, id);
    return dollDetails;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllDolls = async () => {
  let sql = 'SELECT * FROM dolls;';

  try {
    const dollsDetails = await connection.executeWithParameters(sql);
    return dollsDetails;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getOneDoll,
  getAllDolls,
};

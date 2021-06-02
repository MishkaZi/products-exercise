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

const getOnlyOwned = async () => {
  let sql = 'SELECT * FROM dolls WHERE owned=1;';

  try {
    const dollsDetails = await connection.executeWithParameters(sql);
    return dollsDetails;
  } catch (error) {
    throw new Error(error);
  }
};

const updateDoll = async (updatedDoll, id) => {
  let sql = 'UPDATE dolls SET name=?, price=?, owned=? WHERE dolls.id=?;';

  let parameters = [updatedDoll.name, updatedDoll.price, updatedDoll.owned, id];

  try {
    const result = await connection.executeWithParameters(sql, parameters);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getOneDoll,
  getAllDolls,
  updateDoll,
  getOnlyOwned
};

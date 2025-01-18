const connection = require("../config/database"); //commonjs

const getALLUsers = async () => {
  let [results, fields] = await connection.query(`select * from Users`);
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(`select * from Users where id = ?`,[userId]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

module.exports = { getALLUsers ,getUserById};

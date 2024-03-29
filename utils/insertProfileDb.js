const connection = require("./dbInstance");
const bcrypt = require("bcrypt");

module.exports = function (profile) {
  return new Promise(async (resolve, reject) => {
    const userExists = await connection.query(
      "SELECT * FROM users WHERE user_id=$1",
      [profile.id]
    );
    if (userExists.rowCount <= 0) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(profile.id, salt);
      const user_id = profile.id;
      const full_name = profile.displayName || profile.username || null;
      const provider = profile.provider;
      const email = profile["_json"].email || null;
      try {
        await connection.query(
          "INSERT INTO users (user_id, provider, email, password, full_name) VALUES($1, $2, $3, $4, $5)",
          [user_id, provider, email, hashedPassword, full_name]
        );
        return resolve();
      } catch (err) {
        return reject(err);
      }
    }

    return reject('User already exists')
  });
};

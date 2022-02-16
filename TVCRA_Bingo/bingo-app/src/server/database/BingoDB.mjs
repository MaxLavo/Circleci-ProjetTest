import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const data = require("../../../db/BingoDataJSON.json"); // use the require method
const findById = async (id) => {
  let promise = new Promise((resolve, reject) => {
    if (id > 36000 && id <= 45000) {
      data.map((e) => {
        if (e["numero"] === parseInt(id)) {
          resolve(e);
        }
      });
    }
  });
  let result = await promise;
  console.log(result);

  return result;
};

const BingoDB = { findById };
export default BingoDB;

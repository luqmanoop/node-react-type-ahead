const fs = require("fs");
const { promisify } = require("util");

class CountriesReader {
  static async read(path) {
    const readFilePromise = promisify(fs.readFile);
    try {
      const data = await readFilePromise(path, "utf-8");
      return data.split('\n');
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CountriesReader;
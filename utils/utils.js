const Site = require('../db/model/site');

const addSite = async (value, language) => {
  try {
    const site = new Site(value);
    site.language = language;
    site.save();
    return site;
  } catch (e) {
    console.log(e);
    return e.message;
  }
};
module.exports = { addSite };

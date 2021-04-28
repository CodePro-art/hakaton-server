const Site = require('../db/model/site');
const translate = require('../translate/translate');

const addSite = async (value, language) => {
  try {
    const site = new Site(value);
    const translateSite = await translate(site, language);
    site.save();
    return site;
  } catch (e) {
    console.log(e);
    return e.message;
  }
};
module.exports = { addSite };

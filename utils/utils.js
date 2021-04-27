const Site = require('../db/model/site');

const addSite = async (value) => {
  try {
    console.log('add site');
    const site = new Site(value);
    site.save();
    return site;
  } catch (e) {
    console.log(e);
    return e.message;
  }
};
module.exports = { addSite };

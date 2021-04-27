const Site = require('../db/model/site');

const addSite = async (value) => {
  try {
    const site = new Site(value);
    site.save();
    res.send(site);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = { addSite };

const mongoose = require('mongoose');
const siteShema = new mongoose.Schema({
  url: {
    type: String,
  },
  image: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  language: {
    type: String,
  },
  content: [
    {
      type: String,
      // required: true,
    },
  ],
});
const Site = mongoose.model('site', siteShema);
module.exports = Site;

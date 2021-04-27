const mongoose = require('mongoose');
const path = 'mongodb://myUserAdmin:abc789@18.197.28.167:27017/';
mongoose.connect(path, () => {
  console.log('we are online');
});

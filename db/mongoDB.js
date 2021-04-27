const mongoose = require('mongoose');
const path = 'mongodb://myUserAdmin:abc789@18.197.28.167:27017/';
mongoose.connect(
  path,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('we are online');
  }
);

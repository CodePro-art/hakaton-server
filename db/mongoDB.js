const mongoose = require('mongoose');
const path = `mongodb+srv://kobi-wolf-admin:3HyTJ57zbogjFpwu@cluster0.taf0n.mongodb.net/Story-api?retryWrites=true&w=majority`;
mongoose.connect(path, () => {
  console.log('we are online');
});

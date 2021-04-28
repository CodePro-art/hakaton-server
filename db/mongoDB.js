const mongoose = require('mongoose');
const path = ''; //! add a path found in .gitignore
mongoose.connect(
  path,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('we are online');
  }
);

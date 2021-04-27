const path =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001';
module.exports = path;

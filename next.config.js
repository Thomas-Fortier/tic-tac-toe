const nextPwa = require('next-pwa');

module.exports = nextPwa({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true
  }
});

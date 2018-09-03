const passport = require('passport');

module.exports = (app) => {
  app.get('/', function (req, res) {
    res.sendFile("src/index.html");
  });

}
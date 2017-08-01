var express = require('express');
var router = express.Router();

var db = require('./usermodel');
router.get('/list', function (req, res) {
 db.User.sync({force: true}).then(function () {
  // Table created
  return db.User.create({
    USERNAME: 'John',
    PASSWORD: 'Hancock'
  });
});
});






       
module.exports = router;


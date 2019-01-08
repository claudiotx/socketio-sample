var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.io.emit("socketToMe", "users");
  res.send('respond with a resource.');
});

function sendProgress(res) {
  let i = 0;
  setInterval(() => {
    res.io.emit("socketToMe", i++);
  }, 1000);
}

module.exports = router;

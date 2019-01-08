var express = require('express');
var router = express.Router();

function sendProgress(res) {
  let i = 0;
  setInterval(() => {
    res.io.emit("socketToMe", i++);
  }, 1000);
}

router.get('/', function(req, res, next) {
  res.io.emit("socketToMe", "users");
  sendProgress(res);
  res.send('respond with a resource.');
});



module.exports = router;

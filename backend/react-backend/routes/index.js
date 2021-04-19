var express = require('express');
var router = express.Router();

/* GET home page. */

router.get("/",(req,res)=>{
  res.render(__filename,"../../frontend/src/index.js")
});

module.exports = router;

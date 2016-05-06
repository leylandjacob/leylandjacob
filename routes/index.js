var express = require('express');
var router = express.Router();
var projects = require('../data/projects.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    projects: projects
  });
});
/* GET home page. */
router.get('/candid', function(req, res, next) {
  res.render('candid');
});

module.exports = router;

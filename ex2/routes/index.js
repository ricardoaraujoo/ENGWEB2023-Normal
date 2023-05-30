var express = require('express');
var router = express.Router();
var axios = require('axios')
var env = require('../config/env')

/* GET home page. */
router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAcessPoint)
  .then(dados => {
    console.log(dados.data)
    res.render('index', {plantas: dados.data, d: data});
  })
  .catch(erro => {res.render('error', {error: erro})})
});

router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAcessPoint+"/"+ req.params.id)
    .then(dados => {
      console.log(dados.data)
      res.render('planta', {p: dados.data, d: data});
    })
    .catch(erro => {res.render('error', {error: erro})})
});

router.get('/especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAcessPoint+ "?especie=" + req.params.id)
    .then(dados => {
      console.log(dados.data)
      res.render('especie', {plantas: dados.data, d: data});
    })
    .catch(erro => {res.render('error', {error: erro})})
});





module.exports = router;

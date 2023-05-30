var express = require('express');
var router = express.Router();
var Lista = require('../controllers/planta')

/* GET home page. */
router.get('/plantas', function(req, res) {
  var especie = req.query.especie
  var implant = req.query.implant
  
  if(especie!=null && implant==null){
    Lista.findSpecificEspecie(especie)
    .then(dados => {
      console.log(dados)
      res.status(200).jsonp(dados)})
    .catch(erro => res.status(521).jsonp({erro: erro, mensagem: "Não consegui obter a lista desta espécie."}))
  }else if(implant!=null && especie==null){
    Lista.findSpecificImplant(implant)
    .then(dados => {
      console.log(dados)
      res.status(200).jsonp(dados)})
    .catch(erro => res.status(522).jsonp({erro: erro, mensagem: "Não consegui obter a lista de desta implatação."}))
  }else{
    Lista.findAll()
    .then(dados => { 
      console.log(dados)
      res.status(200).jsonp(dados)})
    .catch(erro => res.status(523).jsonp({erro: erro, mensagem: "Não consegui obter a lista de todas as plantas."}))

  }

});


router.get('/plantas/especies', (req, res) => {
  Lista.findEspecies()
    .then(dados => {
      console.log(dados)
      res.status(200).jsonp(dados)})
    .catch(erro => res.status(524).jsonp({erro: erro, mensagem: "Não consegui obter a lista de todas as especies."}))
});

router.get('/plantas/freguesias', (req, res) => {
  Lista.findFreguesias()
  .then(dados => {
    console.log(dados)
    res.status(200).jsonp(dados)})
    .catch(erro => res.status(525).jsonp({erro: erro, mensagem: "Não consegui obter a lista de todas as freguesias."}))
});

router.get('/plantas/:id', (req, res) => {
  Lista.findOne(req.params.id)
    .then(dados => {
      console.log(dados)
      res.status(200).jsonp(dados)})
    .catch(erro => res.status(526).jsonp({erro: erro, mensagem: "Não consegui obter a planta."}))
});

// DELETE 
router.delete('/plantas/:id', function(req, res) {
  Lista.deletePlanta(req.params.id)
    .then(dados => {
      console.log(dados)
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(527).jsonp({erro: erro, mensagem: "Não consegui delete da planta."})
    })
})

//Post
router.post('/plantas', function(req, res) {
  Lista.addPlanta(req.body)
    .then(dados => {
      console.log(dados)
      res.jsonp(dados)
    })
      .catch(erro => res.status(528).jsonp({erro: erro, mensagem: "Não consegui post da planta."}))
})




module.exports = router;

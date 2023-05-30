var Lista = require('../models/planta')

module.exports.findAll = () =>{
    return Lista.find()
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.findOne = (id) =>{
    return Lista.findOne({_id:id})
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.findSpecificEspecie = (e) =>{
    return Lista.find({Espécie:e})
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.findSpecificImplant = (i) =>{
    return Lista.find({Implantação:i})
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.findFreguesias = () =>{
    return Lista.distinct("Freguesia")
            .sort()
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.findEspecies = () =>{
    return Lista.distinct("Espécie")
            .sort()
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}

//Post
module.exports.addPlanta = (c) =>{
    return Lista.create(c)
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}
//Delete

module.exports.deletePlanta = (id) =>{
    return Lista.deleteOne({_id:id})
            .then(resposta =>{
                return resposta
            })
            .catch(erro =>{
                return erro
            })
}


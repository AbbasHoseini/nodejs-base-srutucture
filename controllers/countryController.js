const Country = require('../models').Country


exports.create = async(req,res) => {
    try{
        const createdData = await Country.create(req.body);
        return res.status(201).send({
            status:'Success',
            message:'Data created successfully'
        })

    } catch(e){
        return res.status(500).send({
            status:'Error',
            message:e.message
        })
    }
}


exports.getAll = async(req,res) => {
    try{

        const data = await Country.findAll()
        return res.status(200).send({
            status:'Success',
            data:data
        })

    } catch(e){
        return res.status(500).send({
            status:'Error',
            message:e.message
        })
    }
}


exports.getOne = async(req,res) => {
    try{
        //TODO check is param or params
        const data = await Country.findOne({where:{id:req.params.id}})
        return res.status(200).send({
            status:'Success',
            data:data
        })

    } catch(e){
        return res.status(500).send({
            status:'Error',
            message:e.message
        })
    }
}

exports.update = async(req,res) => {
    try{

        const updatedData = await Country.update(req.body,{where:{id:req.params.id}})
        return res.status(201).send({
            status:'Success',
            message:'Data updated successfully'
        })

    } catch(e){
        return res.status(500).send({
            status:'Error',
            message:e.message
        })
    }
}

exports.delete = async(req,res) => {
    try{
        const deletedData = await Country.destroy({where:{id:req.params.id}})
        return res.status(200).send({
            status:'Success',
            message:'Data deleted successfully'
        })

    }catch(e){
        return res.status(500).send({
            status:'Error',
            message:e.message
        })
    }
}

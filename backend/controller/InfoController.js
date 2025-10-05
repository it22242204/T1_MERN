const infoModel = require ('../models/infomodel');

// create info
const createInfo = async (req,res) => {
    const {name, nested, age, address, phone, email, Birthdate, Married, Salary} = req.body;

    try{
        const info = await infoModel.create({ name, nested, age, address, phone, email, Birthdate, Married, Salary});
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// get all info
const getAllInfo = async (req,res) => {
    try{
        const info = await infoModel.find({});
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// get single info
const getSingleInfo = async (req,res) => {
    try{
        const {id} = req.params;
        const info = await infoModel
        .findById(id);
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// update info
const updateInfo = async (req,res) => {
    try{
        const {id} = req.params;
        const info = await infoModel
        .findByIdAndUpdate(id, req.body
        , {new: true});
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

// delete info
const deleteInfo = async (req,res) => {
    try{
        const {id} = req.params;
        const info = await infoModel
        .findByIdAndDelete(id);
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}



module.exports = {createInfo, getAllInfo, getSingleInfo, updateInfo, deleteInfo};
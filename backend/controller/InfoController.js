const infoModel = require ('../models/infomodel');

const createInfo = async (req,res) => {
    const {name, nested, age, address, phone, email, Birthdate, Married, Salary} = req.body;

    try{
        const info = await infoModel.create({ name, nested, age, address, phone, email, Birthdate, Married, Salary});
        res.status(200).json(info);
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

module.exports = createInfo;
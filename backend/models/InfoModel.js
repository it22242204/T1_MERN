const mongoose = require('mongoose');
const { Schema } = mongoose;

const infoSchema = new Schema(
    {
        name: String,
        nested : {
            firstname : String,
            lastname : String,
        },
        age: Number,
        address: String,
        phone: Number,
        email: String,
        Birthdate : Date,
        Married : Boolean,
        Salary : Number,
    },
    {timestarmps: true}
);

module.exports = mongoose.model("Info", infoSchema);
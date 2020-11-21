const {model, Schema} = require("mongoose");


const FacultySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    courses:{
        type: Array,
        required: false,
        default:[]
    },
    thumbnail:{
        type: String,
        required: false,
    }
});

module.exports = Faculty = model("Faculty", FacultySchema);
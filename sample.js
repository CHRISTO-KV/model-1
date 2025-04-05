var mongoose = require ('mongoose');
const sampleschema = mongoose.Schema({
    sName: String,
    sAge :Number
})
const sampleModel =mongoose.model("sample",sampleschema);
module.exports=sampleModel;
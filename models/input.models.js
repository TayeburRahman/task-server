 

const mongoose = require("mongoose");
 

const sectorModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  
  children: [ ],
});
 
     
module.exports = mongoose.model('Sector', sectorModel)
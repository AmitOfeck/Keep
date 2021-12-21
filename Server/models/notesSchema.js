var mongoose = require('mongoose')

var notesSchema = new mongoose.Schema({

  UserId: Number ,
  Title : String ,
  Body : String ,
  Tags : [String] , 
  createdDate : Date ,
  
} , {versionKey: false})

module.exports = mongoose.model('notes' , notesSchema)
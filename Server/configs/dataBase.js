var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dan:Mihz0327@fantasycluster-cvvj9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// mongodb://127.0.0.1:27017/fantasy-football-api
// 'mongodb+srv://dan:<password>@fantasycluster-cvvj9.mongodb.net/test?retryWrites=true&w=majority'
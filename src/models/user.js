const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    team: {
        type: Object,
        default: {
            goalkeepers: [],
            defenders: [],
            midfielders: [],
            forwards: []
        }
    }
}, 'users')

module.exports = User
const mongoose = require('mongoose')

const Team = mongoose.model('Team', {
        code: {
            type: Number
        },
        draw: {
            type: Number
        },
        form: {
            type: Number
        },
        id: {
            type: Number
        },
        loss: {
            type: Number
        }, 
        name: {
            type: String,
            required: true
        }, 
        played: {
            type: Number
        }, 
        points: {
            type: Number
        },
        position: {
            type: Number
        }, 
        short_name: {
            type: String,
            required: true
        },
        strength: {
            type: Number
        },
        team_division: {
            type: String
        }, 
        unavailable: {
            type: Boolean
        }, 
        win: {
            type: Number
        },
        strength_overall_home: {
            type: Number
        }, 
        strength_overall_away: {
            type: Number
        }, 
        strength_attack_home: {
            type: Number
        }, 
        strength_attack_away: {
            type: Number
        }, 
        strength_defence_home: {
            type: Number
        }, 
        strength_defence_away: {
            type: Number
        } 
    }, 'teams')

module.exports = Team
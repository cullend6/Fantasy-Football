const mongoose = require('mongoose')

const Player = mongoose.model('Player', {
    chance_of_playing_next_round: {
        type: Number,
        trim: true
    },
    chance_of_playing_this_round: {
        type: Number,
        trim: true
    },     
    code: {
        type: Number,
        trim: true
    },
    cost_change_event: {
        type: Number,
        trim: true
    },
    cost_change_event_fall: {
        type: Number,
        trim: true
    },
    cost_change_start: {
        type: Number,
        trim: true
    },
    cost_change_start_fall: {
        type: Number,
        trim: true
    },
    dreamteam_count: {
        type: Number,
        trim: true
    },
    element_type: {
        type: Number,
        trim: true
    },
    ep_next: {
        type: Number,
        trim: true
    },
    ep_this: {
        type: Number,
        trim: true
    },
    event_points: {
        type: Number,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    form: {
        type: Number,
        trim: true
    },
    id: {
        type: Number,
        required: true,
        trim: true
    },
    in_dreamteam: {
        type: Boolean,
        trim: true
    },
    news: {
        type: String,
        trim: true
    },
    news_added: {
        type: Date,
        trim: true
    },
    now_cost: {
        type: Number,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        trim: true
    },
    points_per_game: {
        type: Number,
        trim: true
    },
    second_name: {
        type: String,
        required: true,
        trim: true
    },
    selected_by_percent: {
        type: Number,
        required: true,
        trim: true
    },
    special: {
        type: Boolean,
        trim: true
    },
    squad_number: {
        type: Number,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    team: {
        type: Number,
        trim: true
    },
    team_code: {
        type: Number,
        trim: true
    },
    total_points: {
        type: Number,
        required: true,
        trim: true
    },
    transfers_in: {
        type: Number,
        trim: true
    },
    transfers_in_event: {
        type: Number,
        trim: true
    },
    transfers_out: {
        type: Number,
        trim: true
    },
    transfers_out_event: {
        type: Number,
        trim: true
    },
    value_form: {
        type: Number,
        trim: true
    },
    value_season: {
        type: Number,
        trim: true
    },
    web_name: {
        type: String,
        trim: true
    },
    minutes: {
        type: Number,
        trim: true
    },
    goals_scored: {
        type: Number,
        trim: true
    },
    assists: {
        type: Number,
        trim: true
    },
    clean_sheets: {
        type: Number,
        trim: true
    },
    goals_conceded: {
        type: Number,
        trim: true
    },
    own_goals: {
        type: Number,
        trim: true
    },
    penalties_saved: {
        type: Number,
        trim: true
    },
    yellow_cards: {
        type: Number,
        trim: true
    },
    red_cards: {
        type: Number,
        trim: true
    },
    saves: {
        type: Number,
        trim: true
    },
    bonus: {
        type: Number,
        trim: true
    },
    bps: {
        type: Number,
        trim: true
    },
    influence: {
        type: Number,
        trim: true
    },
    creativity: {
        type: Number,
        trim: true
    },
    threat: {
        type: Number,
        trim: true
    },
    ict_index: {
        type: Number,
        trim: true
    }  
})

module.exports = Player
const express = require('express')
const router = express.Router()
const axios = require('axios')
const Team = require('../models/team')

router.get('/teams', async (req, res) => {
    try {
        if (req.query.id) {
            const team = await Team.find({id: req.query.id})
            res.send(team)
        }
        else {
            const teams = await Team.find({})
            res.send(teams)    
        }
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/add-all-teams', async (req, res) => {
    try {
        const { data: { teams } } = await axios.get(`https://fantasy.premierleague.com/api/bootstrap-static/`)

        const promises = teams.map(async team => {
            const newTeam = new Team(team)
            await newTeam.save()
            return nerTeam
        })

        const newTeams = await Promise.all(promises)
        res.send(newTeams)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const axios = require('axios')
const Player = require('../models/player')
const User = require('../models/user')
const addPlayer = require('../validation/addPlayer')
const sendEmail = require('../modules/email')

router.get('/players', async (req, res) => {
    try {
        if (req.query.pos) {
            const players = await Player.find({ element_type: req.query.pos })
            res.send(players)
        }

        if (req.query.team) {
            const players = await Player.find({ team: req.query.team })            
            res.send(players)
        }

        if (req.query.name) {
            const players = await Player.find({ web_name: req.query.name }) 
            res.send(players)
        }
        if (req.query.fixtures) {
            const { data }= await axios.get(`https://fantasy.premierleague.com/api/element-summary/${req.query.fixtures}/`)
            res.send(data)
        }
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/addPlayer', (req, res) => {
    try {
        res.send(addPlayer(req.body))
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/sendEmail', async (req, res) => {
    try {
        if (!req.query.id) {
            throw new Error ('No id provided')
        }

        const { data: { elements: newPlayers } } = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
        const promises = newPlayers.map(async (player) => {
            const oldPlayers = await Player.find({id: player.id})
            const oldPlayer = oldPlayers[0]
            if (oldPlayer === undefined) {
                return `New player: ${player.web_name} $${player.now_cost / 10}`
            } 
            else if ( oldPlayer.now_cost != player.now_cost) {
                const diff = player.now_cost - oldPlayer.now_cost
                let changeSign = ''
                diff > 0 ? changeSign = '+' : changeSign = ''
                return `${player.web_name} ${changeSign, diff} to $${player.now_cost / 10}`
            }    
        })
        const playerChanges = await Promise.all(promises)
        const result = playerChanges.filter(res => res != null)
        const { email } = await User.findById(req.query.id)
        console.log(email)
        sendEmail(result, email)
        res.send(result)
    } catch (e) {
        res.status.send()
    }
})

router.post('/add-all-players', async (req, res) => {
    try {
        const { data: { elements: players } } = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')

        const promises = players.map(async player => {
            const newPlayer = new Player(player)
            await newPlayer.save();
            return newPlayer;               
        });
        
        const newPlayers = await Promise.all(promises);
        res.send(newPlayers);
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router
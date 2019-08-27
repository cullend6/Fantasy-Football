const express = require('express')
const router = express.Router()
const User = require('../models/user')
const validateAddUser = require('../validation/addUser')

router.get('/users', async (req, res) => {
    try {
        if (req.query) {
            const user = await User.find({email: req.query.email, password: req.query.password})
            if (user.length === 0) {
                res.send({error: `Incorrect details.`})
            } else {
                res.send(user)
            }
        }
        const users = await User.find({}) 
        res.send(users)
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users', async (req, res) => {
    try {
        const { valid, message = null } = await validateAddUser(req.body)
        if (!valid) {
            res.send(message)
        }
        else {
            const newUser = new User(req.body)
            newUser.save()
            console.log('saving')
            res.send(newUser)    
        }
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.query.id , req.body, { new: true })
        res.send(updatedUser)    
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router
const express = require('express')
require('./db/mongoose')
const playerRouter = require('../src/routers/player')
const teamRouter = require('../src/routers/team')
const userRouter = require('../src/routers/user')
const cors = require('cors')
const scheduler = require('node-schedule')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(playerRouter)
app.use(teamRouter)
app.use(userRouter)

const schedule = scheduler.scheduleJob('* */1 * * *', async () => {    
    // get all user emails
    // get all changes
    // send emails
})

app.listen(port, () => {
    console.log('Server running on ' + port)
})
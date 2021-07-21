const discord = require("discord.js")
const client= new discord.Client()
const config= require('./config.json')

client.on('ready',()=>{
    console.log('client is ready')
})

client.login(process.env.DJS_TOKEN)
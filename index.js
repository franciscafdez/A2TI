const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()


const port = process.env.PORT

app.get('/info', (req,res)=>{
    res.status(200).send('Hola')
})

app.get('/info', (req,res)=>{
    res.status(200).send({"url": req.url})
})

app.get('/status', (req,res)=>{
    res.status(204).send("204 No Content")
})

app.delete('/security',(req,res)=>{
    res.status(401).send('401 Unauthorized')
})

app.listen(port,()=>{
    console.log("App is listening port"+ port)
})
const app = require("express").Router()
const fs = require('fs')
let db = require('../db/db.json')

app.get("/api/notes",(req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
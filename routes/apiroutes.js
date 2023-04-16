const app = require("express").Router()
const fs = require('fs')
let db = require('../db/db.json')
// CRUD 
//Get - READ
app.get("/api/notes",(req,res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
})
app.post("/api/notes",(req,res) => {
    const creatdata = {
        id: Math.floor(Math.random()* 9999),
        title: req.body.title, text: req.body.text
    }
    db.push(creatdata) 
    
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if(err) throw err
    }) 
    res.json(db)
})
module.exports = app
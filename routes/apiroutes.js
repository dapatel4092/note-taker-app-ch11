const app = require("express").Router()
const fs = require('fs')
let db = require('../db/db.json')
// CRUD 
//Get - READ
app.get("/api/notes",(req,res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
})
// Create - POST
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

app.delete("/api/notes/:id",(req,res) => {
   const tempnotes = []
   db.forEach((ele) => {
    if(ele.id != req.params.id){
        tempnotes.push(ele)
    }
   })
    db=tempnotes
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if(err) throw err
    }) 
    res.json(db)
})
module.exports = app
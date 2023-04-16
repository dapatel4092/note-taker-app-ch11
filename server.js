const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

const api_routes = require("./routes/apiroutes")
const html_routes = require("./routes/htmlroutes")
app.use(api_routes)
app.use(html_routes)

app.listen(PORT,function(){
    console.log(`app is running on http://localhost:${PORT}`)
})
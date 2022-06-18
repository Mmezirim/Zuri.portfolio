const express = require('express')
const app = express()

app.get('/render.html', function(req, res){
       res.sendFile(__dirname + "/index.html")
})
//till the concept is established, just incase.
app.get('/render.html', function(req, res){
       res.sendFile(__dirname + "/home.html")
})
app.get('/render.html', function(req, res){
       res.sendFile(__dirname + "/about.html")
})
app.get('/render.html', function(req, res){
       res.sendFile(__dirname + "/contact.html")
})

app.listen(5001, function(){
      console.log('server is up and running')
})

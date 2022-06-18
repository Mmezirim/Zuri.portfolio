const express = require('express')
const app = express()


app.get('home.html', function(req, res){
       res.sendFile(__dirname + "/index.html")
})


app.listen(3000, function(){
      console.log('server is up and running')
})
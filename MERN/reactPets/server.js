

const express = require("express") 
const cors = require("cors") 
const app = express(); 
const port = 8000; 


app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(cors()) 

// -----> need to add routes below
require("./server/config/config")
require('./server/routes/reactPets.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );
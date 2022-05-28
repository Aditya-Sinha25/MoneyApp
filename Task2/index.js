const express= require ('express');
const bodyParser= require ('body-parser');
const db=require('./config/mongoose');
const uuid=require('uuidv4');


const app=express();

//defining the port
const PORT=5000;
app.use(express.urlencoded());
app.use(bodyParser.json());

//routes
app.use('/',require('./routes'));


//making the app listen to port
app.listen(PORT,function(err){
    if(err)
        console.log(`Error in running the server: ${err}`);
    else 
        console.log(`Server is up and running on port: ${PORT}`);
})
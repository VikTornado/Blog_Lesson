import express from 'express';

const app = express()
app.use(express.json)()

// const bcrypt = require('bcrypt-nodejs');

app.listen(8800, ()=>{
    console.log("Listening on 8800");
})
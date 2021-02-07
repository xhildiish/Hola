const express = require ('express');
const mongoose = require ('mongoose');
const config = require ('config');


const app = express();
//initialize express

app.use(express.json());
//json parsel middleware

//check for the environment port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server using port ${port}`);
});
// This is a sample comment

const express = require ('express');
const mongoose = require ('mongoose');
const config = require ('config');

//APIs
const item = require('./routes/api/item');

const app = express();
//initialize express


app.use(express.json());
//json parsel middleware

const db = config.get('mongoURI');

//connect to mongoDB
mongoose.connect( db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("MongoDB connected successfully"))
    .catch(err => console.log(err));

app.use('/api/item', item);

//check for the environment port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server using port ${port}`));
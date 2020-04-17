require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

//Express Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//Connect to MongoDB database
const db = require('./models/connect')

const users = require('./routes/users');

//Connect all the routes to our application
app.use("/", users(db));

app.get("/express_backend", (req,res) => {
  res.send({ express: 'backend is connected to react'})
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})
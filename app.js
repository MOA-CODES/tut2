const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

//static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended:false}))//middleware use to get data
//parse json data
app.use(express.json()) //helps with access to js data

app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5000,()=>{
    console.log('server is listening on port 5000..');
});
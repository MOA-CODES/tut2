const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');//third party

// req=> middleware => res
//app.use(logger)//instead of placing in each app.get/app.out.etc
//app.use('/api',logger)//it can be applied to only specific routes

//app.use([logger, authorize])//you can place multiple middlewares by using an array of middlewares
app.use(morgan('tiny'))
//app.use(logger)
//app.use(express.static('./public'))

app.get('/',(req, res)=>{
    res.send('Home')
})
app.get('/about',(req, res)=>{
    res.send('About')
})
app.get('/api/products',(req, res)=>{
    res.send('Api Products')
})
app.get('/api/items',authorize, (req, res)=>{
    console.log(req.user)
    res.send('Api items')
})



app.listen(5000,()=>{
    console.log('server is listening on port 5000..');
});
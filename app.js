const express = require('express');
const app = express();
const {products} = require('./data.js')


app.get('/', (req, res) => {
    res.json(products)
//  res.json([{name:'john'}, {name:'susan'}]);
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000..');
});
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('user is at home');
    res.status(200).send('Home')
})

app.get('/about', (req, res)=>{
    console.log('user is at about');
    res.status(200).send('About Page')
})

//setting up my own 404 response
app.all('*', (req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
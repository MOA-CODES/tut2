const logger = (req,res,next)=>{//middleware
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    //res.send('Testing')//to terminate
    next(); //passing to the next function
}

module.exports = logger
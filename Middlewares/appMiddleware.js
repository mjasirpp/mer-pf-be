const appMiddleware = (req,res,next)=>{
    console.log("Inside Application Specific Middleware");
    next()
}

module.exports = appMiddleware
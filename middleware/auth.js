function handleauth(req,res,next){
    let uniq= req.query.id
    if(uniq == 34){
        next();
    }else{
        res.send("unauthorized");
    }
}

module.exports=handleauth
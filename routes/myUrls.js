let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let mongojs = require('mongojs');


let db = mongojs('mongodb://daxesh:Csula19!@ds255265.mlab.com:55265/one_mongo_database')

//get all
router.get('/myUrls',(request,response,next)=>{
    db.myUrls.find(function(err,urls){
        if(err)
        {
            response.send(err)
        }
        response.json(urls)
    })
});

//save a Url
router.post('/myUrl',function(request,response,err){

let myUrl = request.body;


if(!myUrl){
    response.status(400);
    response.json({"error":"bad data"});
}else{
    db.myUrls.save(myUrl,function(err,myUrl){
        if(err)
        {
            response.send(err)
        }
        response.json(myUrl)
    });
}

})

module.exports = router
let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let mongojs = require('mongojs');

let db = mongojs('mongodb://daxesh:Csula19!@ds255265.mlab.com:55265/one_mongo_database')

//get all
router.get('/tasks',(request,response,next)=>{
    db.tasks.find(function(err,tasks){
        if(err)
        {
            response.send(err)
        }
        response.json(tasks)
    })
});

// get one task
router.get('/task/:id',(request,response,next)=>{
    db.tasks.findOne({_id:mongojs.ObjectId(request.params.id)},function(err,task){
        if(err)
        {
            response.send(err)
        }
        response.json(task)
    })
});


//save a task
router.post('/task',function(request,response,err){

let task = request.body;
if(!task.title || task.isComplete){
    response.status(400);
    response.json({"error":"bad data"});
}else{
    db.tasks.save(task,function(err,task){
        if(err)
        {
            response.send(err)
        }
        response.json(task)
    });
}

})


module.exports = router;
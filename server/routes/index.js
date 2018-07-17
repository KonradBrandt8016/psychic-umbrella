const taskRoutes = require('./task_routes');
const userRoutes = require('./user_routes');

module.exports=function(app,db){
    taskRoutes(app,db);
    userRoutes(app,db);
}
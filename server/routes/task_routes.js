
//CREATE new task
module.exports = function(app, db) {
    app.post('/task', (req, res) => {
        var task = {title:req.body.title,description:req.body.desc,creator:req.body.creator}
      db.collection('tasks').insert(task,(err,result)=>{
          if(err){
              res.send({'error':'Unable to add task.'});
          } else{
              res.send(result.ops[0]);
          }
      });
    });
  };

//READ get tasks for 
//   module.exports = function(app, db) {
//     app.get('/task', (req, res) => {
//       // You'll retrieve a task here.
//       res.send('Task created!')
//     });
//   };
// //UPDATE
// module.exports = function(app, db) {
//     app.post('/task', (req, res) => {
//       // You'll update a task here.
//       res.send('Task created!')
//     });
//   };
// //DELETE
// module.exports = function(app, db) {
//     app.post('/task', (req, res) => {
//       // You'll delete a task here.
//       res.send('Task created!')
//     });
//   };
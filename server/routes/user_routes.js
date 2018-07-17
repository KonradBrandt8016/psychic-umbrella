module.exports = function(app, db) {
    app.post('/user', (req, res) => {
        var user = {name:req.body.name,email:req.body.email,password:req.body.password}
      db.collection('users').insert(user,(err,result)=>{
          if(err){
              res.send({'error':'Unable to create user.'});
          } else{
              res.send(result.ops[0]);
          }
      });
    });
  };

  module.exports = function(app, db) {
    app.get('/user', (req, res) => {
        var user = {name:req.body.name,email:req.body.email,password:req.body.password}
      db.collection('users').insert(user,(err,result)=>{
          if(err){
              res.send({'error':'Unable to create user.'});
          } else{
              res.send(result.ops[0]);
          }
      });
    });
  };
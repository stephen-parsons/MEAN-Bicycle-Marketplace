var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
var User = mongoose.model('User');

module.exports = {
  // all: function(req, res) {
  //   Product.find({}, function(err, products) {
  //     if(err){
  //       console.log(err);
  //       }
  //     else {
  //       console.log(products); 
  //       return res.json(products);
  //     }
  //   }) 
  // },
  findOne: function(req,res,id) {
    User.find({_id: id}, function(err, user){
      if(err){
          console.log(err);
          return res.json(err)
        }
        else{
          console.log(user); 
          return res.json(user);
        }
    })
  },
  create: function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
      if(err) {
        console.log('something went wrong'); 
        console.log(err); 
        return res.json(err);
      }
      else{ 
        console.log('successfully added a user!');
        req.session.user = user._id;
        return res.json(user);
      } 
    });
  },
  login: function(req,res){
    console.log("POST DATA", req.body);
    User.find({email: req.body.email}, function(err, user){
      if (err){
        console.log('email not found'); 
        return res.json(err);
      }
      else{
        (bcrypt.compare(req.body.password, user[0].password)
          .then(function(){
            console.log("successfully logged in")
            req.session.user = user[0]._id;
            return res.json(user);
          })
          .catch(error=>{
            return res.json(error);
          }))
      }      
    })
  }
}
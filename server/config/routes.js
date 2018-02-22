var user = require('../controllers/user.js');
var listing = require('../controllers/listing.js');
var path = require('path');

module.exports = function(app){

  // USER ROUTES
  
  app.post('/user/create', function(req, res) {
    console.log(req.body);
    user.create(req,res); 
  })

  app.post('/user/login', function(req, res) {
    console.log(req.body);
    user.login(req,res); 
  })

  app.get('/user/session', function(req, res) {
    return res.json(req.session.user); 
  })

  app.get('/user/logout', function(req, res) {
    req.session.user = null;
    return res.json(req.session.user); 
  })

  app.get('/user/:id', function(req, res) {
    user.findOne(req,res,req.params.id); 
  })

  // LISTING ROUTES

  app.post('/listing/create', function(req, res) {
    console.log(req.body);
    listing.create(req,res); 
  })

  app.put('/listing/edit', function(req, res) {
    console.log(req.body);
    listing.update(req,res); 
  })

  app.get('/listing/:id', function(req, res) {
    listing.findAllForUser(req,res,req.params.id); 
  })

  app.get('/listing', function(req, res) {
    listing.findAllListings(req,res); 
  })

  app.delete("/listing/remove/:id", function(req,res){
    listing.removeListing(req,res,req.params.id);
  })

  // app.get('/listing/random', function(req, res) {
  //   listing.random(req,res); 
  // })

  // ROOT
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angularApp/dist/index.html"))
  });
};
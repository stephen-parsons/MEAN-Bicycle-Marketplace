var mongoose = require('mongoose');
var Listing = mongoose.model('Listing');
var User = mongoose.model('User');

module.exports = {
  create: function(req, res) {
    User.findOne({_id: req.session.user}, function(err, user){
      var listing = new Listing(req.body);
      listing._user = user._id;
      listing.save(function(err) {
        if(err) {
          console.log('something went wrong'); 
          return res.json(err); 
        }
        let newListings = user.listings;
        newListings.push(listing);
        User.findByIdAndUpdate(user._id, {$set : {listings: newListings}}, function(err){
          if(err) {
            console.log('something went wrong'); 
            return res.json(err); 
          }
          else{ 
            console.log('successfully added a listing!');
            return res.json(listing);
          }
        }); 
      });
    })
  },

  update: function(req, res) {
    Listing.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, listing){
      if(err) {
          console.log('something went wrong'); 
          return res.json(err); 
        }
        else{ 
          console.log('successfully edited a listing!');
          return res.json(listing);
        }
    })
  },

  findAllListings: function(req,res){
    Listing.find({}, function(err, listings) {
      if(err){
        console.log(err);
        }
      else {
        console.log("All listings:", listings); 
        return res.json(listings);
      }
    }) 
  },

  findAllForUser: function(req,res,id) {
    User.findOne({_id: req.session.user}).populate('listings').exec(function(err, user){
      console.log("All listings for user:", user.listings)
      return res.json(user.listings);
    })
  },

  removeListing: function(req,res,id){
    Listing.deleteOne({_id: id}, function(err){
      if(err){
        console.log(err);
        }
      else {
        console.log("Deleted listing"); 
        return res.json({deleted: true});
      }
    })
  }
}
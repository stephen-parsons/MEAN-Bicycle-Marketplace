// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var ListingSchema = new mongoose.Schema({
	title: {
		type: String,

		minlength: [1, "Title must be at least 2 characters long."], 

		required: [true, "Please enter a title."]
	},
	text: {
		type: String,

		minlength: [10, "Listing must be at least 10 characters long."], 

		required: [true, "Please enter text for your listing."]
	},
	price: {
		type: Number,

		required: [true, "Please enter a price."]
	},
	location: {
		type: String,

		required: [true, "Please enter a location."]
	},
	imgUrl: {
		type: String,

		required: [true, "Please enter an image URL."]
	},
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
},
  {timestamps: true});
// register the schema as a model
var Listing = mongoose.model('Listing', ListingSchema);
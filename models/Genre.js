const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
	name: { type: String, required: true },
	createdAt: {type: Date, default: Date.now}
})

const Genre = module.exports = mongoose.model('Genre', genreSchema)


// Old school
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}

module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
}


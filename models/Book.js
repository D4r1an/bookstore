const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: { type: String, required: true },
	genre: { type: String, required: true },
	author: { type: String, required: true },
	publisher: { type: String },
	description: { type: String },
	image_url: { type: String },
	buy_url: { type: String },
	pages: { type: Number },
	createdAt: { type: Date, default: Date.now }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}

module.exports.getBookById = (id, callback) => {
	Book.findById(id, callback);
}
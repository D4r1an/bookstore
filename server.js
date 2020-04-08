const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();

Genre = require('./models/Genre');
Book = require('./models/Book');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/Development');
const db = mongoose.connection;
app.use(bodyParser.json);


app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.get('/api/genres', (req, res) => {
	Genre.find().then(g => res.json(g));
	//Genre.getGenres()
})

app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	})
})

app.get('/api/books', (req, res) => {
	Book.find().then(g => res.json(g));
	//Book.getBooks()
})

app.get('/api/books/:_id', (req, res) => {
	Book.findById(req.params._id, function(err, book) {
		if(err){
			throw err;
		}
		res.json(book)
	})
})



app.listen(port, () => console.log(`Server started on ${port}`));
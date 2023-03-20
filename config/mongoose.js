// require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

// aquire the connection
const db = mongoose.connection;

// error
db.on('error', (err) => console.error(err));

// up and running then print to console
db.once('open', () => console.log('Connected to MongoDB'));


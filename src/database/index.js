const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/apisan', { promiseLibrary: global.Promise, useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.Promise = global.Promise;

module.exports = mongoose;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ciders', {
  useNewUrlParser: true,
  useCreateIndex: true }
);
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.log(err);
})
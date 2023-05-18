// const { connect, connection } = require('mongoose');

// connect('mongodb://127.0.0.1:27017/developersApplications');

// module.exports = connection;

const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
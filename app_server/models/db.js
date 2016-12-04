// Require Mongoose
var mongoose = require('mongoose');

// Create a Mongoose connection
var dbURI = 'mongodb://localhost:27017/Loc8r';
mongoose.connect(dbURI);

// Monitor the connection with Mongoose connection events
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI)
});
mongoose.connection.on('error', function() {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// Close the database and capture the process termination events
var gracefulShutdown = function (msg,callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.once('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

process.once('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});

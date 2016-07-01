var SerialPort = require('serialport').SerialPort;

var split = require('split2'),
   through = require('through2'),
   request = require('request'),
   JSONStream = require('JSONStream');

var SERVER_URL = 'http://localhost:3000';
var DEVICE_FILE = '/dev/ttyACM0';

var arduino = new SerialPort(DEVICE_FILE, {
  baudrate: 9600
});

arduino
  // Split input into comma-separated lines.
  .pipe(split())
  // Parse lines into JSON.
  .pipe(through.obj(function (csv, enc, done) {
      var measures = csv.split(',');
      this.push({
          measures: 
              measures.map(parseFloat),
          uploadedAt: new Date()
      });
      done();
  }))
  // Stringify JSON.
  .pipe(JSONStream.stringify())
  // Post each JSON object into the server.
  on('data', function (read) {
      request.post({
          body: read,
          url: SERVER_URL                                                                                                                                           
      });
  });
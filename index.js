// Simple node program to benchmark file read
var os = require('os');
var nodePath = require('path');
var fs = require('fs');

// Write a temp file
var filename = nodePath.join(os.tmpdir(), 'tempfile');
console.log('Writing to ' + filename);

var tmpstring = '1234567890'.repeat(10000);
fs.writeFileSync(filename, JSON.stringify(tmpstring));

// Benchmarking
var i;
var start, end;
var numberOfBenchmarks = 10000;

console.log("Number of tests = " + numberOfBenchmarks);

// using Require
start = new Date();
for (i = 0; i < numberOfBenchmarks; i++) {
  require(filename);
}
end = new Date();
console.log("Require = " + (end.getTime() - start.getTime()));

// using readFileSync
start = new Date();
for (i = 0; i < numberOfBenchmarks; i++) {
  fs.readFileSync(filename);
}
end = new Date();
console.log("Read File Sync = " + (end.getTime() - start.getTime()));


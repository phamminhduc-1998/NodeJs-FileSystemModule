var fs = require('fs');
var data = "PhamMinhDuc Write File SYNC for NodeJs";
/**
 * ghi đoạn data vào file sample.txt
 */
//append data to file
fs.appendFileSync('sample.txt', data, 'utf8');
console.log("Data is appended to file successfully");
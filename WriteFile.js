var fs = require('fs');
var data = "PhamMinhDuc Write File for NodeJs";
/**
 * ghi đoạn data vào file sample.txt
 */
//append data to file
fs.appendFile('sample.txt', data, 'utf8',
    //callback function
    function (err) {
        if (err) throw err;
        //if no error
        console.log("Data is appended to file successfully");
    });
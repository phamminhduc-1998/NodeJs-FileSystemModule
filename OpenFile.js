var fs = require('fs');//thu vien doc ghi file
/**
 * fs.open: mở file có tên sample.txt
 * w : mở tệp để viết. tệp được tạo (nếu nó không tồn tại) hoặc bị cắt bớt (nếu nó tồn tại)
 * 
 */
fs.open('sample.txt', 'w',function (err, file) {
        if (err) throw err;
        //if no error
        console.log("Open file");
    });
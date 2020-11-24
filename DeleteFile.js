var fs = require('fs');
/**
 * Xóa file có tên sample.txt
 */
fs.unlink('sample.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
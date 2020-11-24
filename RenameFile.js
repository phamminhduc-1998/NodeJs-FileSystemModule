var fs = require('fs');
/**
 * đổi tên sample.txt thành minhduc.txt
 */
fs.rename('sample.txt', 'minhduc.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
var fs = require('fs');
/**
 * đổi tên sample.txt thành minhduc.txt
 */
fs.renameSync('sample.txt', 'minhduc.txt');
console.log('File Renamed!');
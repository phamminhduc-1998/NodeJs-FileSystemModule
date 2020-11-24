var http = require('http'); //đọc, thực thi, xử lý…đối tượng
var fs = require('fs'); //thư viện đọc ghi file
var server = http.createServer(function (req, res) { //tạo server nhận request từ client
    /**
     * fs.readFile : đọc dữ liệu từ file
     * req.url.substring(1) : lấy tham số đầu tiên
     */
    console.log(req.url);
    fs.readFile("a.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text.html' });//gởi “header data” cho client
        res.write(data.toString('utf8'));//in noi dung ra html
        return res.end();//kết thúc ghi 
    });
});
server.listen(3000); //tao server o cong 3000, xác định port thực thi
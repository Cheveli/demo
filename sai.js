var s = require("http");
s.createServer((req,res)=>{
    res.write("saichevelly");
    res.end();


}).listen(8080)
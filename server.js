const http = require("http");

const port = 8081;
http.createServer((req, res)=>{
    res.writeHead(200, {"content-type" : "text/html"});
    res.write("<h6>hey we got our server here...addon data here</h6>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running on port ${port}`);
})
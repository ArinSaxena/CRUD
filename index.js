const http = require('http');

const server = http.createServer(function(req,res){
        console.log(req.url);
        console.log(req.method);
        res.writeHead(200,{"content-type":"text/html"});
        
        // res.write("hii");
        // res.write("\nHello");
        res.end();
    
}); 

server.listen(5000, () =>{
    console.log("listening on port 5000")
});

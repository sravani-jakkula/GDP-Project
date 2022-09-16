const http = require('http')
const fs=require('fs')
const port = 3000
const server = http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('login1.html',function(error, data){
        if(error){
            res.writeHead(404)
            res.write('error:file not found')
        }else{
            res.write(data)
        }
        res.end()
    })
   
})

server.listen(port, function(error){
if(error){
    console.log("something went wrong", error)
}else{
     console.log("darlings are listening",port )
}
})

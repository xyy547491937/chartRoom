var http=require('http');
const fs=require('fs');
http.createServer(function(req,res){
	 if(req.url.indexOf('/favicon.ico')==-1){
	 	fs.readFile('public'+req.url,(err,data)=>{
	 		if(err){

	 			return
	 		}else{
	 			res.write(data)
	 		}
	 			res.end()
	 	})
	 
	 }else{
	 	return false;
	 }
	

}).listen(3000,'127.0.0.1')
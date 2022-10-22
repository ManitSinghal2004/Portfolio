const http = require('http') ;
const port = 9000 ;
const fs = require('fs') ;

function requestHandler(req,res){
	console.log(req.url);
	res.writeHead(200,{'content-type:' : 'text/html'})

	// fs.readflile('./index.html' , function(err,data){
	// 	if(err){
	// 		console.log('error' , err);
	// 		return res.end('<h1>Errror!</h1>');
	// 	}
	// 	return res.end(data);
	// })


	let filePath ; 
	switch(request.url){
		case '/' :
			filePath = './index.html' ;
			break ;
		case '/resume':
			filePath = './resume.html' ;
			break ;
		default :
			filePath = './404.html' ;
	}


	fs.readflile('./index.html' , function(err,data){
		if(err){
			console.log('error' , err);
			return res.end('<h1>Errror!</h1>');
		}
		return res.end(data);
	})


}





const server = http.createServer(requestHandler) ; 
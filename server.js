import { error } from 'console';
import http, { createServer } from 'http'

const port = process.env.port

const server = createServer((req,res)=>{
    // console.log(req.url)
    if(req.url == '/'){
        try {
            if(req.method === 'GET'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(`<h1>Home Page</h1>`);
            }
            else{
                throw new Error('Method not allowed!')
            }
        } catch (error) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end(error);
        }
        
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`<h1>Not Found</h1>`);
    }
    if(req.url =='/login'){
        try{
            if(req.method === 'POST'){
                
            }
            else{
                throw new Error('Method not allowed')
            }
        }
        catch (error){
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end(error);
        }
    }
    
});

server.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
}
);
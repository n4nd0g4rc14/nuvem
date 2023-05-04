const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Página inicial</h1><p>Bem-vindo à página inicial da aplicação web!</p></body></html>');
        res.end();
  } else if (req.method === 'GET' && req.url === '/sobre') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Sobre</h1><p>Esta é a página sobre a aplicação web!</p></body></html>');
        res.end();
  } else if (req.method === 'GET' && req.url === '/contato') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Contato</h1><p>Entre em contato conosco através do e-mail contato@aplicacaoweb.com.br</p></body></html>');
        res.end();
  } else {  
        res.writeHead(404);
        res.end();
  }
});

server.listen(3000);
console.log('Servidor iniciado em http://localhost:3000');

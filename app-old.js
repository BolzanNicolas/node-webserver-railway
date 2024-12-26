const http = require('http');

console.clear();

http.createServer( (request, response) => {
    
    // response.writeHead(200, { 'Content-Type' : 'application/json' });
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type' : 'application/csv' });

    response.write('Hola Mundo');
    response.end();
    
})
.listen(8080);

console.log('Escuchando en el puerto 8080');
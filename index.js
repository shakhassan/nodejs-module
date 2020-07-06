var http = require('http')
var dt = require('./myfirstmodule')
var mathPlus = require('./mysecondmodule')
var jedi = require('./mythirdmodule')

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    res.write('Current date and time : ' + dt.myDateTime());
    res.write('Plus : ' + mathPlus.getPlus(2,3));
    res.write('Multiply : ' + mathPlus.getMultiply(2,3));
    res.write('The real Jedi master is ' + jedi.getName() + ' and he is from ' + jedi.getOrigin());
    
    res.end('Hello World!');
}).listen(8080);
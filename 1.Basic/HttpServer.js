const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('home page');
        res.end();
    }

    if(req.url === '/api/author'){
        const obj = {
            name: 'prabeen',
            age: 20,
            fullname: 'prabeen ragupathi',
            skills: ['html', 'css', 'js', 'nodejs', 'reactjs', 'mongodb', 'python', 'SQL']
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
});

server.listen(5000);

console.log('listening on port 5000');
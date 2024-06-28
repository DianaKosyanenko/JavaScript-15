// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
const http = require('http');
let countFirst = 0;
let countSecond = 0;
const server = http.createServer((req, res) =>{
    console.log('Запрос получен')
    if(req.url === '/'){
        res.writeHead(200,{"Content-Type": "text/html; charset=UTF-8"});
        countFirst ++;
        console.log(countFirst);
        res.end('<a href="/about">Переход на страницу about</a>');
    }
    else if(req.url === '/about'){
        res.writeHead(200,{"Content-Type": "text/html; charset=UTF-8"});
        countSecond ++;
        console.log(countSecond);
        res.end('<a href="/">Переход на страницу Главная</a>');
    }
    else {
        res.writeHead(404,{"Content-Type": "text/html; charset=UTF-8"});
        res.end('page not found');
    }

});

const port = 3000;
server.listen(port, () => {
    console.log(`серве запущен на порту номер ${port}`);
})

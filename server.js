const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const server = require('http').Server(app);
server.listen(3000, () => console.log('Server running at port 3000'));

app.get('/', (req, res) => {
    res.render('main');
});
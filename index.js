const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hallo world! welcome this is work')
})

const users = [
    { id: 1, name: 'nayem', email: 'nayem@gmail.com', phone: '017221122' },
    { id: 2, name: 'alu', email: 'alu@gmail.com', phone: '017221122' },
    { id: 3, name: 'hallo', email: 'hallo@gmail.com', phone: '017221122' },
    { id: 4, name: 'gelo', email: 'gelo@gmail.com', phone: '017221122' },
    { id: 5, name: 'motu, email: motu@gmail.com', phone: '017221122' },
    { id: 6, name: 'mohi', email: 'mohi@gmail.com', phone: '017221122' },
    { id: 7, name: 'toho', email: 'toho@gmail.com', phone: '017221122' }
]

app.get('/users', (req, res) => {
    res.send(users);
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
})
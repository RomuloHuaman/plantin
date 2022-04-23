const express = require('express');
const app = express();

app.use(express.json());

const usuarios = [
    {id: 1, name: 'romulo', edad: '26', suscreto:true},
    {id: 2, name: 'cesar', edad: '20', suscreto:true},
    {id: 3, name: 'juan', edad: '23', suscreto:true},
];

app.get('/', (req, res) => {
    res.send('Node JS api');
});

app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.get('/api/usuarios/:id', (req, res) => {
    const usuarios = usuarios.find(c => c.id === parseInt(req.params.id));
    if (!usuarios) return res.status(400).send('usuario no encontrado');
    else res.send(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const usuarios = {
        id: usuarios.length + 1,
        name: req.body.name,
        edad: parseInt(req.body,edad),
        suscreto: (req.body.sucreto === 'true')
    };

    usuarios.push(usuarios);
    res.send(usuarios);
});

app.delete('/api/usuarios/:id',(req, res) =>{
    const usuarios = usuarios.find(c => c.id === parseInt(req.params.id));
    if (!usuarios) return res.status(400).send('usuario no encontrado');

    const index = usuarios.indexOf(usuarios);
    usuarios.splice(index, 1);
    res.send(usuarios);
});
 const port = process.env.port || 3000;
 app.listen(port, () => console.log('escuchando en puerto ${port}...'));

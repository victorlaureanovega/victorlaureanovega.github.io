import express from 'express';

const app = express();

app.listen(1984, () => {
   console.log('Up and up');
});

app.get('/bienvenida', (req, res) => {
    res.send('Esto no es una página html');
});
 
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + '/public'));

app.get('/otraBienvenida', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'bienvenida.html'));
});
import express  from 'express';
import { join, dirname } from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(express.static(join(__dirname, '../public')));

app.use(function (req, res, next) {
	console.log(req.url);
    next();
});
app.use(express.static('./dist'));
app.get('/map', function(req, res) {
	res.sendFile('index.html', { root: __dirname + '/../dist' });
});
app.get('/settings', function(req, res) {
	res.sendFile('index.html', { root: __dirname + '/../dist' });
});

app.listen(port, () => console.log(`App running on ${port}.`));
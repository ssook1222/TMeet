import express from 'express';
import {createConnection} from "typeorm";

const app = express();

app.get('/api/hello', (req, res) => {
    res.send('hello world');
})

createConnection().then(connection => {
    app.listen(8080, () => {
        console.log('server is listening 8080');
    });
});
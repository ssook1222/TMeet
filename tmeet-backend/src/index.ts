import express from 'express';
import {createConnection} from "typeorm";
import router from './router';

const app = express();

app.use(express.json());
app.use('/api', router);

createConnection().then(connection => {
    app.listen(5000, () => {
        console.log('server is listening 5000');
    });
});
import express from 'express';
import router from './controller/router';
import errorHandler from './utils/error-handler';
import AppDataSource from './config/dataSource';

const app = express();
const port = 3000;

AppDataSource.initialize().then(() => console.log('DATABASE is connected!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`KWEB project listening on port ${port}`);
});

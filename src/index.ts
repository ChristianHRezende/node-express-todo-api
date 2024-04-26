import express, {Request, Response} from 'express';
import cors from 'cors';
import routes from './routes';
import RootRouter from './routes';
import methodOverride from 'method-override';
import {overrideDefaultErrorHandler} from './overrides';
function setup() {
  const app = express();
  const port = 3000;

  // parse json request body
  app.use(express.json());

  // parse urlencoded request body
  app.use(express.urlencoded({extended: true}));

  app.use(cors());
  app.options('*', cors());

  // Override Error default method
  app.use(methodOverride());

  // v1 api routes
  const rootRoutes = new RootRouter();
  app.use('/v1', rootRoutes.getRouter());

  app.use(overrideDefaultErrorHandler);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
setup();

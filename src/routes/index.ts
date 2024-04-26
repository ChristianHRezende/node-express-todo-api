import express from 'express';
import TodoRouter from './todo.route';

export default class RootRouter {
  private router;

  constructor() {
    this.router = express.Router();
    const todoRouter = new TodoRouter();
    this.router.use('/todos', todoRouter.getRoutes());
  }

  public getRouter = () => {
    return this.router;
  };
}

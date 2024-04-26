import express, {Router} from 'express';
import {TodoController} from '../controller';
import {validateBody} from '../middlewares';
import {TodoSchema} from '../domain/todo';

class TodoRouter {
  private path = '/todos';
  private router;

  constructor() {
    this.router = express.Router();
    const todoController = new TodoController();

    const todoSchema = new TodoSchema();
    this.router.route('/').get(todoController.searchTodos);
    this.router
      .route('/')
      .post(validateBody(todoSchema.createTodo.body), todoController.postTodo);
  }

  public getRoutes = (): Router => {
    return this.router;
  };

  public getPath = (): string => {
    return this.path;
  };
}

export default TodoRouter;

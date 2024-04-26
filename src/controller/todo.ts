import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {TodoModel} from '../domain/todo/model';
import {PostRequestBody} from '../domain/todo/types/todoRequest.types';

import {DefaultGetResponse} from '../types/generics';
import {TodoService} from '../service';

export class TodoController {
  private todoService;

  constructor() {
    this.searchTodos.bind(this);
    this.todoService = new TodoService();
  }

  public searchTodos = (request: Request, response: Response): void => {
    const todos = this.todoService.getTodos();
    response.send(todos);
  };

  public postTodo = (
    request: Request<any, DefaultGetResponse<TodoModel>, PostRequestBody>,
    response: Response,
  ): void => {
    const todo = this.todoService.postTodo(request.body);
    response.send({
      data: todo,
      status: httpStatus[200],
    });
  };
}

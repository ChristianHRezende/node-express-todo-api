import {PostRequestBody} from '../domain/todo/types/todoRequest.types';
import {TodoRepository} from '../repository';

export class TodoService {
  private todoRepository;
  constructor() {
    this.todoRepository = new TodoRepository();
  }

  public getTodos = () => {
    console.log('get todos');
    return this.todoRepository.findAllTodos();
  };

  public postTodo = (body: PostRequestBody) => {
    return this.todoRepository.createTodo(body);
  };
}

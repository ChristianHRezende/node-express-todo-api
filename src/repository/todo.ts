import {PostRequestBody} from '../domain/todo/types/todoRequest.types';

export class TodoRepository {
  public findAllTodos = () => {
    return [
      {
        id: 1,
        title: 'buy bananas',
      },
      {
        id: 2,
        title: 'buy praystaxuu',
      },
    ];
  };

  public createTodo = (body: PostRequestBody) => {
    return body;
  };
}

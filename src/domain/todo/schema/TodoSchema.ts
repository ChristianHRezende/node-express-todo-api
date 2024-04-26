import Joi from 'joi';

export class TodoSchema {
  constructor() {}

  public createTodo = {
    body: Joi.compile({
      title: Joi.string().required(),
    }),
  };
}

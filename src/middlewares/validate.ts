import Joi from 'joi';
import {ApiError} from '../errors';
import httpStatus from 'http-status';
import {Request, Response} from 'express';

export function validateBody(schema: Joi.Schema<any>) {
  return function (
    request: Request,
    response: Response,
    next: (error?: Error) => void,
  ) {
    const {error} = Joi.compile(schema)
      .prefs({
        errors: {
          label: 'key',
        },
        abortEarly: false,
      })
      .validate(request.body);
    if (error) {
      const errorMessage = error.details
        .map(details => details.message)
        .join('&&');
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    return next();
  };
}

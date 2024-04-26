import {Request, Response} from 'express';

/**
 * Overrides de the default error handler
 * @requires method-override injected on express intance
 */
export function overrideDefaultErrorHandler(
  err: Error,
  req: Request,
  res: Response,
) {
  if ('statusCode' in err) {
    // TODO: ADD to log the stack
    console.log(err.stack ?? null);
    res.status(err.statusCode as number).send({
      errors: err.message.split('&&'),
      status: err.statusCode,
    });
    return;
  }
  // TODO: ADD to log the message

  res.status(500).send({
    reason: 'Internal server error',
    status: 500,
  });
}

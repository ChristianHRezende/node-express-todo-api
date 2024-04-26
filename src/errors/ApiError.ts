export interface IApiError extends Error {
  statusCode: number;
  isOperational: boolean;
  stack?: string;
}

export class ApiError extends Error implements IApiError {
  private _statusCode;
  private _isOperational;
  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = '',
  ) {
    super(message);
    this._statusCode = statusCode;
    this._isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  get statusCode() {
    return this._statusCode;
  }

  get isOperational() {
    return this._isOperational;
  }
}

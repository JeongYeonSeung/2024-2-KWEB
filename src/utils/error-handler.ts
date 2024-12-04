import { ErrorRequestHandler } from 'express';
import { CustomError } from './custom-error';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res
      .status(err.code)
      .json({ name: err.name, message: JSON.parse(err.message) });
  }

  res.status(500).json({ message: 'Something Went Wrong', err });
  return;
};

export default errorHandler;

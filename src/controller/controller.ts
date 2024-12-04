import { RequestHandler } from 'express';

export const getHello: RequestHandler = (req, res, next) => {
  res.send('Hello World');
};

import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name == "TokenExpiredError") {
    return res.status(401).json({ success: false, message: "token expired !" });
  }
  if (error.name == "JsonWebTokenError") {
    return res.status(401).json({ success: false, message: "token invalid !" });
  }

  if (error) {
    return res.status(500).json({ success: false, message: error });
  }

  next();
};

export { errorHandlerMiddleware };//error handle

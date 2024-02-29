import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization failed: No token provided' });
  }
  try {
    // const decodedToken = jwt.verify(token, 'your_secret_key');
    // req['userData'] = { userId: (decodedToken as { userId: string }).userId };
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Authorization failed: Invalid token' });
  }
};

export default authMiddleware;

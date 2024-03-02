import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get all users
    const users = await prisma.user.findMany();

    // Send the response
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export default getAllUsers;

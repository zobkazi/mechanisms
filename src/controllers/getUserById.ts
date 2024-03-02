import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;

    // Find user by ID
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send the response
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export default getUserById;

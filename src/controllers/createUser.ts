import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs'
import { UserCreateSchema } from '../schema';
import prisma from '../prisma';



const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the request body
    const passBody = await UserCreateSchema.parseAsync(req.body);

 
    if (!passBody.name || !passBody.email) {
      res.status(400).json({
        message: 'Name and email are required',
      })
    }

    // Check if the email already exists
    const existingUser = await prisma.user.findFirst({
      where: { email: passBody.email },
    });
    if (existingUser) {
      res.status(409).json({
        message: 'Email already exists',
      })
    }


    // hash password
    const hashedPassword = await bcrypt.hash(passBody.password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name: passBody.name,
        email: passBody.email,
        password: hashedPassword,
      }
    });

    // Send the response
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export default createUser;

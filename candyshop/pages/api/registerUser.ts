import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import bcryptjs from 'bcryptjs';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret';

const createUserSchema = yup.object().shape({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, email, password, confirmPassword } = await createUserSchema.validate(req.body);

  // Hash the user's password
  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
    // Create a new user record in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token, role: user.role });

    //res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Sorry, something went wrong!' });
  } finally {
    await prisma.$disconnect();
  }
}
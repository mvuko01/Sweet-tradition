import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import bcryptjs from "bcryptjs";
import * as yup from "yup";
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret';

const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const { email, password } = await loginSchema.validate(req.body);

    try {
    // Try to find the user with the given identifier (username or email)
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: email }, { email: email }],
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored password hash
    const passwordMatches = await bcryptjs.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token, role: user.role });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Sorry, something went wrong!" });
    } finally {
      await prisma.$disconnect();
    }
}

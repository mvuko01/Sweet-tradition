import prisma from "../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const { id } = await req.body;
  
  try {
    const updatedProduct = await prisma.candy.delete({
      where: { id },
    });

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
  }
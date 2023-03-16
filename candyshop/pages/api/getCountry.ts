import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";


/*BITNO: AKO NAKON UBACIVANJA SLATKISA U BAZU OVO NISI KORISTIA BRISI */
export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
  try {
        const data = await prisma.country.findMany()
        return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
    


}
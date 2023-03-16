import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

/*BITNO: AKO NAKON UBACIVANJA SLATKISA U BAZU OVO NISI KORISTIA BRISI */

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    try {
        if(req.method === "POST"){
            try{
                const candies = JSON.parse(req.body);
                const data = await prisma.candy.createMany({
                    data: candies,
                })
                res.status(200).json(data);
            }catch(error){
                return res.status(500).json({message: "Error adding users"})

            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
    
   
    


}
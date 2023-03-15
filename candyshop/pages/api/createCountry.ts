import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import { users } from '../../constants/users';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    try {
        if(req.method === "POST"){
            try{
                const data = await prisma.user.createMany({
                    data: users,
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
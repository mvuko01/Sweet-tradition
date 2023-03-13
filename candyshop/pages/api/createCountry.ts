import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import { blogs } from '../../constants/blogsss';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    try {
        if(req.method === "POST"){
            try{
                const data = await prisma.blog.createMany({
                    data: blogs,
                })
                res.status(200).json(data);
            }catch(error){
                return res.status(500).json({message: "Error adding countries"})

            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
    
   
    


}
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";




export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    if(req.method === 'GET')
    {
        try {
            const blogs = await prisma.blog.findMany()
            return res.status(200).json(blogs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        res.status(405).json({message: 'Request not allowed'})
    }

}
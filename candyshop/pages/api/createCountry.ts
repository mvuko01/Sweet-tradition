import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import { countries } from '../../constants/countries';
export default async function handler(req: NextApiRequest, res: NextApiResponse)
{

    const createManyCountries = countries.map((country) =>
        prisma.country.create({
            data: country,
        }),
    )
    

    try {
        
    } catch (error) {
        
    }
}
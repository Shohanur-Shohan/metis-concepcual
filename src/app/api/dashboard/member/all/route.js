import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(req, res){

    try{

        const prisma = new PrismaClient();

        const result = await prisma.member.findMany();

        
        //revalidatePath
        // const path = req.next.nextUrl.pathname
        // revalidatePath(path)

        return NextResponse.json({status: "success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const blogID = searchParams.get('id');

        const prisma = new PrismaClient();

        const result = await prisma.blog.findUnique({
            where: {id: parseInt(blogID)},

        });

        return NextResponse.json({status: "success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
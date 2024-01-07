import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const blogID = searchParams.get('id');

        let reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.blog.update({
            where: {id: parseInt(blogID)},
            data: reqBody,
        });

        return NextResponse.json({status: "success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const blogID = searchParams.get('id');

        // let reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.blog.delete({
            where: {id: parseInt(blogID)},
        });

        return NextResponse.json({status: "success"});
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
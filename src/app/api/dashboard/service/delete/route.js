import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const serviceID = searchParams.get('id');

        // let reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.service.delete({
            where: {id: parseInt(serviceID)},
        });

        return NextResponse.json({status: "success"});
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
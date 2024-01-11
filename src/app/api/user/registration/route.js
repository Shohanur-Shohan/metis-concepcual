import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req, res){

    try{
        let reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.user.create({
            data: reqBody,
        });

        return NextResponse.json({status: "Success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "Failed",data: error.toString() });
    }
}
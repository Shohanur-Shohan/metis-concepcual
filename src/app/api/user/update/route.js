import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const ID = searchParams.get('id');

        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.user.update({
            where: {id: parseInt(ID)},
            data: reqBody,
        });

        return NextResponse.json({status: "Success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "Failed",data: error.toString() });
    }
}
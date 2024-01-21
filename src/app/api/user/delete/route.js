import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res){

    try{
        const {searchParams} = new URL(req.url);
        const ID = searchParams.get('id');

        const prisma = new PrismaClient();
        const result = await prisma.user.delete({
            where: {id: parseInt(ID)},
        });

        return NextResponse.json({status: "Success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "Failed",data: error.toString() });
    }
}
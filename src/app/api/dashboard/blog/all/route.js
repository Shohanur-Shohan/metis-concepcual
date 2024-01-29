import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req, res){

    try{

        const prisma = new PrismaClient();

        const result = await prisma.blog.findMany();

          //revalidatePath
          const path = req.next.nextUrl.pathname
          revalidatePath(path)

        return NextResponse.json({status: "success",data: result });
    }
    catch(error){
        return NextResponse.json({status: "failed",data: error.toString() });
    }
}
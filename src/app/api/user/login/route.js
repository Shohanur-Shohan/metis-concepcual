import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CreateToken } from "@/utility/JwtTokenHelper";

export async function POST(req, res){

    try{
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.user.findMany({
            where: reqBody,           
        });

        if(result.length===0){
            return NextResponse.json({status: "Failed",data: result });
        }else{
            let token = await CreateToken(result['email'], result['id']);
            const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const cookieString = `token=${token}; expires=${expirationTime}; SameSite=None; path=/`;

            return NextResponse.json(
                {status: "Success",data: token },
                {status:200, headers:{'set-cookie': cookieString}}
            );
        }

    }
    catch(error){
        return NextResponse.json({status: "Failed",data: error.toString() });
    }
}
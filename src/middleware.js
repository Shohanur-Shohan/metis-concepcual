import { VerifyToken } from "@/utility/JwtTokenHelper";
import { NextResponse } from "next/server";

export async function middleware(req, res){

    if(req.nextUrl.pathname.startsWith("/dashboard")){
    
        try {
            let token = req.cookies.get("token");
            // console.log("Token", token);
            let payload = await VerifyToken(token["value"]);
            // console.log("Payload", payload);

            const requestHeader = new Headers(req.headers);
            requestHeader.set("email", payload["email"]);
            requestHeader.set("id", payload["id"]);

            // console.log(requestHeader);

            return NextResponse.next({
                request: { headers: requestHeader },
            });

        } catch (error) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

    }

}
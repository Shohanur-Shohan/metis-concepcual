
import { NextResponse } from "next/server";

export async function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        try {
            let token = req.cookies.get("token");
            // console.log("Token", token);
            if(token === undefined){
                return NextResponse.redirect(new URL("/login", req.url));
            }
            else{
                res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                return NextResponse.next();

            }

        } catch (error) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

    }

    // Continue with the normal flow if the pathname doesn't start with "/dashboard"
    return NextResponse.next();
}

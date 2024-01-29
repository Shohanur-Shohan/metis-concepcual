"use client"
import axios from "axios";

// all blog
export async function getBlogData() {
    let res = await axios.get("/api/dashboard/blog/all");
    console.log(res);

    if (res?.status === "success") {
        // HTTP status code 200-299 indicates success
        return res.json();
    } else {
        // This will activate the closest `error.js` Error Boundary
        throw new Error(`Failed to fetch blog data. Status: ${res.status}`);
    }
}

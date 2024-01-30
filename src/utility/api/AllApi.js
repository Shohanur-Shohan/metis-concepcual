

export async function getData(){
    const res = await fetch(`${process.env.URL}/api/dashboard/member/all`, {
      method: "PUT",
      cache: "no-store",
    });
    return res.json();
}

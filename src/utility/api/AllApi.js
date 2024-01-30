// Member
export async function getData() {
  try {
      const res = await fetch(`${process.env.URL}/api/dashboard/member/all`, {
          method: "GET",
          next: { revalidate: 0 },
          caches: 'no-store',
      });

      return res.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
  }
}

// dashboard user
export async function getUserData() {
    try {
        const res = await fetch(`${process.env.URL}/api/user/all`, {
            method: "GET",
            next: { revalidate: 0 },
            caches: 'no-store',
        });
  
        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

// dashboard blog
export async function getBlogData() {
    try {
        const res = await fetch(`${process.env.URL}/api/dashboard/blog/all`, {
            method: "GET",
            next: { revalidate: 0 },
            caches: 'no-store',
        });
  
        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

// dashboard blog
export async function getServiceData() {
    try {
        const res = await fetch(`${process.env.URL}/api/dashboard/service/all`, {
            method: "GET",
            next: { revalidate: 0 },
            caches: 'no-store',
        });
  
        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}
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

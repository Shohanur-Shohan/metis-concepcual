export async function getData() {
  try {
      const res = await fetch(`${process.env.URL}/api/dashboard/member/all`, {
          method: "GET",
          headers: {
              // Add any headers if needed
          },
          //S et caching and revalidation options
          next: { revalidate: 0 },
          caches: 'no-store',
      });

      return res.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // You might want to handle or propagate the error accordingly
  }
}

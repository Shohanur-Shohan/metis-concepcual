
import { Suspense } from "react";
import DashboardBlogCard from "../blogComponent/DashboardBlogCard";
import BlogSkeleton from "../blogComponent/BlogSkeleton";
import { getBlogData } from "@/utility/api/AllApi";


const DashboardBlogs = async () => {

  const blogs = await getBlogData();
  // console.log(blogs);

    
    return (
        <div className="px-4 py-10 mx-auto max-w-[1170px] sm:px-6 lg:px-8 lg:py-14">
          {/* <!-- Title --> */}
          <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white">All Blogs</h2>
          </div>
          {/* <!-- End Title --> */}
        
          {/* <!-- Grid --> */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <Suspense fallback={ <BlogSkeleton />}>

              {

              blogs?.data.map((item, id)=>{
  
              return(
  
                  <DashboardBlogCard key={id} item={item}/>
              )
  
              })
  
              }
              
            </Suspense>
          </div>
          {/* <!-- End Grid --> */}
        
        </div>
    );
};

export default DashboardBlogs;
"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import BlogPost from "./BlogPost";
import BlogSkeleton from "./BlogSkeleton";

const Blog = () => {

  // console.log(blogs);

  const [blogs, setBlogs] = useState();


  useEffect(()=>{
  
  (async ()=>{
  
    try {
      let res = await axios.get("/api/dashboard/blog/all", { cache: 'no-store' });
      // console.log(res);
      setBlogs(res?.data);

    } catch (error) {
      console.log("blog fetch error", error);
    } 
  
  })()

  }, []);
  console.log(blogs);
  

  return (
    <section className="relative py-20 overflow-hidden">

      <div className="container relative px-4">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h2 className="mb-4 text-[2rem] md:text-4xl font-bold font-heading text-center">
          All <span className="text-blue-600">Blogs</span></h2>
          <p className="leading-loose text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>

        {/* blog grid */}


        <div className="grid grid-cols-12 gap-[30px]">

            {

            blogs?.data.map((item, id)=>{

            return(

              <Suspense key={id}  fallback={<BlogSkeleton />}>
                <BlogPost key={id} item={item}/>
              </Suspense>
            )

            })

            }
        </div>                

      </div>
    </section>
  );
};


export default Blog;

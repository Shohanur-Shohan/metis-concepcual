'use client'
import { Suspense, useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import BlogSkeleton from "../blogComponent/BlogSkeleton";
import axios from "axios";
import { revalidatePath } from 'next/cache'


const Service = () => {

  const [service, setService] = useState();


  useEffect(()=>{
  
  (async ()=>{
  
    try {
      let res = await axios.get("/api/dashboard/service/all");
      // console.log(res);
      setService(res?.data);
      revalidatePath('/services')

    } catch (error) {
      console.log("blog fetch error", error);
    } 
  
  })()

  }, []);

  return (
    <section className="pt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-heading">
            Our Services
          </h2>
          <p className="leading-loose text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* card */}
            {

            service?.data.map((item, id)=>{

            return(

              <Suspense key={id}  fallback={<BlogSkeleton />}>
                <ServiceCard  key={id} item={item}/>
              </Suspense>
            )

            })

            }
          {/* card */}
        </div>
      </div>
    </section>
  );
};

export default Service;

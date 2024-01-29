"use client"
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import MemberSkeleton from "./MemberSkeleton";
import { revalidatePath } from 'next/cache'



const Team = () => {

  const [member, setMember] = useState();

  useEffect(()=>{
  
  (async ()=>{
  
    try {
      let res = await axios.get("/api/dashboard/member/all");
      setMember(res?.data);
      // console.log(res?.data);
    } catch (error) {
      console.log("Error fetching member", error.toString());
    }
    
  
  } )()

  }, [])
  revalidatePath('/about')


  // console.log(member);
  // console.log(member?.status);



  return (
    <section className="py-20">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-lg mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-xl">
            Our Team
          </span>
          <h2 className="mt-2 mb-4 text-3xl font-bold md:text-4xl font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="leading-loose text-blueGray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="flex flex-wrap">

          {/* member */}     
            {
            
            member?.data.map((item, id)=>{

              return(

                <Suspense key={id} fallback={ <MemberSkeleton/> }>
                  <MemberCard key={id} item={item}/> 
                </Suspense>

              )
           
            })
            
            }    
          {/* member */}

        </div>
      </div>
    </section>
  );
};

export default Team;

// "use client"
// import axios from "axios";
// import { Suspense, useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import { getData } from "@/utility/api/AllApi";
import { Suspense } from "react";
import MemberSkeleton from "./MemberSkeleton";



const Team = async () => {


  // const [member, setMember] = useState();


  // useEffect(()=>{
  
  // (async ()=>{
  
  //   try {
  //     let res = await axios.put("/api/dashboard/member/all", { cache: 'no-store' });
  //     setMember(res?.data);
  //     // console.log(res?.data);
  //   } catch (error) {
  //     console.log("Error fetching member", error.toString());
  //   }
    
  
  // } )()

  // }, [])


  // console.log(member);
  // console.log(member?.status);

  const res = await getData();
  // console.log(res);

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
        {/* <div className="flex flex-wrap"> */}
            
            
            <Suspense fallback={ <MemberSkeleton/> }>
              {
              
              res?.status === "success" ? 
                <div className="flex flex-wrap">
                  {
                    res?.data.map((item, id)=>{
              
                      return(
                        <MemberCard key={id} item={item}/>   
                      )
                    
                    })
                  }
                </div>
              :
              <MemberSkeleton/>
              
              }
            </Suspense>           
        {/* </div> */}

      </div>
    </section>
  );
};

export default Team;

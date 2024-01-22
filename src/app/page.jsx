import Cards from "@/components/Cards";
import Category from "@/components/Category";
// import Developer from "@/components/Developer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PreviousClient from "@/components/PreviousClient";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <Category/>
      {/* <Developer/> */}
      <PreviousClient/>
      <Cards/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

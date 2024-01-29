import Cards from "@/components/Cards";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PreviousClient from "@/components/PreviousClient";
import Testimonial from "@/components/Testimonial";
import AboutInfo from "@/components/aboutComponent/AboutInfo";
import Counter from "@/components/aboutComponent/Counter";

export default function Home() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <Category/>
      <AboutInfo/>
      <Counter/>
      <PreviousClient/>
      <Cards/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

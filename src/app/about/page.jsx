import Action from "@/components/Action";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
// import AboutInfo from "@/components/aboutComponent/AboutInfo";
// import Counter from "@/components/aboutComponent/Counter";
import Team from "@/components/aboutComponent/Team";

export const dynamic = 'force-dynamic'

const page = () => {
    return (
        <div>
            <NavBar/>
            {/* <AboutInfo/> */}
            {/* <Counter/> */}
            <Team/>
            <Action/>
            <Footer/>
        </div>
        
    );
};

export default page;
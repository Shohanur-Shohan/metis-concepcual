import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

const page = () => {
    return (
        <div>
            <NavBar/>
           <Contact/>
           <Newsletter/>
           <Footer/>
        </div>
    );
};

export default page;
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Blog from "@/components/blogComponent/Blog";

const page = () => {
    return (
        <div>
            <NavBar/>
            <Blog/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default page;
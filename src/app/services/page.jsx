
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Price from "@/components/serviceComponent/Price";
import Service from "@/components/serviceComponent/Service";


export const dynamic = 'force-dynamic'

const page = () => {
    return (
        <div>
            <NavBar/>
            <Service/>
            <Price/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default page;
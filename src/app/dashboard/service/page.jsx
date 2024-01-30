import AddService from "@/components/admin/AddService";
import DashboardServices from "@/components/admin/DashboardServices";

export const dynamic = 'force-dynamic'

const page = () => {
    return (
        <div>
           <AddService/>
           <DashboardServices/>
        </div>
    );
};

export default page;
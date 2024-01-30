import AddBlog from "@/components/admin/AddBlog";
import DashboardAllBlogs from "@/components/admin/DashboardAllBlogs";

export const dynamic = 'force-dynamic'

const page = () => {
    return (
        <div>
            <AddBlog/>
            <DashboardAllBlogs/>
        </div>
    );
};

export default page;
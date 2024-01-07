import AddBlog from "@/components/admin/AddBlog";
import DashboardBlogs from "@/components/admin/DashboardBlogs";

const page = () => {
    return (
        <div>
            <AddBlog/>
            <DashboardBlogs/>
        </div>
    );
};

export default page;
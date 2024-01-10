
import DashboardPosts from "@/components/admin/DashboardHomePage/DashboardPosts";
import Overview from "@/components/admin/DashboardHomePage/Overview";
import TodaysPercentage from "@/components/admin/DashboardHomePage/TodaysPercentage";
// import UsersListsDashboard from "@/components/admin/UsersListsDashboard";

const page = () => {


    return (
        <div>
            <TodaysPercentage/>
            <div className="flex flex-wrap my-6">
                <DashboardPosts/>
                <Overview/>
            </div>
        </div>
    );
};

export default page;
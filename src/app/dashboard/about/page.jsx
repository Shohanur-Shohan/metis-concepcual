import AddMember from "@/components/admin/AddMember";
import DashboardTeamMembers from "@/components/admin/DashboardTeamMembers";

const page = () => {
    return (
        <div>
            <AddMember/>
            <DashboardTeamMembers/>
        </div>
    );
};

export default page;
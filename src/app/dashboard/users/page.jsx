import UsersListsDashboard from "@/components/admin/UsersListsDashboard";
import { getUserData } from "@/utility/api/AllApi";


export const dynamic = 'force-dynamic'

const page = async () => {

    const data = await getUserData();
    // console.log("get user data", data);

    return (
        <div>
            <UsersListsDashboard data={data}/>
        </div>
    );
};

export default page;
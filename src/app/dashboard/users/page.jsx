
import UsersListsDashboard from "@/components/admin/UsersListsDashboard";
import { PrismaClient } from "@prisma/client";


async function getData(){
    const prisma = new PrismaClient();
    const result = await prisma.user.findMany({
        orderBy: {id : 'asc'},
    });
    return result;
}

const page = async () => {

    const data = await getData();
    // console.log(data);

    return (
        <div>
            <UsersListsDashboard data={data}/>
        </div>
    );
};

export default page;
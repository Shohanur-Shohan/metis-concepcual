import AddMember from "@/components/admin/AddMember";
import DashboardTeamMembers from "@/components/admin/DashboardTeamMembers";
import { PrismaClient } from "@prisma/client";


const getData = async ()=>{
    const prisma = new PrismaClient();
    let res = await prisma.member.findMany();
    return res;
}


const page = async () => {
      const data = await  getData();
    //   console.log(data);

    return (
        <div>
            <AddMember/>
            <DashboardTeamMembers data={data} />
        </div>
    );
};

export default page;
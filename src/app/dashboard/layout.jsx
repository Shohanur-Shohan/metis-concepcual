import DashboardAdmin from "@/components/admin/DashboardAdmin";

export default function Layout({ children }) {

    return (
        <section>
            <DashboardAdmin data={children}/>
        </section>
    )
  }
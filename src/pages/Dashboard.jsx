import SideBar from "../components/Sidebar";
import Header from "../components/Header"

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
      </div>
    </>
  );
};

export default Dashboard;

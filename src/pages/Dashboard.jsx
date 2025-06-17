import SideBar from "../components/Sidebar";
import Header from "../components/Header"
import Banner from "../components/Banner";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="relative w-full">
           <Banner/> 
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/CardProduct";
import products from "../assets/dataProduct";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="relative w-full bg-stone-100">
          <Banner />

          <div className="container-card p-1.5 grid justify-center items-center flex-wrap gap-3">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                cat={product.cat}
                realPrice={product.realPrice}
                price={product.price}
                src={product.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

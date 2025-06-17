import { useState } from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/CardProduct";
import products from "../assets/dataProduct";
import Popup from "../components/Popup";

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="relative w-full bg-stone-100">
          <Banner />

          <div className="container-card p-1.5 grid justify-center items-center flex-wrap gap-3">
            {products.map((product) => (
              <div onClick={() => handleCardClick(product)}>
                <Card
                  key={product.id}
                  title={product.title}
                  cat={product.cat}
                  realPrice={product.realPrice}
                  price={product.price}
                  src={product.img}
                />
              </div>

            ))}
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Popup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Dashboard;

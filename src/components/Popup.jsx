import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function Popup({ product, onClose }) {
  const context = useContext(AppContext);
  if (!product) return null; // Jangan tampilkan jika tidak ada produk

  const handleBuyNow = () => {
    alert('Berhasl menambahkan ke keranjang!');
    context.productsSelected.push(product);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img src={product.img} alt={product.title} className="w-full h-72 object-cover mb-4 rounded" />
        <p className="text-gray-700 mb-2">Kategori: {product.cat}</p>
        <p className="text-gray-700 mb-1">Harga Asli: Rp{product.realPrice.toLocaleString('id-ID')}</p>
        <p className="text-red-600 text-center text-xl">Harga Diskon: Rp{product.price.toLocaleString('id-ID')}</p>

        <div className="p-2">
          <button
            onClick={handleBuyNow}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 font-semibold text-lg transition duration-300"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
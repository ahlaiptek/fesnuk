export default function Header() {
  return (
    <header className="bg-white p-4 border-b border-gray-200">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-red-500">
          Fesnuk
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow mx-4 max-w-lg hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          {/* Ikon pencarian dihilangkan saat tampilan mobile */}
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            Cart
          </button>
          <button className="relative text-gray-600 hover:text-gray-900 font-medium">
            Notifications
            <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ganti dengan URL gambar profil yang sesuai
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-red-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
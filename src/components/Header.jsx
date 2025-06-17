import IconNav from "../elements/IconNav";

export default function Header() {
  return (
    <header className="bg-white p-4 border-b border-gray-200 shadow">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-red-500">
          Fesnuk
        </div>

        <div className="relative flex-grow mx-4 max-w-lg hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-4">
          <IconNav iconName="cart-shopping" link=""/>
          <IconNav iconName="bell" link=""/>
          
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-red-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
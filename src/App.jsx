
import AppContext from "./context/AppContext";
import "./index.css";
import Dashboard from "./pages/Dashboard";

function App() {
  const context = {
    productsSelected: []
  }

  return (
    <>
      <AppContext.Provider value={context}>
        <Dashboard />
      </AppContext.Provider>
    </>
  );
}

export default App;

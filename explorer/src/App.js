import { Outlet } from "react-router";
import Nav from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Outlet />
      Footer
    </div>
  );
}

export default App;

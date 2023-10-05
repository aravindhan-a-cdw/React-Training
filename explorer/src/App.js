import { Outlet } from "react-router";

function App() {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
}

export default App;

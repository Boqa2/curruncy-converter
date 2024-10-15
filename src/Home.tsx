import { Outlet } from "react-router-dom";
import Header from "./components/Ux/Header";

const HomePage = () => {
  return (
   <div>
    <Header />
    <main>
      <Outlet />
    </main>
   </div>
  );
};

export default HomePage;

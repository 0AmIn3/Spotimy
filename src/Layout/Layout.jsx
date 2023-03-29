import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
   return ( 
      <div className="w-full h-screen flex">
      <div className="w-[18%] h-[80%]">
        <Aside />
      </div>
      <div className="w-[82%] h-full">
        <Header />
        <Outlet></Outlet>
      </div>
    </div>
    );
}
 
export default Layout;
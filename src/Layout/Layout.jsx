import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Layout = () => {
   return ( 
      <div className="flex relative">
         <Aside/>
         <div className="w-[77.2%] relative ml-[20.2%] ">
         <Header/>
         <main className="my-[110px] h-[2000px]">
         </main>
         </div>
      </div>
    );
}
 
export default Layout;
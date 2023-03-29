import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
   return ( 
      <div className="flex relative">
         <Aside/>
         <div className="w-[77.2%] relative ml-[20.2%] ">
         <Header/>
         <main className="my-[110px] min-h-[100vh]">
            <Outlet/>
         </main>
         <Footer/>
         </div>
      </div>
    );
}
 
export default Layout;
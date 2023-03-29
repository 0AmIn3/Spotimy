import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const spotify = createContext({})

const Layout = () => {

   return ( 
      <spotify.Provider value={{bg: "red"}} >
         <div className="flex relative">
            <Aside/>
            <div className="w-[77.2%] relative ml-[20.2%] ">
            <Header/>
            <main className="mt-[110px] mb-[150px] min-h-[100vh]">
               <Outlet/>
            </main>
            <Footer/>
            </div>
         </div>
      </spotify.Provider>
    );
}
 
export default Layout;
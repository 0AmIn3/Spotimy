import Items from "../components/Items";
import Musicblock from "../components/Musicblock";

const Home = () => {
   return ( 
      <>
      <p className="font-bold text-[39px] text-[#fff] font-Manrope">Good afternoon</p>
      <div className="grid grid-cols-3 gap-x-[29px] gap-y-[16px] mt-[29px]">
         <Items/>
         <Items/>
         <Items/>
         <Items/>
         <Items/>
         <Items/>
      </div>
      <p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">Your top mixes</p>
      <div className="secondgrid">
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>   
            <Musicblock/>   
      </div>
      <p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">Made for you</p>
      <div className="secondgrid">
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>   
            <Musicblock/>   
      </div>
      </>
    );
}
 
export default Home;
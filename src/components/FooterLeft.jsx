const FooterLeft = () => {
   return ( 
      <div className="flex items-center gap-[22px]">
               <div className="h-[72px] w-[72px] bg-cover cursor-pointer" style={{backgroundImage:  "url('../../public/img.png')"}}></div>
               <div className="flex flex-col gap-[2px]">
                  <p className="text-[18px] font-Manrope text-[#fff]">Play It Safe</p>
                  <p className="font-Manrope text-[#B3B3B3]">Julia Wolf</p>
               </div>
            </div>
    );
}
 
export default FooterLeft;
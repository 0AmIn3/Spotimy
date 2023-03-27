import { NavLink } from "react-router-dom";

const Aside = () => {
   return ( 
      <div className="w-[17.9%] h-[100vh] flex flex-col gap-[22px] px-[30px] pt-[70px] bg-[#000000]">
         <div className="flex flex-col gap-[24px] mb-[49px]">
         <NavLink to={'/'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center homeLogo"></div>
         <p className="font-Manrope font-bold text-[18px] text-[#B3B3B3]">Home</p>
         </NavLink>
         <NavLink to={'/search'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center searchLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3]">Search</p>
         </NavLink>
         <NavLink to={'/library'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center libraryLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3]">Your Library</p>
         </NavLink>
         </div>
         <div className="flex flex-col gap-[24px] mb-[20px]">
         <NavLink to={'/create'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center plusLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3]">Create Playlist</p>
         </NavLink>
         <NavLink to={'/liked'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center likedLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3]">Liked Songs</p>
         </NavLink>
         </div>
         <div className="line"></div>
         <div className="flex flex-col gap-[18px]">
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Chill Mix</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Insta Hits</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Your Top Songs 2021</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Mellow Songs</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Anime Lofi & Chillhop Music</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>BG Afro “Select” Vibes</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer'>Happy Hits!</p>
         </div>
      </div>
    );
}
 
export default Aside;
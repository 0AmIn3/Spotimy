import { NavLink } from "react-router-dom";

const Aside = () => {
   return ( 
      <aside className="w-[17.9%] h-[100vh] flex flex-col gap-[22px] px-[30px] pt-[70px] bg-[#000000] fixed left-0 bottom-0">
         <section className="flex flex-col gap-[24px] mb-[49px]">
         <NavLink to={'/'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center homeLogo"></div>
         <p className="font-Manrope font-bold text-[18px] text-[#B3B3B3] duration-500 hover:text-[#fff]">Home</p>
         </NavLink>
         <NavLink to={'/search'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center searchLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3] duration-500 hover:text-[#fff]">Search</p>
         </NavLink>
         <NavLink to={'/library'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center libraryLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3] duration-500 hover:text-[#fff]">Your Library</p>
         </NavLink>
         </section>
         <section className="flex flex-col gap-[24px]">
         <NavLink to={'/create'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center plusLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3] duration-500 hover:text-[#fff]">Create Playlist</p>
         </NavLink>
         <NavLink to={'/liked'} className='flex items-center gap-[23px] cursor-pointer'>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat bg-center likedLogo"></div>
         <p className="font-bold font-Manrope text-[18px] text-[#B3B3B3] duration-500 hover:text-[#fff]">Liked Songs</p>
         </NavLink>
         </section>
         <div className="line my-[18px]"></div>
         <section className="flex flex-col gap-[18px]">
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Chill Mix</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Insta Hits</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Your Top Songs 2021</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Mellow Songs</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Anime Lofi & Chillhop Music</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>BG Afro “Select” Vibes</p>
         <p className='font-[500] font-Manrope text-[18px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]'>Happy Hits!</p>
         </section>
      </aside>
    );
}
 
export default Aside;
import { NavLink } from "react-router-dom";
import SpotifyLogo from "../../public/images/Spotify_Logo_CMYK_White.png"

const Aside = () => {

  // const {playlist} = useContext(myPlaylistCTX)
  // const navigate = useNavigate()
   
  return (
    <aside className="w-[11.9%] h-full  flex flex-col gap-[16px] px-[25px] pt-[25px] bg-[#000000] fixed left-0 bottom-0">
     
      <section className="flex flex-col gap-[18px] mb-[26px]">
         <NavLink  to={"/"}>
            <img className="h-[39px] mb-[15px]" src={SpotifyLogo} alt="" />
        </NavLink>        
        <NavLink 
          to={"/"}
          className="flex items-center gap-[18px] cursor-pointer"
        >
          <div className="w-[22px] h-[22px] bg-contain bg-no-repeat bg-center homeLogo"></div>
          <p className="font-Manrope font-bold text-[14px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
            Home
          </p>
        </NavLink>
        <NavLink
          to={"/search"}
          className="flex items-center gap-[18px] cursor-pointer"
        >
          <div className="w-[22px] h-[22px] bg-contain bg-no-repeat bg-center searchLogo"></div>
          <p className="font-bold font-Manrope text-[14px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
            Search
          </p>
        </NavLink>
        <NavLink
          to={"/library"}
          className="flex items-center gap-[18px] cursor-pointer"
        >
          <div className="w-[22px] h-[22px] bg-contain bg-no-repeat bg-center libraryLogo"></div>
          <p className="font-bold font-Manrope text-[14px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
            Your Library
          </p>
        </NavLink>
      </section>
      <section className="flex flex-col gap-[18px]">
        <NavLink
          to={"/create"}
          className="flex items-center gap-[18px] cursor-pointer"
        >
          <div className="w-[22px] h-[22px] bg-contain bg-no-repeat bg-center plusLogo"></div>
          <p className="font-bold font-Manrope text-[14px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
            Create Playlist
          </p>
        </NavLink>
        <NavLink
          to={"/liked"}
          className="flex items-center gap-[18px] cursor-pointer"
        >
          <div className="w-[22px] h-[22px] bg-contain bg-no-repeat bg-center likedLogo"></div>
          <p className="font-bold font-Manrope text-[14px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
            Liked Songs
          </p>
        </NavLink>
      </section>
      <div className="line"></div>
      <section className="flex flex-col gap-[9px]">
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Chill Mix
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Insta Hits
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Your Top Songs 2021
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Mellow Songs
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Anime Lofi & Chillhop Music
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          BG Afro “Select” Vibes
        </p>
        <p className="font-[600] font-Manrope text-[14px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff]">
          Happy Hits!
        </p>
      </section>
    </aside>
  );
};

export default Aside;

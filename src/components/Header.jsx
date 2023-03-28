

const Header = () => {
   return ( 
      <header className="w-[77.2%] h-[80px] fixed flex items-center justify-between">
         <div className="flex items-center gap-[22px]">
            <img src="../../public/back.png" alt="" className="w-[40px] h-[40px] cursor-pointer duration-[500ms] hover:invert-[8%]"/>
            <img src="../../public/next.png" alt="" className="w-[40px] h-[40px] cursor-pointer duration-[500ms] hover:invert-[8%]"/>
         </div>
         <div className="">
         <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex bg-[#000000] py-[3px] pr-[12px] pl-[3px] items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 " type="button">
                <span className="sr-only">Open user menu</span>
                <img src="../../public/dava.png" alt="" className="mr-2 w-[34px] h-[34px] rounded-full avatar_layout"/>
                <span className="text-[#fff] font-Manrope text-[18px] font-bold">davadirect3</span>
                <img src="../../public/open.png" alt="" className="w-[16px] h-[16px] ml-[11px]"/>
                </button>
                <div id="dropdownAvatarName" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">Pro User</div>
                    <div className="truncate">name@flowbite.com</div>
                </div>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                     <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="../settings/index.html" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                </ul>
                <div class="py-1">
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
                </div>
         </div>
      </header>
    );
}
 
export default Header;
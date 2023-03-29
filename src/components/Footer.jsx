
import FooterCenter from "./FooterCenter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
   return ( 
      <footer className="w-full fixed bottom-0 left-0 bg-[#181818] h-[112px] flex items-center justify-between px-[18px]">
            <FooterLeft/>
            <FooterCenter/>
            <FooterRight/>
      </footer>
    );
}
 
export default Footer;
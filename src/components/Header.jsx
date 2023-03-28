import { Badge } from "flowbite-react";

const Header = () => {
   return ( 
      <header className="w-[77.2%] h-[80px] bg-[#c4c4c4] fixed flex items-center justify-between">
         <div className="flex flex-wrap gap-2">
  <Badge color="info">
    Default
  </Badge>
  <Badge color="gray">
    Dark
  </Badge>
  <Badge color="failure">
    Failure
  </Badge>
  <Badge color="success">
    Success
  </Badge>
  <Badge color="warning">
    Warning
  </Badge>
  <Badge color="indigo">
    Indigo
  </Badge>
  <Badge color="purple">
    Purple
  </Badge>
  <Badge color="pink">
    Pink
  </Badge>
</div>
      </header>
    );
}
 
export default Header;
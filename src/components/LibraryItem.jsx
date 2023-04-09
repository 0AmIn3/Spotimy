
import { BsPlayCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LibraryItems = ({ name, img, id, owner }) => {
    
    const { state } = useLocation();
    return (
        <Link to={`/playlist/${id}`} state={{ img }}>
            <div className="w-[224px] select-none forTr h-[324px] forHv ease-in hover:bg-[#2a2a2a] cursor-pointer pl-[20px] pr-[12px] pt-[20px] bg-[#1B1B1B] rounded-[8px] ">
                <div className="w-[95%] h-[95%]">
                    <div className="w-full h-[60%] ">
                        <img
                            className="w-[182px]  bg-contain rounded-[5px] "
                            src={img}
                        />
                        <div className=" float-right relative forHv2 hidden pt-[-40px] z-10 justify-end items-end">
                            <BsPlayCircleFill
                                size={"50px"}
                                color="#1ed760"
                                className="reactIcon"
                            />
                        </div>
                    </div>

                    <div className="w-full pt-[30px] h-[30%]">
                        <p className="font-bold text-[#FFF] text-[20px]">
                            {name}
                        </p>
                        <p className="font-[450] text-[14px] text-[#B3B3B3] pt-[8px] ">
                            {owner.display_name}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default LibraryItems;
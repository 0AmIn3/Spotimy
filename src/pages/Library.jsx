import React, { useEffect, useState } from "react";
import Categories from "../childs/Categories";
import { BsPlayCircleFill } from "react-icons/bs";
import { useHttp } from "../hook/http.hook";
import LibraryItems from "../components/LibraryItem";

const Library = () => {
  const { loading, error, request } = useHttp()
  const [MyPlaylists, setMyPlaylists] = useState([]);

  let body = document.body;
  body.style.backgroundImage = "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
  body.style.backgroundRepeat = "no-repeat";

  body.style.backgroundImage =
    "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
  body.style.backgroundRepeat = "no-repeat";


  useEffect(() => {
    request('https://api.spotify.com/v1/me/playlists')
      .then((res) => {
        setMyPlaylists(res.items)
      });
  }, []);

  console.log(MyPlaylists);

  return (
    <div className="w-full ">
      <div className="p-[25px]">
        <h1 className="text-[#FFF] font-[700] text-[30px]">Playlists</h1>

        <div className="w-[100%] pt-[10px]">

          <div className="h-[47vh] flex flex-wrap gap-[20px]">
            <div className="w-[500px] select-none forTr forHv hover:bg-[#2a2a2a] cursor-pointer h-[324px] bg-gradient-to-r from-[#3822EA] to-[#A3A6E5] rounded-[8px] ">
              <center>
                <div className="pt-[70px] pl-[30px]">
                  <p className="text-[#FFF] text-left text-[22px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae asperiores quia impedit, reiciendis molestiae
                    blanditiis aliquid
                  </p>
                </div>
              </center>

              <div className="pl-[25px] pt-[50px] ">
                <p className="font-[700] text-[#FFF] text-[40px] ">
                  Liked Songs
                </p>
                <div>
                  <p className="text-[#FFF] text-[22px] font-[22px] ">
                    607 liked songs
                  </p>
                </div>
              </div>
              <div className="float-right hidden  pt-[-100px]  relative  pr-[8px] forHv2  z-10 justify-end items-end">
                <BsPlayCircleFill
                  size={"50px"}
                  color="#1ed760"
                  className="reactIcon"
                />
              </div>
            </div>


            {
              MyPlaylists.map((item, inx) => <LibraryItems
                key={inx}
                name={item.name}
                img={item?.images[0]?.url}
                id={item.id} 
                owner={item.owner}
                />)
            }




          </div>



        </div>
      </div>

    </div>
  );
};

export default Library;
import React, { useEffect } from "react";
import Categories from "../childs/Categories";
import { BsPlayCircleFill } from "react-icons/bs";

const Library = () => {

    let body = document.body;
    body.style.backgroundImage = "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
    body.style.backgroundRepeat = "no-repeat";

  body.style.backgroundImage =
    "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
  body.style.backgroundRepeat = "no-repeat";

  const flex = [
    {
      name: "Afro “Select” Vi...",
      desc: "A compilation of hit African songs I cons...",
      img: "/src/assets/afro.svg",
    },
    {
      name: "Instrumental St...",
      desc: "A soft musical backdrop for your st...",
      img: "/src/assets/study.svg",
    },
    {
      name: "Pop Mix",
      desc: "Hey Violet, VÉRITÉ, Timeflies and more",
      img: "/src/assets/pop-mix.svg",
    },
    {
      name: "Chill Mix",
      desc: "Julia Wolf, Khalid, ayokay and more",
      img: "/src/assets/chill-mix.svg",
    },
    {
      name: "Afro “Select” Vi...",
      desc: "A compilation of hit African songs I cons...",
      img: "/src/assets/afro.svg",
    },
  ];

  return (
    <div className="w-full ">
      <div className="p-[25px]">
        <h1 className="text-[#FFF] font-[700] text-[30px]">Playlists</h1>

        <div className="w-[100%] pt-[10px]">

          <div className="h-[47vh] flex justify-between gap-[20px]">
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

            <div className="w-[224px] select-none forTr h-[324px] forHv ease-in hover:bg-[#2a2a2a] cursor-pointer pl-[20px] pr-[12px] pt-[20px] bg-[#1B1B1B] rounded-[8px] ">
              <div className="w-[95%] h-[95%]">
                <div className="w-full h-[60%] ">
                  <img
                    className="w-[182px]  bg-contain rounded-[5px] "
                    src="/src/assets/playlist-img.svg"
                    alt=""
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
                  <p className="font-bold text-[#FFF] text-[22px]">
                    Happy Hits!
                  </p>
                  <p className="font-[450] text-[18px] text-[#B3B3B3] pt-[8px] ">
                    Hits to boost your mood and fill you wi...
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[224px] select-none forTr h-[324px] forHv ease-in hover:bg-[#2a2a2a] cursor-pointer pl-[20px] pr-[12px] pt-[20px] bg-[#1B1B1B] rounded-[8px] ">
              <div className="w-[95%] h-[95%]">
                <div className="w-full h-[60%] ">
                  <img
                    className="w-[182px]  bg-contain rounded-[5px] "
                    src="/src/assets/anime.svg"
                    alt=""
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
                  <p className="font-bold text-[#FFF] text-[22px]">Anime Lofi</p>
                  <p className="font-[450] text-[18px] text-[#B3B3B3] pt-[8px] ">
                    Experience the best Anime moments aga...
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[224px] select-none forTr h-[324px] forHv ease-in hover:bg-[#2a2a2a] cursor-pointer pl-[25px] pr-[12px] pt-[20px] bg-[#1B1B1B] rounded-[8px]">
              <div className="w-[95%] h-[95%]">
                <div className="w-full h-[60%] ">
                  <img
                    className="w-[182px]  bg-contain rounded-[5px] "
                    src="/src/assets/my_playlist2.png"
                    alt=""
                  />
                  <div className="float-right hidden forHv2 relative pt-[-40px] z-10 justify-end items-end">
                    <BsPlayCircleFill
                      size={"50px"}
                      color="#1ed760"
                      className="reactIcon"
                    />
                  </div>
                </div>

                <div className="w-full pt-[30px] h-[30%]">
                  <p className="font-bold text-[#FFF] text-[22px]">Try..!</p>
                  <p className="font-[450] text-[18px] text-[#B3B3B3] pt-[8px]">
                    Hits to boost your mood and fill you wi...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[31px] w-full ">
            {flex.map((i) => (
              <Categories item={i} />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Library;
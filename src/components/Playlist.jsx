import { useEffect, useState } from "react";
import { useHttp } from "../hook/http.hook";
import { useLocation } from "react-router-dom";



const Playlist = ({ img, item, like, name }) => {




    const [user, setUser] = useState("");
    const { loading, error, request } = useHttp()
    const [MyPlaylists, setMyPlaylists] = useState([]);


    //GetUser
    useEffect(() => {
        request(`https://api.spotify.com/v1/me`)
            .then((res) => setUser(res));
    }, []);

    useEffect(() => {
        request('https://api.spotify.com/v1/me/playlists')
            .then((res) => {
                setMyPlaylists(res?.items[0]?.name)
            });
    }, []);

    return (
        <div className=" m-auto mb-[30px] flex">
            <img className={like ? 'likeImg' : "albumImg h-[230px]"} src={img} />

            <div className="ml-[30px]">


                <div className="flex flex-col justify-center text-[white]">
                    <p className=" text-[18px] font-bold">Playlist</p>
                    <h1 className="mb-[10px] text-[90px] font-bold ">{like ? `Liked Songs` : MyPlaylists}</h1>
                </div>

                <div className="flex items-center  text-base font-bold gap-2 text-[white]">
                    <p className="text-[14px] font-normal text-[rgba(255, 255, 255, 0.7)]">Made for <span className="text-[18px] font-bold">{user?.display_name}</span></p>
                    <div className="rounded-full mt-[1px] w-1 h-1 bg-white"></div>
                    <p className="">{item?.length === 1 ? `${item?.length} трек` : `${item?.length} треков`}</p>
                </div>

            </div>

        </div>
    );
}

export default Playlist;
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useHttp } from "../hook/http.hook";
import { musicInfoCTX } from "../contexts/musicInfoCTX";
import { musicCTX } from "../contexts/musicCTX";
import { musicTimeCTX } from "../contexts/musicTimeCTX";

const Items = ({ name, img, id }) => {
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [count, setCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const { loading, error, request } = useHttp();
  const { changeSrc, changeId, changePlayTrue } = useContext(musicCTX);
  const { changeInfo } = useContext(musicInfoCTX);
  const { setTime, time } = useContext(musicTimeCTX);

  // useEffect(() => {
  // 	request(`https://api.spotify.com/v1/playlists/${id}/tracks`).then(
  // 		(res) => {
  // 			setTracks(res?.items);
  //             // console.log(res?.items);
  //             console.log(tracks[0]);
  // 		}
  // 	);

  // }, []);
  return (
    <div className="grid-block relative hovercont  overflow-hidden ">
      <Link to={`/playlist/${id}`} className="grid-block" state={{ img }}>
        <div
          className="grid-img shadowbox"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <p className="grid-text">{name}</p>
      </Link>

      <img
        onClick={() => {
          console.log(id);
          request(`https://api.spotify.com/v1/playlists/${id}/tracks`).then(
            (res) => {
              // setTimeCount(0)
              // clearInterval(interval)
              let TrackItem = res.items[count].track;
              // console.log(TrackItem);
              changeSrc(TrackItem.preview_url), changeId(TrackItem.id);
              changePlayTrue();
              changeInfo(
                TrackItem?.album?.images[2].url,
                TrackItem?.album?.images[1].url,
                TrackItem?.name,
                TrackItem?.album?.artists[0].name
              );

              // const interval = setInterval(() => {
              //   setTimeCount(timeCount + 1);
              //   console.log(timeCount);
              //   if (timeCount == time) {
              //     console.log("This will run every second!");
              //     return () => clearInterval(interval);
              //   }
              // }, 1000);

            
            }
          );
        }}
        src="/img/play.svg"
        className="w-[62px] absolute playhover"
        alt=""
      />
    </div>
  );
};

export default Items;

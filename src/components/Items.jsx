import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useHttp } from "../hook/http.hook";
import { musicInfoCTX } from "../contexts/musicInfoCTX";
import { musicCTX } from "../contexts/musicCTX";
import { nextMusicCTX } from "../contexts/nextMusicCTX";
import { prevMusicCTX } from "../contexts/prevMusicCTX";
import { musicIndexCTX } from "../contexts/musicIndexCTX";

const Items = ({ name, img, id }) => {
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [count, setCount] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const { loading, error, request } = useHttp();
  let { play, changePlay, changeSrc, changePlayTrue, changeId, src } = useContext(musicCTX);
  const { changeInfo } = useContext(musicInfoCTX);
  const [length, setLenght] = useState(0);
  const { setNextMusic, nextMusic } = useContext(nextMusicCTX);
  const { setPrevMusic, prevMusic } = useContext(prevMusicCTX);
  const { index ,setIndex} = useContext(musicIndexCTX);
  const [player, setPlayer] = useState(false);
  const [idPlay, setidPlay] = useState("");

  useEffect(() => {

    if (player && idPlay !== "") {
      request(`https://api.spotify.com/v1/playlists/${idPlay}/tracks`).then(
        (res) => {
          changeSrc(res.items[count]?.track?.preview_url);
          changeId(res.items[count]?.track?.id);
          changeInfo(
            res.items[count]?.track?.album?.images[2].url,
            res.items[count]?.track?.album?.images[1].url,
            res.items[count]?.track?.name,
            res.items[count]?.track?.artists[0].name
          );
          setLenght(res.items.length - 1);
        }
      );
    }

  }, [ player , count, idPlay]);

  function changePlayer() {
   
    setPlayer(!player);
     changePlay()
  }

  useEffect(() => {
    if (play) {
      setPlayer(true);
    } else {
      setPlayer(false);
    }
  }, [play]);

  useEffect(() => {
    setCount(index);
  }, [index]);
  useEffect(() => {
    if (count < length) {
      setCount(count + 1);
    }
  }, [nextMusic]);
  useEffect(() => {
    if (count !== 0) {
      setCount(count - 1);
    }
  }, [prevMusic]);

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
          setCount(0)
          setidPlay(id)
          changePlayer() 
        }}
        src="/img/play.svg"
        className="w-[62px] absolute playhover"
        alt=""
      />
    </div>
  );
};

export default Items;

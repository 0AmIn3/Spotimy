import React, { useContext, useEffect, useState } from 'react';
import { searchCTX } from '../contexts/searchCTX';
import Songs from './Songs';
import axios from 'axios';
import { tokenCTX } from '../contexts/tokenCTX';
import { useHttp } from '../hook/http.hook';

const SearchTracks = () => {
  const { search, setSearchResults } = useContext(searchCTX);
  const [searchTracks, setSearchTracks] = useState([]);
  const { loading, error, request } = useHttp()

  useEffect(() => {
    if (search.length > 0) {
      request(`https://api.spotify.com/v1/search?query=${search}&type=track&include_external=audio&market=UZ&locale=ru-RU%2Cru%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=5&limit=50`)
        .then((res) => setSearchTracks(res.tracks.items))
    }
  }, [search]);
  return (
    <div className=" mt-10 flex flex-col gap-7">
      <h1 className=" text-3xl font-medium text-white">
        Let's add something to your playlist
      </h1>
      <div className="inpSearch w-[468px] h-[40px] items-center gap-[14px] px-[16px] bg-[#2B2B2BFF] cursor-pointer rounded-[8px] overflow-hidden">
        <img
          src="../../public/Search.png"
          alt=""
          className="w-[32px] h-[32px] cursor-pointer  invert-[50%]"
        />
        <input
          type="text"
          name="search"
          placeholder="Search for tracks and releases"
          className="inp2 "
          onKeyUp={(e) => setSearchResults(e.target.value)}
        />
      </div>

      <div className=" h-fit min-h-[600px] w-full ">
        {search.length > 0
          ? searchTracks.map((item, idx) => (
            <Songs item={item} key={item.id} idx={idx} ChangeAdd={true} />
          ))
          : ""}
      </div>
    </div>
  );
};

export default SearchTracks;
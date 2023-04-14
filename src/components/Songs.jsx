import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// import { useState } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Audio } from "react-loader-spinner";
import "./../style.scss";
import { musicCTX } from "../contexts/musicCTX";
import { musicInfoCTX } from "../contexts/musicInfoCTX";
import { tokenCTX } from "../contexts/tokenCTX";
import { useParams } from "react-router-dom";
import axios from "axios";
import { reloadPlaylistsCTX } from "../contexts/reloadPlaylistsCTX";
import { useHttp } from "../hook/http.hook";

import { musicIndexCTX } from "../contexts/musicIndexCTX";

const Songs = ({ item, idx, ChangeAdd }) => {
	const { changeSrc, changeId, changePlayTrue, id } = useContext(musicCTX);
	const { changeInfo } = useContext(musicInfoCTX);
	const {setIndex} = useContext(musicIndexCTX)
	const [isLike, setIsLike] = useState(false);
	const [Likesongs, setLikesongs] = useState([]);
	const paramsID = useParams();
	const token = useContext(tokenCTX);
	const { Setreload } = useContext(reloadPlaylistsCTX);
	const { request } = useHttp();
	
	function AddTrank(trackuri) {
		request(
			`https://api.spotify.com/v1/playlists/${paramsID.id}/tracks`,
			"POST",
			{ uris: [trackuri] }
		).then(() => Setreload());
	}
	function DelTrank(trackuri) {
		axios
			.delete(
				`https://api.spotify.com/v1/playlists/${id}/tracks`,
				{ tracks: [{ uri: "spotify:track:6zDs6zI94L761vd0cVScTT" }] },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => console.log(res));
	}

	if (isLike) {
		localStorage.setItem("likesongs", JSON.stringify(item));
	}

	return (
		<TableRow
			style={{ width: "100%", userSelect: "none" }}
			className="body-row"
		>
			<TableCell component="th" scope="row">
				<div className="count">
					{item.id === id ? (
						<Audio height="28" width="28" />
					) : (
						idx + 1
					)}
				</div>
			</TableCell>
			<TableCell
				align="left"
				onClick={() => {
					setIndex(idx)
					changeSrc(item.preview_url), changeId(item.id);
					changePlayTrue();
					changeInfo(
						item?.album?.images[2].url,
						item?.album?.images[1].url,
						item?.name,
						item?.album?.artists[0].name
					);
				}}
			>
				<div className="flex">
					<img
						className="pr-4 h-[40px]"
						src={item?.album?.images[2]?.url}
						alt=""
					/>
					<div>
						<h6 className="text-[14px] text-[#ffffff]">
							{item.name}
						</h6>
						<p className="text-[13px]">{item?.artists[0]?.name}</p>
					</div>
				</div>
			</TableCell>
			<TableCell className="text-[14px]" align="left">
				{item.name}
			</TableCell>
			<TableCell onClick={() => setIsLike(!isLike)} align="left">
				{isLike ? <AiFillHeart color="#63CF6C" /> : <AiOutlineHeart />}
			</TableCell>
			<TableCell align="left">2 : 12</TableCell>
			{ChangeAdd ? (
				<TableCell
					align="left"
					onClick={() => {
						AddTrank(item.uri);
					}}
				>
					ADD
				</TableCell>
			) : null}
		</TableRow>
	);
};

export default Songs;

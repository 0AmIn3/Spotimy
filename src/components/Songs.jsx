import { useContext, useEffect, useState } from "react";

// import { useState } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Audio } from "react-loader-spinner";
import "./../style.scss";
import { musicCTX } from "../contexts/musicCTX";
import { musicInfoCTX } from "../contexts/musicInfoCTX";

const Songs = ({ item, idx }) => {
	const [isTurn, setIsTurn] = useState(false);
	const { changeSrc, changeId, changePlayTrue } = useContext(musicCTX);
	const { changeInfo } = useContext(musicInfoCTX)

	return (
		<TableRow style={{width: '100%'}}
			onClick={() => {
				changeSrc(item.preview_url), changeId(item.id);
				changePlayTrue();
				changeInfo(item?.album?.images[2].url, item?.album?.images[1].url,item?.name,item?.album?.artists[0].name)

			}}
			className="body-row"
		>
			<TableCell component="th" scope="row">
				<p className="count">{idx + 1}</p>
			</TableCell>
			<TableCell align="left">
				<div className="flex">
					<img
						className="pr-4"
						src={item?.album?.images[2]?.url}
						alt=""
					/>
					<div>
						<h6>{item.name}</h6>
						<p>{item?.artists[0]?.name}</p>
					</div>
				</div>
			</TableCell>
			<TableCell align="left">{item.name}</TableCell>
			<TableCell align="left"></TableCell>
			<TableCell align="left">2 : 12</TableCell>
		</TableRow>
	);
};

export default Songs;

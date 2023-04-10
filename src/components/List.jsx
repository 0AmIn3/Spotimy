import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Songs from "./Songs";
import "./../style.scss";


export default function List({arr}) {
	return (
		<div className="mt-[20px]">
			<TableContainer className="table-bg px-1" component={Paper}>
				<Table className="">
					<TableHead className="px-2 ">
						<TableRow className="head-row">
							<TableCell align="center" className="text-[22px]">#</TableCell>
							<TableCell align="left">Title</TableCell>
							<TableCell align="left">Album</TableCell>
							<TableCell align="left">Date added</TableCell>
							<TableCell align="right">
								<img
									className=""
									src="/images/clock.svg"
									alt=""
								/>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="px-2">
						{arr.map((item, idx) => (
							<Songs item={item.track} key={idx} idx={idx}  />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

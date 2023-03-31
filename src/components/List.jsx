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


export default function List() {
	const [data, setData] = useState([]);

	return (
		<div className="mt-[30px]">
			<TableContainer className="table-bg px-8 " component={Paper}>
				<Table className="">
					<TableHead className="px-2 ">
						<TableRow className="head-row">
							<TableCell className="text-[22px]">#</TableCell>
							<TableCell align="left">TITLE</TableCell>
							<TableCell align="left">ALBUM</TableCell>
							<TableCell align="left">DATE ADDED</TableCell>
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
						{/* {data.map((item) => (
							<Songs item={item} key={item.id} arr={data} />
						))} */}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

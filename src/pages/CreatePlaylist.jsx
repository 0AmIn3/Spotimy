import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { tokenCTX } from "../contexts/tokenCTX";
import { searchCTX } from "../contexts/searchCTX";
import Songs from "../components/Songs";
import { FaExchangeAlt } from "react-icons/fa";
// import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import SearchTracks from "../components/SearchTracks";
import { useHttp } from "../hook/http.hook";
import { useLocation, useNavigate } from "react-router-dom";
const CreatePlaylist = () => {
	useEffect(() => {
		let body = document.body;
		body.style.background = "#121212FF";
	});
	const token = useContext(tokenCTX);
	const [NewPlaylists, setNewPlaylists] = useState([]);
	const [user, setUser] = useState("");
	const [file, setFile] = useState("");
	//   const [FixImg, setFixImg] = useState(0);
	const [modal, setModal] = useState(false);
	const { loading, error, request } = useHttp();
	const navigate = useNavigate();
	//   function ChangeImg() {
	//     if (FixImg) {
	//       let changeIm = document.querySelector(".changeImg");
	//       changeIm.style.opacity = 1;
	//     } else {
	//       let changeIm = document.querySelector(".changeImg");
	//       changeIm.style.opacity = 0;
	//     }
	//   }
	function ChangeModal() {
		if (modal === true) {
			let modals = document.querySelectorAll("#modal");
			let body = document.body;

			body.style.overflow = "unset";
			modals.forEach((item) => {
				item.style.display = "none";
			});
			//   setFixImg(0)
			//   setFile('');
			setModal(false);
		} else {
			let modals = document.querySelectorAll("#modal");
			let body = document.body;

			modals.forEach((item) => {
				item.style.display = "block";
			});
			body.style.overflow = "hidden";
			//   setFixImg(1)
			setModal(true);
		}
	}

	//GetUser
	useEffect(() => {
		request(`https://api.spotify.com/v1/me`).then((res) => setUser(res));
	}, []);
	//GetUser

	//Search

	//Search

	let playForm = document.forms.playlistModal;

	function SubmitFunc(e) {
		e.preventDefault();

		let playlist = {
			public: true,
		};

		let fmr = new FormData(playForm);

		fmr.forEach((value, key) => {
			playlist[key] = value;
		});
		post(playlist);
	}

	function post(settings) {
		axios
			.post(
				`https://api.spotify.com/v1/users/${user.id}/playlists`,
				settings,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data.id);
				// AddImg(res.data.id);
				navigate(`/playlist/${res.data.id}`);
			});
		// request(`https://api.spotify.com/v1/users/${user.id}/playlists` , "POST" , settings).then((res) => {
		//   console.log(res.data.id);
		//   AddImg(res.data.id);
		// });
	}
	// spotify:track:6zDs6zI94L761vd0cVScTT
	function AddImg(id) {
		axios
			.post(
				`https://api.spotify.com/v1/playlists/${id}/tracks`,
				{
					uris: [
						"spotify:track:1301WleyT98MSxVHPZCA6M",
						"spotify:episode:512ojhOuo1ktJprKbVcKyQ",
					],
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => console.log(res));
	}

	return (
		<div className="text-white">
			<div className="w-full flex mb-14  gap-8 h-[300px] text-white ">
				<div
					className="w-[300px] selectPh bg-[#505050FF] relative"
					onClick={ChangeModal}
				>
					<img src="" className="w-full" alt="" />
					<div className=" selectPhitem absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 ">
						<div className=" flex flex-col items-center">
							<FaExchangeAlt size={70} />
							<p className=" text-3xl">Select photo</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-col justify-between">
					<p className=" text-base font-medium">PUBLIC PLAYLIST</p>
					<h1
						className=" text-7xl font-black cursor-pointer"
						onClick={ChangeModal}
					>
						MY PLAYLIST
					</h1>
					<div className="flex items-center  text-base font-bold gap-2">
						<div className="rounded-full overflow-hidden w-9 h-9">
							{user !== "" ? (
								<img
									className="w-full"
									src={user?.images[0]?.url}
									alt=""
								/>
							) : (
								<img
									className="w-full"
									src=""
									alt="Not Fount"
								/>
							)}
						</div>
						<p>{user?.display_name}</p>
						<div className="rounded-full w-2 h-2 bg-white"></div>
						<p className="">1 трек</p>
					</div>
				</div>
			</div>
			<div className="mt-10  border-t-2 bg-[#121212FF] border-[#323232]">
				<SearchTracks />
			</div>

			<div className="modal relative" id="modal">
				<AiOutlineClose
					className=" absolute top-3 right-6"
					onClick={ChangeModal}
					size={30}
				/>
				<form
					name="playlistModal"
					onSubmit={SubmitFunc}
					className="flex flex-col gap-4"
				>
					<h1 className=" text-3xl font-medium ">
						Сhanging information
					</h1>
					<div className="w-full flex  justify-between mt-5">
						<div className="w-[200px] h-[200px] selectPh bg-[#505050FF] relative">
							<img
								src={file.length > 0 ? file : ""}
								className="w-full h-full changeImg"
								alt=""
								//   style={{opacity: FixImg}}
							/>

							<div className=" selectPhitem absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 ">
								<input
									type="file"
									className="opacity-0 absolute top-0 left-0 w-full h-full"
									onChange={(e) => {
										let files = e.target.files;
										let reader = new FileReader();
										reader.onload = (r) => {
											setFile(r.target.result);
										};
										reader.readAsDataURL(files[0]);
										console.log(file);
										//   setFixImg(1)
									}}
								/>

								<div className=" flex flex-col items-center">
									<FaExchangeAlt size={50} />
									<p className=" text-2xl">Select photo</p>
								</div>
							</div>
						</div>
						<div className="w-[50%] flex flex-col gap-5">
							<input
								type="text"
								className="w-[100%] h-[40px] items-center gap-[14px] px-[16px] bg-[#2B2B2BFF] cursor-pointer rounded-[8px] overflow-hidden"
								placeholder="Add title"
								name="name"
								id=""
							/>
							<input
								type="text"
								className="w-[100%] h-[140px] items-center gap-[14px] px-[16px] bg-[#2B2B2BFF] cursor-pointer rounded-[8px] overflow-hidden"
								placeholder="Add description (optional)"
								name="description"
								id=""
							/>
						</div>
					</div>
					<button className="w-[100px] h-14 rounded-[18px] bg-white text-black self-end">
						SAVE
					</button>
				</form>
			</div>
			<div className="modal_bg" onClick={ChangeModal} id="modal"></div>
		</div>
	);
};

export default CreatePlaylist;

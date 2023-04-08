


const Playlist = ({img}) => {
    return (
        <div className=" m-auto mb-[30px]">

            <div className="flex ">

                <img className="albumImg h-[230px] " src={img} />

                <div className="flex flex-col justify-center text-[white] ml-[20px]">
                    <p className=" text-[14px] font-semibold">Playlist</p>
                    <h1 className="mb-[10px] text-[90px] font-bold ">Pop Mix</h1>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
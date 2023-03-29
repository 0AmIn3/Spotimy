const Playlist = () => {
    return (
        <div className="w-[95%] m-auto">

            <div className="flex bg-[red]">

                <img src="/images/popMix.png" />

                <div className="flex flex-col justify-center text-[white] ml-[30px]">
                    <p className=" text-[14px]">PUBLIC PLAYLIST</p>
                    <h1 className="mt-[0px] mb-[10px] text-[100px] font-bold ">Pop Mix</h1>
                    <p>Hey Violet, VÉRITÉ, Timeflies and more</p>
                    <p className="mt-[10px] text-[14px]">Made for <span className="font-semibold text-[16px]    ">davedirect3</span> </p>

                </div>
            </div>
        </div>
    );
}

export default Playlist;
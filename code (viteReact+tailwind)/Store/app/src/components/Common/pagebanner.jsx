const Pagebanner = (props) => {

    return(
        <div className="flex justify-center items-center h-[300px] bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-5xl text-white font-bold">{props.title}</h1>
        </div>
    );

}

export default Pagebanner;
import React from "react";
import { mobile, watch, makeup } from "../../assets/index";

export default function categories() {
  return (
    <div className=" flex flex-col w-full sm:flex-row sm:py-5  py-3 px-3 sm:px-16 gap-5 border-red-100 justify-center">
      <div className="col-1 bg-orange-200 sm:w-[30%]  w-full  flex flex-col justify-between py-3 px-5 pr-6 items-center rounded-lg">
        <img
          src={mobile}
          alt=""
          className="w-[absolute inset-0 w-full  object-cover]"
        />
        <div className="infocard">
        <h3 className="text-bold text-[24px]">
          Smart Phone New Collection 2024
        </h3>
        <button
          className="flex flex-row
            items-center self-center py-2 px-3 bg-green-300 mt-5 gap-2"
        >
          <a href="#" cl>
            View More
          </a>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        
      </div>

      <div className="col-2 sm:w-[30%]  w-full py-3 px-2 overflow-hidden flex flex-col gap-5 justify-start">
        <div className="upper flex flex-row gap-3 ">
          <img  className= "  border-orange-400 h-[130px] border-[1px] rounded-lg" src={watch} alt="" />
          <div className="info">
            <h3 className="text-lg text-black font-bold">Watch Collection</h3>
            <p className="text-sm ">
              This watch for more watches that is very important for you to have.
            </p>
            <button
              className="flex flex-row
                        items-center self-center text-sm gap-2 bg-orange-400 py-2 px-3 mt-2 text-white"
            >
              <a href="#">View More</a>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="upper flex flex-row gap-3 ">
          <img  className= "  border-orange-400 h-[130px] border-[1px] rounded-lg" src={watch} alt="" />
          <div className="info">
            <h3 className="text-lg text-black font-bold">Watch Collection</h3>
            <p className="text-sm ">
              This watch for more watches that is very important for you to have.
            </p>
            <button
              className="flex flex-row
                        items-center self-center text-sm gap-2 bg-orange-400 py-2 px-3 mt-2 text-white"
            >
              <a href="#">View More</a>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="upper flex flex-row gap-3 ">
          <img  className= "  border-orange-400 h-[130px] border-[1px] rounded-lg" src={watch} alt="" />
          <div className="info">
            <h3 className="text-lg text-black font-bold">Watch Collection</h3>
            <p className="text-sm ">
              This watch for more watches that is very important for you to have.
            </p>
            <button
              className="flex flex-row
                        items-center self-center text-sm gap-2 bg-orange-400 py-2 px-3 mt-2 text-white"
            >
              <a href="#">View More</a>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
       

      

        
      
      </div>

      <div className="col-3 bg-[#F7D4DB] sm:w-[30%]   flex flex-col justify-between w-full  py-3 px-5 pr-6  rounded-lg">
        <img
          src={makeup}
          alt=""
          className="w-[absolute inset-0 w-full  object-cover]"
        />
        <div className="infocard px-0">
        <h3 className="text-bold text-[24px]">Cometics products</h3>
        <button
          className="flex flex-row
            items-center self-center py-2 px-3 bg-green-300 mt-5 gap-2"
        >
          <a href="#" cl>
            View More
          </a>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
       
      </div>
    </div>
  );
}

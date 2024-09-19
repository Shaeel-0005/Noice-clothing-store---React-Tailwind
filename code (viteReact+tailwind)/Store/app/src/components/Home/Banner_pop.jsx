import React from "react";
import styles from "../../style";
import { van } from "../../assets/index";

export default function Banner_pop() {
  return (
    <div
      className={`${styles.boxWidth} 
      items-center self-center justify-center
      mt-[-50px] bg-transparent flex flex-row h-[200px]`}
    >
      <div
        className="box bg-green w-[80%] flex flex-row py-2 z-10
       bg-white border-dashed border-[#ce8271] border-t-0 border-x-2 border-y-2
       shadow-[#F7ECEA] shadow-xl h-[130px] px-5 justify-around
       "
      >
        <div className="first flex flex-row">
          <div className="flex items-center space-x-4 justify-end">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img className="w-[60px] h-[60px]" src={van} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Free</h3>
              <p className="text-gray-900 text-lg">Delivery</p>
            </div>
          </div>
        </div>

        <div className="second flex flex-row">
          <div className="flex items-center space-x-4 justify-end">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img className="w-[60px] h-[60px]" src={van} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Free</h3>
              <p className="text-gray-900 text-lg">Delivery</p>
            </div>
          </div>
        </div>
        <div className="third flex flex-row">
          <div className="flex items-center space-x-4 justify-end">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img className="w-[60px] h-[60px]" src={van} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Free</h3>
              <p className="text-gray-900 text-lg">Delivery</p>
            </div>
          </div>
        </div>
        <div className="fourth flex flex-row">
          <div className="flex items-center space-x-4 justify-end">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img className="w-[60px] h-[60px]" src={van} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black">Free</h3>
              <p className="text-gray-900 text-lg">Delivery</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

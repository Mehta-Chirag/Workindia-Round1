import React, { useState } from "react";
// import {
//     Link
// } from "react-router-dom";

const Home = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[411px] bg-[#E6E9F6] h-[143px]">
            <div className="flex justify-around items-center flex-row w-full">
                <h1 className="text-[22px] font-bold" >Explore</h1>
                <h3 className="text-[#5DB075]" >Filter</h3>
            </div>
            <div>
                <input placeholder="Search" className="outline-none rounded-full h-[50px] w-[343px] px-5 mt-3 text-xl" type="text" name="" id="" />
            </div>
        </div>
    );
};

export default Home;
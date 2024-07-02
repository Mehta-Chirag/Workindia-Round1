import React, { useState, useEffect } from "react";
// import {
//     Link
// } from "react-router-dom";
import axios from 'axios';

const Cont = () => {

    const [Data, setData] = useState([{
        createdAt: "2024-07-01T13:31:21.051Z",
        item: "item 1",
        image_url: "https://placehold.co/400x400.png",
        price: 16,
        shipping_method: "Same Day Shipping",
        id: "1"
      }]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a");
            console.log(response.data)
            setData(response.data);
          } catch (error) {
            console.error('Error fetching courses:', error);
            setData([]);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="flex flex-col justify-center items-center w-[411px] bg-white h-[489px] ">
            <div className="flex flex-col justify-evenly items-center w-[343px] overflow-y-auto overflow-x-hidden" >

                {Data.map((val) => (
                    <div
                    key = {val.id}
                    className="flex flex-row w-full m-3" >
                        <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                        <div className="flex flex-col pl-6" >
                            <h1 className="font-bold" >Item 1</h1>
                            <h1>MRP: Rs100.0</h1>
                        </div>
                    </div>
                ))}

                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                {/* <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div>
                <div className="flex flex-row w-full m-3" >
                    <div className="box h-[50px] w-[50px] rounded-md bg-[#E6E9F6]"></div>
                    <div className="flex flex-col pl-6" >
                        <h1 className="font-bold" >Item 1</h1>
                        <h1>MRP: Rs100.0</h1>
                    </div>
                </div> */}
                
            </div>
        </div>
    );
};

export default Cont;
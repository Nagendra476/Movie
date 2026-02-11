import React from "react";  
import log from "../images/image2.jpg";
import { useNavigate } from "react-router-dom";
function Practice(){
    const navigate=useNavigate();  
    return(

        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-500 ">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                <h1 className=" bg-blue text-black flex items-center justify-center font-bold mt-5">Practice</h1>
                <div className="p-6">
                    <label className="block mt-4">
                        email:
                        <input type="email" className="border border-gray-300 rounded-md p-2 w-full mt-1" />
                    </label>
                    <label className="block mt-4">
                        password:
                        <input type="password" className="border border-gray-300 rounded-md p-2 w-full mt-1" />
                    </label>
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-6 hover:bg-blue-600 w-full">
                        Submit
                    </button>
                    <button className="bg-red-600 text-white rounded-md w-full  px-4 py-2 mt-4 hover:bg-red-700">
                        Reset 
                        
                    </button>
                

                </div>
            </div>
         
        </div>
        {/*<div className="flex items-center gap-3 cursor-pointer">
                    <img src={log} alt="Logo" className="h-10 w-10 rounded-full object-cover shadow" />

                </div>*/}
        </>
    );
}
export default Practice;
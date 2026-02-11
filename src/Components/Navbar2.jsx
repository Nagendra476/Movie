import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/image2.jpg";
function Navbar2(){

    return(
        <nav className="bg-red-700 mt-32 text-white px-4 py-2 shadow-md"> 
            <div className="max-w-1xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={logoImg} 
                    alt="logo" 
                    className="h-10 w-10 rounded-full object-cover shadow" />
                    <span className="text-2xl font-bold"> movie box</span>
                    </div>

            </div>
        </nav>
    );
}
export default Navbar2;
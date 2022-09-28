import React from "react";

const Navbar = ()=>{
    return(
        <>
            <div className="flex justify-between h-[10vh] pt-2 item-center border-b-4 border-gray-300">
                <div>
                    <a href="/dashboard" className="no-underline">
                    <div>
                        <p className="text-blue-600 font-extrabold pl-4 text-lg ">CAMIO</p>
                        </div>
                    </a>
                </div>
                <div className="flex justify-end pr-8 ">
                 <div className="pl-4">
                 <a href="">
                    <p className="text-xs pt-2 text-blue-500">Home</p>
                    </a>
                 </div>
                 <div className="pl-4">
                 <a href="">
                    <p className="text-xs pt-2 text-blue-500">Analytics</p>
                    </a>
                 </div>
                 <div className="pl-4">
                 <a href="">
                    <p className="text-xs pt-2 text-blue-500">My profile</p>
                    </a>
                 </div>
                 <div className="pl-4">
                 <a href="">
                    <p className="text-xs pt-2 text-blue-500 ">Login/Register</p>
                    </a>
                 </div>
                 
                 
                 

                </div>
                
            </div>
        </>
    )
}
export default Navbar;
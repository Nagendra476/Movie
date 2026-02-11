import { useEffect } from "react";

function Login(){
    {/*
    useEffect(()=>{
        axios.get('url')
        .then((resp)=>{
            console.log(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[]);*/}
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-500">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                 <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-2 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-3 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2" >
                        password
                    </label>
                    <input type="password"
                    placeholder="enter your password "
                    className="w-full px-5 py-2 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 " />
                </div>
                <button className="w-full bg-blue-500 rounded-lg py-2 
                text-white hover:bg-blue-800 transition duration-200">Login</button>


            </div>
        </div>

    );
}
export default Login;
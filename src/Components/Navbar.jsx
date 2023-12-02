export const Navbar= ()=>{
    return(
    <div className="ml-3">
        
        <ul className="flex mt-5">
        <img src="src\assets\Notion_app_logo.png" alt="notion-logo" className="object-fit h-10 w-10"  /> 
            <li className=" font-bold mt-2 ml-3"> Notion</li>
            <li className="mt-2 ml-3 ">Product</li>
            <li  className="mt-2 ml-3">Dowanloads</li>
            <li  className="mt-2 ml-3">Solutions</li>
            <li className="mt-2 ml-3">Resources</li>
            <li  className="mt-2 ml-3">Pricing</li>
            <div className="flex  ml-[30%]">
            <li className="mt-2 ml-4">Request a Demo</li>
            <li className="mt-2 ml-4">Login</li>
            <button className="ml-4 primary bg-black text-white rounded-lg h-[90%] "><p className="p-3 font-bold mb-1">Get Notion Free</p> </button>
            </div>
        </ul>
    </div>
    )
}
export const Parade= ()=>{
    return(
        <>
        <div className="w-max mx-auto">
            <p className="font-bold text-6xl">Get Started For Free</p>
            <p className="ml-[15%] mt-15">Play around with it first. Pay and add your team later.</p>
            <div className="w-max mx-auto flex">
            <button className="ml-4 mt-2 primary bg-black text-white rounded-lg"><p className="p-1 font-bold mb-1">Get Notion Free</p> </button>
            <button className="flex mt-2 ml-5 text-xl font-semibold text-blue-500">Request a demo <img className="w-8 h-8" src="src\assets\icons8-arrow-50.png" alt="arraw" /></button>
            </div>
           
          
        </div>
            <img className="w-[50%] h-[50%] mx-auto" src="src\assets\notion-parade.webp" alt="" />
        </>
    )
}
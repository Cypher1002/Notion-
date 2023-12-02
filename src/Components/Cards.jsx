export const Cards = ()=>{
    return(
      <>
      <div className="flex w-max mx-auto p-10 space-x-10 ">
      
         <div className="rounded-xl shadow-2xl p-3">
        <div className="flex">
        <img src="src\assets\shine.png" className="w-5 h-5 bg-purple-200"/>
        <p className="font-bold text-3xl">AI</p>
        <div>
        <div className="ml-5 bg-purple-200 h-7 rounded-xl font-bold text-purple-800">now with Q & A</div> 
        </div>
        
        </div>
        <p className="mt-3 w-[75%]">Ask literally anything. Notion will answer</p>
        <p className="flex text-purple-500 font-bold">Learn More <img className="w-10 h-7 ml-3" src="src\assets\icons8-arrow-50.png" alt="" /></p>
      </div>



      <div className="  rounded-xl shadow-2xl p-3">
        <div className="flex  border-solid">
        <img src="src\assets\icons8-wiki-64.png" className="w-5 h-5 bg-orange-200"/>
        <p className="font-bold text-3xl ml-3">Wikis</p>
     
      </div>
      <div>
        <p className="mt-3">Centralize your knowledge.</p>
        <p>No more hunting for answers</p>
        <p className="flex text-orange-500 font-bold">Learn More <img className="w-10 h-7 ml-3" src="src\assets\icons8-arrow-50.png" alt="" /></p>
     </div>
      </div>


  
      <div className="  rounded-xl shadow-2xl p-3">
        <div className="flex  border-solid">
        <img src="src\assets\icons8-target-64.png" className="w-5 h-5 bg-blue-200"/>
        <p className="font-bold text-3xl ml-3">Projects</p>
     
      </div>
      <div className="p-3">
        <p className="mt-3">Simple,powerful,beautiful.</p>
        <p>Next-gen notes & docs.</p>
      
        <p className="flex text-blue-500 font-bold">Learn More <img className="w-10 h-7 ml-3" src="src\assets\icons8-arrow-50.png" alt="" /></p>
     </div>
      </div>



      <div className="  rounded-xl shadow-2xl p-3">
        <div className="flex  border-solid">
        <img src="src\assets\icons8-google-sheets-48.png" className="w-5 h-5 bg-blue-200"/>
        <p className="font-bold text-3xl ml-3">Docs</p>
     
      </div>
      <div className="p-3">
        <p className="mt-3">Simple,powerful,beautiful.</p>
        <p>Next-gen notes & docs.</p>
      
        <p className="flex text-yellow-500 font-bold">Learn More <img className="w-10 h-7 ml-3" src="src\assets\icons8-arrow-50.png" alt="" /></p>
     </div>
      </div>

      </div>
      <div className="w-max mx-auto">
        <img src="src\assets\snippet.png" alt="snippet" />
      </div>

      </>






    )
}
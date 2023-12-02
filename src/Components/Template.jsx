export const Template= ()=>{
    return(
      <>
      <div >
  <p className=" w-max mx-auto text-5xl font-bold">
    Endless ways to use it
  </p>

  <div className="flex p-10 grid-cols-2  gap-5 w-3/4 mx-auto">

    {/* First Card */}
    <div className="p-5 bg-gray-300 rounded-xl ">
      <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
      <p className="font-bold text-xl">Company wiki</p>
      <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
      <img className="ml-5 mt-10" src="src\assets\card-side.png" alt="" />
    </div>

    <div className="grid grid-cols-2  gap-4 ">
  {/* Row 1 */}
  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">Product Roadmap</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>

  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">OKR's</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>

  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">Meeting Notes</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>

  {/* Row 2 */}
  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">Vacation Partner</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>

  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">Editorial Calendar</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>

  <div className="p-5 bg-gray-300 rounded-xl">
    <img className="h-10 w-10" src="src\assets\icons8-wiki-64.png" alt="" />
    <p className="font-bold text-xl">Habit Tracker</p>
    <button className="text-l font-semibold flex text-blue-300">Get template <img className="h- w-7" src="src\assets\icons8-arrow-50.png" alt="" /></button>
  </div>
</div>


  </div>
</div>


      </>
    )
}
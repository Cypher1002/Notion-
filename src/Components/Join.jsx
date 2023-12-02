export const Join = () => {
  return (
    <>
      <div className="text-5xl font-bold w-max mx-auto">
        <p>Join a  global movement.</p>
        <p className="ml-4">Unleash Your creativity.</p>
      </div>

      <p className="w-max mx-auto mt-5 text-xl text-center">Our vibrant community produces content, teaches courses, and leads events all over the world.</p>

      <p  className="text-blue-400 text-xl text-center ">Learn more</p>


      <div>
        <img src="src\assets\avatars.webp" alt="" />
      </div>

      <div className="w-3/5 mx-auto grid grid-cols-3 gap-5 ">

        <div className="p-5 bg-gray-100 rounded-xl ">
          <p className="text-6xl text-blue-400 font-bold">1M+</p>
          <p className="ml-2 mt-5">community Members</p>
        </div>

        <div className="p-5 bg-gray-100 rounded-xl ">
          <p className="text-6xl text-blue-400 font-bold">150+</p>
          <p className="ml-2 mt-5">community Groups</p>
        </div>

        <div className="p-5 bg-gray-100 rounded-xl">
          <p className="text-6xl text-blue-400 font-bold">50+</p>
          <p className="ml-2 mt-5">countries represented</p>
        </div>
      </div>


      <div className=" mx-auto my-10 w-3/5 grid grid-cols-2 gap-5">

        {/* First Card */}
        <div className="p-5 bg-gray-100 rounded-xl ">
          <img className="  mt-10" src="src\assets\card-side.png" alt="" />
        </div>

        <div className="grid grid-rows-3 gap-5 ">
          {/* Row 1 */}
          <div className="p-10 bg-gray-100 rounded-xl">
            <p className="font-bold text-xl">Andre` Backmann</p>
            <p className="text-l font-semibold flex text-blue-300">One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best.</p>
          </div>

          <div className="p-10 bg-gray-100 rounded-xl ">
            <p className="font-bold text-xl">Steve Surmane</p>
            <p className="text-l font-semibold  text-blue-300 ">One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best.</p>
          </div>

          <div className="p-10 bg-gray-100 rounded-xl">
            <p className="font-bold text-xl">Steve Surmane</p>
            <p className="text-l font-semibold flex text-blue-300">One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best.</p>
          </div>




        </div>
      </div>
    </>
  )
}
export default function ChicagoSection() {
  return (
    <div className="w-[1100px] mr-auto ml-auto mt-[90px]">
      <div className="flex">
        <div className=" w-[1100px] mr-auto ml-auto">
          <h1 className="text-7xl text-yellow-primary font-markazi">
            Little Lemon
          </h1>
          <h2 className="text-5xl text-black-highlight font-markazi -mt-2">
            Chicago
          </h2>
          <p className="text-black-highlight text-left mt-4 mb-2 font-medium text-xl w-1/2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="relative">
          <img
            className=" rounded-md w-11/12 z-10 relative shadow-md"
            src="./icons_assets/mario-and-adrian-a.jpg"
            alt="Two chef cooking"
          ></img>
          <img
            className="-translate-x-[180px] -translate-y-[80px] rounded-md w-11/12 relative shadow-md"
            src="./icons_assets/mario-and-adrian-b.jpg"
            alt="Two chef cooking"
          ></img>
        </div>
      </div>
    </div>
  );
}

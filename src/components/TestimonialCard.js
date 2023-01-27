export default function TestimonialCard({ imgUrl, name, text, rating }) {
  return (
    <div className=" w-[255px] bg-white px-5 py-7 flex flex-col gap-3 rounded-xl hover:shadow-md transition-all duration-200 ease-in">
      <p>Rating - {rating}/5</p>
      <div className="flex  items-center">
        <img
          className="inline-block w-[45px] h-[45px] rounded-full object-cover"
          src={imgUrl}
          alt="person"
        />
        <span className="pl-2 font-bold">{name}</span>
      </div>
      <p className="text-black-highlight">{text}</p>
    </div>
  );
}

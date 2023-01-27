import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <div className="mt-[100px] bg-white-highlight pb-[50px] pt-[10px]">
      <div className=" w-[1100px] mr-auto ml-auto py-[100px]">
        <h3 className="text-5xl text-center font-markazi">Testimonials</h3>
        <div className="flex gap-6 mt-10">
          <div>
            <TestimonialCard
              name="Duman"
              rating="5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam."
              imgUrl="./icons_assets/duman.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Samir"
              rating="4.5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam."
              imgUrl="./icons_assets/samir.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Yusron"
              rating="4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam."
              imgUrl="./icons_assets/yusron.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Alexander"
              rating="4.2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam."
              imgUrl="./icons_assets/alexander.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

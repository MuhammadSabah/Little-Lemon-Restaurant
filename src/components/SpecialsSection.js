import SpecialFoodCard from "./SpecialFoodCard";

const SpecialsSection = () => {
  return (
    <section className="mt-[140px] w-[1100px] mr-auto ml-auto ">
      <div className="text-7xl font-markazi  ">
        <div className="flex items-center justify-between">
          <h2 className="">This weeks specials!</h2>
          <button className="hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-9 py-3.5 rounded-2xl font-karla mr-[14px]">
            Online Menu
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="flex gap-12 ">
          <SpecialFoodCard
            foodName="Greek Salad"
            price="$12.99"
            description="The famous greek of crispy lettuce, peppers, olives, and our Chicago
          style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
            imageUrl="./icons_assets/greek salad.jpg"
          />
          <SpecialFoodCard
            foodName="Bruchetta"
            price="$5.99"
            description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            imageUrl="./icons_assets/bruchetta.svg"
          />
          <SpecialFoodCard
            foodName="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            imageUrl="./icons_assets/lemon dessert.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;

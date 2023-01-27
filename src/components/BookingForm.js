import { useState } from "react";
import { submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
import { ReservationSlot } from "./ReservationSlot";

export default function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  //
  let curr = new Date();
  curr.setDate(curr.getDate());
  let currDate = curr.toISOString().substring(0, 10);
  //
  const [date, setDate] = useState(currDate);
  const [time, setTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    setDate(Date.now());
    setTime("17.00");
    setNumberOfGuests(1);
    setOccasion("Birthday");
    if (submitAPI("")) {
      navigate("/confirmed");
    }
  };
  //
  return (
    <div className="flex justify-center items-center gap-[230px] py-[60px] bg-gray-primary ">
      {/* <div className="w-[1100px] mr-auto ml-auto"></div> */}
      <form className="grid max-w-[440px] gap-[20px]  " onSubmit={handleSubmit}>
        <h1 className="text-7xl text-yellow-primary font-markazi">
          Reservations
        </h1>
        <label
          htmlFor="res-date"
          className="font-semibold text-xl text-white-highlight"
        >
          Choose date
        </label>
        <input
          className="shadow -mt-[12px]  border rounded h-[50px] w-[320px] focus:outline-none focus:shadow-outline py-2 px-3 text-black-highlight leading-tight"
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            dispatch({ newDate: new Date(e.target.value) });
            return setDate(e.target.value);
          }}
        ></input>
        <label
          htmlFor="res-time"
          className="font-semibold text-xl text-white-highlight"
        >
          Choose time
        </label>
        <select
          className="shadow -mt-[12px]  border rounded h-[50px]  w-[320px]  focus:outline-none focus:shadow-outline py-2 px-3 text-black-highlight leading-tight"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time, index) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label
          htmlFor="guests"
          className="font-semibold text-xl text-white-highlight"
        >
          Number of guests
        </label>
        <input
          className="block -mt-[12px] w-[320px] h-[50px]  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        ></input>
        <label
          htmlFor="occasion"
          className="font-semibold text-xl text-white-highlight"
        >
          Occasion
        </label>
        <select
          className="shadow -mt-[12px]  border rounded h-[50px]  w-[320px]  focus:outline-none focus:shadow-outline py-2 px-3  text-black-highlight leading-tight"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button
          type="submit"
          className=" hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-6 py-3  rounded-2xl mt-4"
        >
          Make Your Reservation
        </button>
      </form>
      <div>
        <h2 className="text-2xl text-white-highlight font-semibold mb-[20px]">
          Available Tables
        </h2>
        <div className="grid gap-x-2 gap-y-4 grid-cols-4 max-h-[584px]">
          {availableTimes.map((time, index) => {
            console.log(time);
            return (
              <ReservationSlot key={time} time={time}>
                {time}
              </ReservationSlot>
            );
          })}
        </div>
      </div>
    </div>
  );
}

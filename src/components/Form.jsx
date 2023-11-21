import {
  FaBoxOpen,
  FaLocationDot,
  FaMapLocationDot,
  FaCalendarCheck,
  FaPhoneFlip,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import React, { useState } from "react";
import Button from "./Button";

const countries = [
  "Austria",
  "Slovakia",
  "Ukraine",
  "Romania",
  "Serbia",
  "Croatia",
  "Slovenia",
  "Hungary",
];

export default function Form({ movingPlans, selectedPlan, setSelectedPlan }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const currDate = new Date().toISOString().slice(0, 10);
  const dateTime = currDate + "T00:00";
  const defaultCountry = "Hungary";

  function handleBook(e) {
    e.preventDefault();
    setShowSuccess(!showSuccess);
  }

  return (
    <section id="moving" className="mb-24 md:mb-36 md:p-8">
      <div className="mx-auto max-w-[1300px] rounded bg-violet-100 px-4 py-4 shadow-md shadow-violet-200">
        <form>
          <div className="mb-12 flex flex-wrap items-center xl:flex-nowrap ">
            <h2 className="mx-auto my-8 mr-auto w-fit items-center px-8 text-3xl xl:mx-0">
              Book Your Move
            </h2>
            {showSuccess && (
              <p className="relative mx-auto max-w-fit rounded-md bg-lime-200 p-2 pr-8 text-lg text-cyan-950 xl:ml-auto">
                Success! Your move is booked. Our team will call you soon to
                tailor the details to your preferences.
                <span className="absolute right-1 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <FaTimes
                    className="text-green-900"
                    size={18}
                    onClick={() => setShowSuccess(!showSuccess)}
                  />
                </span>
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaBoxOpen className="mr-1 fill-violet-900" size={28} />
                Select Your Plan
                <span className="text-[20px] text-red-700">*</span>
              </span>
              <select
                className="h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                {movingPlans.map((plan, i) => (
                  <option value={plan.planType} key={i}>
                    {plan.planType}
                  </option>
                ))}
              </select>
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaMapLocationDot className="mr-1 fill-violet-900" size={28} />
                Country<span className="text-[20px] text-red-700">*</span>
              </span>
              <select
                name=""
                id=""
                className="h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300"
              >
                {countries.map((c, i) => (
                  <option value={c} key={i} selected={c === defaultCountry}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaLocationDot className="mr-1 fill-violet-900" size={28} />
                Address<span className="text-[20px] text-red-700">*</span>
              </span>
              <input
                type="text"
                className="h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300"
              />
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaCalendarCheck className="mr-1 fill-violet-900" size={28} />
                Date<span className="text-[20px] text-red-700">*</span>
              </span>
              <input
                className="h-[40px] w-[320px] rounded border border-slate-400 px-3  focus:outline-none focus:ring focus:ring-violet-300"
                type="datetime-local"
                id="datetime"
                name="datetime"
                min={dateTime}
              />
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaPhoneFlip className="mr-1 fill-violet-900" size={28} />
                Phone Number<span className="text-[20px] text-red-700">*</span>
              </span>
              <input
                type="text"
                className="h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300"
              />
            </label>
            <label className="mb-6 flex items-end justify-center px-9 xl:justify-end">
              <div className="p-o">
                <Button
                  onClick={(e) => handleBook(e)}
                  customSize={"w-[275px]"}
                  customPadding={"py-2"}
                >
                  Book
                </Button>
              </div>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

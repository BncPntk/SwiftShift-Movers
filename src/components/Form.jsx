import {
  FaBoxOpen,
  FaLocationDot,
  FaMapLocationDot,
  FaCalendarCheck,
  FaPhoneFlip,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import React, { useState, useEffect } from "react";
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
  const [addressInput, setAddressInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressIsValid, setAddressIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const defaultCountry = "Hungary";

  useEffect(() => {
    if (formSubmitted) {
      if (!addressIsValid || !dateIsValid || !phoneIsValid) {
        setShowSuccess(false);
        setShowError(true);
        setIsBooked(false);
      } else {
        setShowSuccess(true);
        setShowError(false);
        setIsBooked(true);
      }
    }
  }, [addressIsValid, dateIsValid, phoneIsValid, formSubmitted]);

  function handleBook(e) {
    e.preventDefault();

    setAddressIsValid(!!addressInput.trim());
    setDateIsValid(!!dateInput.trim());
    setPhoneIsValid(!!phoneInput.trim());

    if (!addressIsValid || !dateIsValid || !phoneIsValid) {
      setShowError(true);
    } else {
      setShowError(false);
      setFormSubmitted(true);
    }
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
                    onClick={() => {
                      setShowSuccess(false);
                      setIsBooked(false);
                    }}
                  />
                </span>
              </p>
            )}
            {showError && (
              <p className="relative mx-auto max-w-fit rounded-md bg-red-200 p-2 pr-8 text-lg text-red-700 xl:ml-auto">
                Error! Please fill in all required fields correctly.
                <span className="absolute right-1 top-1/2 -translate-y-1/2 transform cursor-pointer">
                  <FaTimes
                    className="text-red-900"
                    size={18}
                    onClick={() => {
                      setShowError(false);
                    }}
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
                className={`${
                  addressIsValid ? "" : "ring-2 ring-red-600"
                } f h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300`}
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
              />
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaCalendarCheck className="mr-1 fill-violet-900" size={28} />
                Date<span className="text-[20px] text-red-700">*</span>
              </span>
              <input
                className={`${
                  dateIsValid ? "" : "ring-2 ring-red-600"
                } f h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300`}
                type="datetime-local"
                id="datetime"
                name="datetime"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />
            </label>
            <label className="mx-auto mb-6 block">
              <span className="my-1 flex items-center">
                <FaPhoneFlip className="mr-1 fill-violet-900" size={28} />
                Phone Number<span className="text-[20px] text-red-700">*</span>
              </span>
              <input
                type="text"
                className={`${
                  phoneIsValid ? "" : "ring-2 ring-red-600"
                } f h-[40px] w-[320px] rounded border border-slate-400 px-3 focus:outline-none focus:ring focus:ring-violet-300`}
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
              />
            </label>
            <div className="mb-6 flex items-end justify-center px-9 xl:justify-end">
              <div className="p-o">
                <Button
                  onClick={(e) => handleBook(e)}
                  customSize={"w-[275px]"}
                  customPadding={"py-2"}
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

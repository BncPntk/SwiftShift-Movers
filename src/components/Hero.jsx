import Button from "./Button";

import { Link as ScrollLink } from "react-scroll";

export default function Hero({ offset }) {
  return (
    <section id="home" className="md:pt-16 2xl:pt-0">
      <div className="mx-auto grid h-screen w-full max-w-[1240px] gap-x-4 px-4 text-center md:justify-center md:px-8 lg:grid-cols-2 lg:content-center">
        <div className="align-center flex flex-col justify-center lg:mt-[-12rem]">
          {" "}
          <p className="text-1xl m-2 mx-auto p-2 font-bold uppercase sm:w-fit md:text-2xl">
            Seamless Transitions, Exceptional Service
          </p>
          <h1 className="mx-auto w-9/12 text-center text-4xl font-semibold sm:w-fit md:py-4 md:text-6xl ">
            Move with the{" "}
            <span className=" text-violet-900"> SwiftShift Movers</span>
          </h1>
          <div className="text-1xl mx-auto pt-2 text-gray-600 md:text-base">
            Wherever life takes you, we're here to ensure your belongings get
            there safely.
          </div>
          <div className="mx-auto flex pt-10">
            <ScrollLink
              to="moving"
              smooth={true}
              duration={500}
              spy={true}
              offset={offset}
            >
              <Button>Let's Move</Button>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={offset}
            >
              <Button customClasses="bg-primaryOrange hover:bg-secondaryOrange">
                Learn More
              </Button>
            </ScrollLink>
          </div>
        </div>
        <div>
          <img
            src={require("../assets/images/hero_right.png")}
            alt="SSM team"
            className="mx-auto w-10/12 sm:w-8/12 lg:w-auto "
          />
        </div>
      </div>
    </section>
  );
}

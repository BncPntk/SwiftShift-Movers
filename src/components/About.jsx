import { FaTruck, FaPeopleCarry } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import Team from "../assets/images/team.png";

export default function About() {
  function IconTextPair({ value, label, order }) {
    return (
      <div
        className={`flex w-[190px] items-center justify-center order-${order}`}
      >
        <span
          className={`text-4xl font-bold text-orange-400 lg:text-3xl xl:text-4xl`}
        >
          {value}
        </span>
        <p className="mr-0 text-gray-400 md:py-4 lg:md:mr-6 lg:px-2 xl:mr-0 xl:text-xl">
          {label}
        </p>
      </div>
    );
  }

  return (
    <section className="mb-24 px-6 md:mb-36 md:p-8">
      <div className="max-w[1240px] mx-auto grid w-full gap-4 md:grid-cols-2">
        <img
          className="mx-auto my-auto w-[800px]"
          src={Team}
          alt="Our team in fornt of a truck"
        />
        <div className="flex max-w-[800px] flex-col justify-center px-6 md:px-0">
          <h3 className="mb-6 text-xl font-bold uppercase text-primaryOrange">
            About us
          </h3>
          <h1 className="mb-4 font-bold sm:text-3xl lg:text-4xl">
            Unlock the door to a hassle-free moving experience.
          </h1>
          <p className="mb-6 max-w-[600px] md:mb-2 lg:mb-12">
            Embark on a journey of reliability and care as we make your move
            seamless and stress-free. Our dedicated team ensures your belongings
            reach their destination safely.
          </p>
          <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3">
            <FaTruck
              size={60}
              className="order-1 fill-violet-600 lg:order-none"
            />
            <FaPeopleCarry
              size={60}
              className="order-3 fill-violet-600 lg:order-none"
            />
            <PiShieldCheckFill
              size={60}
              className="order-5 fill-violet-600 lg:order-none"
            />

            <IconTextPair
              value="7"
              label="Modern Trucks"
              order={`${1} lg:order-none`}
            />
            <IconTextPair
              value="35+"
              label="Moving Experts"
              order={`${4} lg:order-none`}
            />
            <IconTextPair
              value="1000+"
              label="Completed Moves"
              order={`${6} lg:order-none`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "./Button";

export default function Hero() {
  return (
    <section className="pt-16 2xl:pt-0">
      <div className="mx-auto grid h-screen w-full max-w-[1240px] gap-x-4 px-4 text-center md:justify-center md:px-8 lg:grid-cols-2 lg:content-center">
        <div className="align-center flex flex-col justify-center lg:mt-[-12rem]">
          {" "}
          <p className="m-2 mx-auto p-2 text-2xl font-bold uppercase sm:w-fit">
            Seamless Transitions, Exceptional Service
          </p>
          <h1 className="mx-auto w-9/12 text-center text-3xl font-semibold sm:w-fit md:py-4 md:text-6xl ">
            Move with the{" "}
            <span className=" text-violet-900"> SwiftShift Movers</span>
          </h1>
          <div className="text-1xl mx-auto pt-2 text-gray-600 md:text-base">
            Wherever life takes you, we're here to ensure your belongings get
            there safely.
          </div>
          <div className="mx-auto flex pt-10">
            <Button>Let's Move</Button>
            <Button customClasses="bg-primaryOrange hover:bg-secondaryOrange">
              Learn More
            </Button>
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
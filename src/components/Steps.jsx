import First from "../assets/images/1st_step.png";
import Second from "../assets/images/2nd_step.png";
import Third from "../assets/images/3rd_step.png";

export default function Steps() {
  return (
    <section className="width-full md:mb-24">
      <div className="mx-auto grid max-w-[1240px] px-8 md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-16 md:order-1">
          <span className="text-5xl text-gray-300 lg:text-8xl">01</span>
          <h2 className="text-1xl my-4 font-bold uppercase lg:text-4xl">
            Schedule Your Move
          </h2>
          <p className="text-1xl lg:text-2xl lg:leading-relaxed">
            Select a convenient date for your move. Our team is ready to assist
            you in planning and scheduling your relocation to ensure a smooth
            transition.
          </p>
        </div>
        <img
          src={First}
          alt="The 1st step in the process"
          className="order-1 mx-auto my-4 w-[800px] md:order-2"
        />

        <img
          src={Second}
          alt="The 2nd step in the process"
          className="order-3 mx-auto my-4 w-[800px] md:order-4"
        />
        <div className="order-4 flex flex-col justify-center px-16 md:order-5">
          <span className="text-5xl text-gray-300 lg:text-8xl">02</span>
          <h2 className="text-1xl my-4 font-bold uppercase lg:text-4xl">
            Professional Packing
          </h2>
          <p className="text-1xl lg:text-2xl lg:leading-relaxed">
            Our experienced movers will expertly pack and secure your belongings
            for the journey. From delicate items to furniture, trust us to
            handle your possessions with care.
          </p>
        </div>
        <div className="order-6 flex flex-col justify-center px-16 md:order-5">
          <span className="text-5xl text-gray-300 lg:text-8xl">03</span>
          <h2 className="text-1xl my-4 font-bold uppercase lg:text-4xl">
            Effortless Moving Day
          </h2>
          <p className="text-1xl lg:text-2xl lg:leading-relaxed">
            On the big day, our dedicated team will handle the heavy lifting.
            Relax and let us take care of the logistics, ensuring a hassle-free
            move from your old place to your new home.
          </p>
        </div>
        <img
          src={Third}
          alt="The 3rd step in the process"
          className="order-5 mx-auto my-4 w-[800px] md:order-6"
        />
      </div>
    </section>
  );
}

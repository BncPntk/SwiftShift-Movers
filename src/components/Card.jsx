import Button from "./Button";

export default function Card({ img, type, price, truckSize, features }) {
  return (
    <div
      className={
        type === "Executive Plan"
          ? " my-8 flex w-full flex-col rounded-lg bg-neutral-50 px-2 py-4 shadow-xl ring ring-[#EBAC79] duration-500 hover:scale-105 xl:my-0"
          : "my-8 flex w-full  flex-col rounded-lg px-2 py-4 shadow-xl ring ring-slate-200 duration-500 hover:scale-105 md:scale-100 xl:my-0"
      }
    >
      <img className="mx-auto mt-[-3rem] w-32" src={img[0]} alt={img[1]} />
      <h2 className="py-8 text-center text-3xl font-bold">{type}</h2>
      <p className="text-center text-4xl font-bold ">€{price}</p>
      <div className="text-center font-medium">
        <p className="mx-8 mt-6 border-b">{truckSize}</p>
        {features.map((f, i) => (
          <p className="mx-2 border-b py-2 " key={i}>
            {f}
          </p>
        ))}
      </div>
      <div className="mx-auto mt-auto pt-6">
        {type === "Executive Plan" ? (
          <Button customClasses="bg-primaryOrange hover:bg-secondaryOrange">
            Select
          </Button>
        ) : (
          <Button>Select </Button>
        )}
      </div>
    </div>
  );
}

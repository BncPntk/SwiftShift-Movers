import Card from "./Card";

export default function Cards({ movingPlans, setSelectedPlan }) {
  return (
    <div
      id="plans"
      className="mx-auto w-[90%] px-4 py-[10rem] md:w-[60%] lg:w-[90%]"
    >
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-3">
        {movingPlans.map((plan, i) => (
          <Card
            key={i}
            img={plan.img}
            type={plan.planType}
            price={plan.price}
            truckSize={plan.truckSize}
            features={plan.features}
            setSelectedPlan={setSelectedPlan}
          ></Card>
        ))}
      </div>
    </div>
  );
}

import Card from "./Card";
import EconomyImg from "../assets/images/tier1.png";
import StandardImg from "../assets/images/tier2.png";
import ExecutiveImg from "../assets/images/tier3.png";

const movingPlans = [
  {
    planType: "Economy Plan",
    truckSize: "Compact (3 meters truck)",
    price: 71.99,
    features: [
      "Suitable for small apartments or studio moves",
      "Basic loading and unloading assistance",
      "One experienced driver for safe transport",
      "Limited to a 80-kilometer radius",
    ],
    img: [EconomyImg, "Size illustation for Economy Tier"],
  },
  {
    planType: "Standard Plan",
    truckSize: "Standard (5 meters truck)",
    price: 124.99,
    features: [
      "Ideal for 1-2 bedroom homes",
      "Loading and unloading assistance included",
      "Two skilled drivers for efficient moving",
      "160-kilometer radius coverage",
      "Free packing materials provided",
    ],
    img: [StandardImg, "Size illustation for Standard Tier"],
  },
  {
    planType: "Executive Plan",
    truckSize: "Large (7 meters truck)",
    price: 199.99,
    features: [
      "Suitable for larger homes or office moves",
      "Full-service moving, including packing and unpacking",
      "Three professional drivers for a quick and secure move",
      "Extended 320-kilometer radius coverage",
      "Premium packing materials and moving blankets included",
      "Weekend and evening scheduling options",
    ],
    img: [ExecutiveImg, "Size illustation for Executive Tier"],
  },
];

export default function Cards() {
  return (
    <div className="mx-auto w-[90%] px-4 py-[10rem] md:w-[60%] lg:w-[90%]">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-3">
        {movingPlans.map((plan, i) => (
          <Card
            key={i}
            img={plan.img}
            type={plan.planType}
            price={plan.price}
            truckSize={plan.truckSize}
            features={plan.features}
          ></Card>
        ))}
      </div>
    </div>
  );
}

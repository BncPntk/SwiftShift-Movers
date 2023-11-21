import Hero from "./components/Hero";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import EconomyImg from "./assets/images/tier1.png";
import StandardImg from "./assets/images/tier2.png";
import ExecutiveImg from "./assets/images/tier3.png";

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
    img: [EconomyImg, "Size illustration for Economy Tier"],
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
    img: [StandardImg, "Size illustration for Standard Tier"],
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
    img: [ExecutiveImg, "Size illustration for Executive Tier"],
  },
];

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(movingPlans[0].planType);

  return (
    <>
      <Navbar />
      <Hero />
      <Form
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        movingPlans={movingPlans}
      />
      <Steps />
      <CardList setSelectedPlan={setSelectedPlan} movingPlans={movingPlans} />
      <About />
      <Footer />
    </>
  );
}

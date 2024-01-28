import { useState } from "react";
import BillInput from "./BillInput";
import Button from "./Button";
import Outputbill from "./Outputbill";
import ServiceCategory from "./ServiceCategory";
function BillCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = billAmount * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBillAmount("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={billAmount} onSetBill={setBillAmount} />
      <ServiceCategory
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the service?
      </ServiceCategory>
      <ServiceCategory
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the service
      </ServiceCategory>
      {billAmount > 0 && (
        <>
          <Outputbill bill={billAmount} tip={tip} />
          <Button onResetClick={handleReset} />
        </>
      )}
    </div>
  );
}

export default BillCalculator;

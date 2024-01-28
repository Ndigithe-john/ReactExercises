import BillInput from "./BillInput";
import Button from "./Button";
import Outputbill from "./Outputbill";
import ServiceCategory from "./ServiceCategory";
function BillCalculator() {
  return (
    <div>
      <BillInput />
      <ServiceCategory>How did you like the service? </ServiceCategory>
      <ServiceCategory>How did your friend like the service</ServiceCategory>
      <Outputbill />
      <Button />
    </div>
  );
}

export default BillCalculator;

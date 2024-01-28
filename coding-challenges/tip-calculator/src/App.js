import "./index.css";
import BillInput from "./components/BillInput";
import CustomerServiceSatisfaction from "./components/CustomerServiceSatisfaction";
import Outputbill from "./components/Outputbill";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <BillInput />
      <CustomerServiceSatisfaction />
      <Outputbill />
      <Button>reset</Button>
    </div>
  );
}

export default App;

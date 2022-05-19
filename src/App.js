import "./App.css";
import CouponCard from "./components/CouponCard";
import CouponForm from "./components/CouponForm";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <CouponForm />
      <CouponCard />
    </div>
  );
}

export default App;

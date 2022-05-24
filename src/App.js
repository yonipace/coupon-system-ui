import { useEffect, useState } from "react";
import "./App.css";
import CouponForm from "./components/CouponForm";
import CouponTable from "./components/CouponTable";
import PurchaseCouponList from "./components/PurchaseCouponList";
import UserInfo from "./components/UserInfo";

function App() {
  const [coupons, setCoupons] = useState(dummyCoupons);
  const [customerCoupons, setCustomerCoupons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/test/getCoupons")
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });
  useEffect(() => {
    fetch("http://localhost:8080/test/getCustomerCoupons")
      .then((res) => res.json())
      .then((result) => {
        setCustomerCoupons(result);
      });
  });

  return (
    <div className="App">
      <UserInfo />
      <CouponTable coupons={customerCoupons} />
      <PurchaseCouponList coupons={coupons} />
    </div>
  );
}

export default App;

const dummyCoupons = [
  {
    id: 1,
    category: "FOOD",
    title: "Electronics",
    description: "Enormous Aluminum Bench",
    startDate: "2022-01-01",
    endDate: "2022-03-16",
    amount: 59,
    price: 11.73,
    company: "jacobs & co",
  },
  {
    id: 2,
    category: "ELECTRICITY",
    title: "Movies, Outdoors & Tools",
    description: "Enormous Marble Table",
    startDate: "2022-01-01",
    endDate: "2022-02-25",
    amount: 49,
    price: 66.12,
    company: "jacobs & co",
  },
  {
    id: 3,
    category: "VACATION",
    title: "Grocery & Kids",
    description: "Ergonomic Granite Table",
    startDate: "2022-01-01",
    endDate: "2022-02-25",
    amount: 50,
    price: 86.4,
    company: "jacobs & co",
  },
  {
    id: 4,
    category: "ELECTRICITY",
    title: "Games & Outdoors",
    description: "Practical Leather Wallet",
    startDate: "2022-01-01",
    endDate: "2022-03-21",
    amount: 19,
    price: 21.12,
    company: "gusikowski LTD",
  },
  {
    id: 5,
    category: "VACATION",
    title: "Books",
    description: "Durable Concrete Hat",
    startDate: "2022-01-01",
    endDate: "2022-02-11",
    amount: 56,
    price: 29.3,
    company: "gusikowski LTD",
  },
  {
    id: 6,
    category: "FOOD",
    title: "Outdoors",
    description: "Rustic Leather Bench",
    startDate: "2022-01-01",
    endDate: "2022-03-18",
    amount: 12,
    price: 36.28,
    company: "gusikowski LTD",
  },
];

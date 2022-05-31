import CompanyTable from "./company/CompanyTable";
import CustomerTable from "./customer/CustomerTable";

const AdminLayout = () => {
  return (
    <div>
      <CustomerTable customers={dummyCustomers} />
      <CompanyTable companies={dummyCompanies} />
    </div>
  );
};

export default AdminLayout;

const dummyCustomers = [
  {
    id: 1,
    firstName: "mike",
    lastName: "jordan",
    email: "mike@email.com",
    password: "mike",
  },
  {
    id: 2,
    firstName: "dan",
    lastName: "levy",
    email: "dan@email.com",
    password: "dan",
  },
  {
    id: 3,
    firstName: "michal",
    lastName: "cohen",
    email: "michal@email.com",
    password: "michal",
  },
];

const dummyCompanies = [
  {
    id: 101,
    name: "coupons and co.",
    email: "coupons@email.com",
    password: "coupons",
  },
  {
    id: 102,
    name: "Bikes and Bikes",
    email: "bikes@email.com",
    password: "bikes",
  },
  {
    id: 103,
    name: "glasses LTD",
    email: "glasses@email.com",
    password: "glasses",
  },
];

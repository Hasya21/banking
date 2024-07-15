import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Hasya",
    lastName: "Patel",
    email: "hasyapatel21@gmail.com",
  };

  const banks = [
    { $id: "1", name: "Bank A", currentBalance: 123.5, mask: "1234" },
    { $id: "2", name: "Bank B", currentBalance: 500.5, mask: "5678" },
  ];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;

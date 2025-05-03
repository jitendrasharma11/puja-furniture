"use client";
import { useState } from "react";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return <p>Welcome to your dashboard. View your orders, addresses, and profile info here.</p>;
      case "orders":
        return <p>Your recent orders will appear here.</p>;
      case "addresses":
        return <p>Manage your shipping and billing addresses here.</p>;
      case "profile":
        return <p>Update your profile information here.</p>;
      case "password":
        return <p>Change your password here.</p>;
      default:
        return <p>Select an option from the menu.</p>;
    }
  };

  const tabItems = [
    { key: "dashboard", label: "My Dashboard" },
    { key: "orders", label: "Orders" },
    { key: "addresses", label: "Addresses" },
    { key: "profile", label: "My Profile" },
    { key: "password", label: "Change Password" },
  ];

  return (
    <div className="max-w-[1320px] mx-auto flex mt-10">
      <div className="w-1/4">
        {tabItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedTab(item.key)}
            className={`block w-full text-left px-4 py-3 mb-2 rounded ${
              selectedTab === item.key ? "bg-[#C69C7B] text-white" : "bg-black text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
        <button className="block w-full text-left px-4 py-3 mt-4 bg-black text-white rounded">
          Logout
        </button>
      </div>
      <div className="w-3/4 px-8">
        <h1 className="text-2xl font-bold mb-4">{tabItems.find(t => t.key === selectedTab)?.label}</h1>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
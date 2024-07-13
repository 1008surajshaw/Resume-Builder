// src/pages/InnerDashboard.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import Header from "../../../src/components/dashboard/Header";
import Hero from "../../../src/components/dashboard/Hero";
import SideNav from "../../../src/components/dashboard/SideNav";

const InnerDashboard: React.FC = () => {
  const { user, fetchUserDetails } = useUserStore();
  const navigate = useNavigate();
  console.log("user", user);

  useEffect(() => {
    fetchUserDetails().catch(() => navigate("/auth"));
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="bg-white h-screen w-72 fixed">
        <SideNav />
      </div>
      <div className="col-span-4 ml-72">
        <div>
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default InnerDashboard;

"use client";

import { useState } from "react";
import { Profile } from "@/features/profile";
import { IUser } from "@/entities/profile";
import "./styles.css";

const MOCK_USER: IUser = {
  id: "1",
  fullName: "Александр Константинопольский",
  role: "Старший менеджер по документообороту",
  location: "Алматы, пр. Достык 105",
  department: "Департамент логистики и закупок",
  email: "a.konstantin@interlink.kz",
  phone: "+7 (707) 123-45-67",
  hireDate: "12.05.2021",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander",
  activeDocs: 42,
  completedTasks: 128,
  position: "Старший менеджер по документообороту",
  accessLevel: "Advanced User / Admin",
  tenure: "2 года 10 месяцев",
  subdivision: "Головной офис",
};

export const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("details");

  //  API:

  return (
    <div className="profile-widget">
      <div className="profile-widget__container">
        <Profile
          user={MOCK_USER}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};
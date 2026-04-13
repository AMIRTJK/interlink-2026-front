"use client";

import { Row, Col } from "antd";
import { IUser } from "@/entities/profile";
import { ProfileSidebar } from "./ui/ProfileSidebar/ui";
import { ProfileStats } from "./ui/ProfileStats/ui";
import { ProfileTabs } from "./ui/ProfileTabs/ui";
import { ProfileDetails } from "./ui/ProfileDetails/ui";
import "./styles.css";

interface IProps {
  user: IUser;
  activeTab: string;
  setActiveTab: (key: string) => void;
}

export const Profile = ({ user, activeTab, setActiveTab }: IProps) => {
  return (
    <div className="profile">
      <Row gutter={[40, 40]}>
        <Col xs={24} lg={8}>
          <div className="profile__column-left">
            <ProfileSidebar user={user} />
            <div className="profile__stats-wrapper">
              <ProfileStats
                activeDocs={user.activeDocs}
                completedTasks={user.completedTasks}
              />
            </div>
          </div>
        </Col>

        <Col xs={24} lg={16}>
          <div className="profile__column-right">
            <div className="profile__tabs-wrapper">
              <ProfileTabs activeKey={activeTab} onChange={setActiveTab} />
            </div>
            <div className="profile__content">
              {activeTab === "details" && <ProfileDetails user={user} />}
              {activeTab === "modules" && (
                <div className="profile__placeholder">
                  Раздел «Модули системы» в разработке
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
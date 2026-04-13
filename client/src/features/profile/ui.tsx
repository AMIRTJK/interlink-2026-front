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
    <div className="profile-feature">
      <Row gutter={[40, 40]}>
        <Col xs={24} lg={8}>
          <div className="profile-feature__left-column">
            <ProfileSidebar user={user} />
            <div className="profile-feature__stats-area">
              <ProfileStats
                activeDocs={user.activeDocs}
                completedTasks={user.completedTasks}
              />
            </div>
          </div>
        </Col>

        <Col xs={24} lg={16}>
          <div className="profile-feature__right-column">
            <div className="profile-feature__tabs-wrapper">
              <ProfileTabs activeKey={activeTab} onChange={setActiveTab} />
            </div>
            <div className="profile-feature__content-area">
              {activeTab === "details" && <ProfileDetails user={user} />}
              {activeTab === "modules" && (
                <div className="profile-feature__placeholder">
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
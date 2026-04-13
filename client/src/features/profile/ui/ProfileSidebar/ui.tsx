import { Avatar, Button, Typography } from "antd";
import {
  EnvironmentOutlined,
  BankOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IUser } from "@/entities/profile";
import "./styles.css";

const { Title, Text } = Typography;

interface IProps {
  user: IUser;
}

export const ProfileSidebar = ({ user }: IProps) => {
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar__card">
        <div className="profile-sidebar__avatar-group">
          <div className="profile-sidebar__avatar-wrapper">
            <Avatar
              size={120}
              src={user.avatar}
              icon={<UserOutlined />}
              className="profile-sidebar__avatar"
            />
            <div className="profile-sidebar__status-dot" />
          </div>
        </div>

        <div className="profile-sidebar__header">
          <Title level={4} className="profile-sidebar__name">
            {user.fullName}
          </Title>
          <Text className="profile-sidebar__role">{user.role}</Text>
          <div className="profile-sidebar__location">
            <EnvironmentOutlined className="profile-sidebar__location-icon" />
            <Text type="secondary" className="profile-sidebar__location-text">
              {user.location}
            </Text>
          </div>
        </div>

        <div className="profile-sidebar__department-card">
          <div className="profile-sidebar__department-icon-box">
            <BankOutlined />
          </div>
          <div className="profile-sidebar__department-info">
            <Text className="profile-sidebar__label">ОТДЕЛ</Text>
            <Text className="profile-sidebar__department-name">
              {user.department}
            </Text>
          </div>
        </div>

        <div className="profile-sidebar__contacts">
          <div className="profile-sidebar__contact-item">
            <MailOutlined className="profile-sidebar__contact-icon" />
            <Text className="profile-sidebar__contact-text">{user.email}</Text>
          </div>
          <div className="profile-sidebar__contact-item">
            <PhoneOutlined className="profile-sidebar__contact-icon" />
            <Text className="profile-sidebar__contact-text">{user.phone}</Text>
          </div>
          <div className="profile-sidebar__contact-item">
            <CalendarOutlined className="profile-sidebar__contact-icon" />
            <Text className="profile-sidebar__contact-text">
              В системе с {user.hireDate}
            </Text>
          </div>
        </div>

        <div className="profile-sidebar__actions">
          <Button
            type="primary"
            icon={<UserOutlined />}
            size="large"
            className="profile-sidebar__edit-btn"
            block
          >
            Редактировать профиль
          </Button>
        </div>
      </div>
    </div>
  );
};

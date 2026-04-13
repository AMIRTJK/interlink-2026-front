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
    <div className="profile__sidebar">
      <div className="profile__sidebar-card">
        <div className="profile__sidebar-avatar-group">
          <div className="profile__sidebar-avatar-wrapper">
            <Avatar
              size={120}
              src={user.avatar}
              icon={<UserOutlined />}
              className="profile__sidebar-avatar"
            />
            <div className="profile__sidebar-status-dot" />
          </div>
        </div>

        <div className="profile__sidebar-header">
          <Title level={4} className="profile__sidebar-name">
            {user.fullName}
          </Title>
          <Text className="profile__sidebar-role">{user.role}</Text>
          <div className="profile__sidebar-location">
            <EnvironmentOutlined className="profile__sidebar-location-icon" />
            <Text type="secondary" className="profile__sidebar-location-text">
              {user.location}
            </Text>
          </div>
        </div>

        <div className="profile__sidebar-department">
          <div className="profile__sidebar-department-icon">
            <BankOutlined />
          </div>
          <div className="profile__sidebar-department-info">
            <Text className="profile__sidebar-label">ОТДЕЛ</Text>
            <Text className="profile__sidebar-department-name">
              {user.department}
            </Text>
          </div>
        </div>

        <div className="profile__sidebar-contacts">
          <div className="profile__sidebar-contact-item">
            <MailOutlined className="profile__sidebar-contact-icon" />
            <Text className="profile__sidebar-contact-text">{user.email}</Text>
          </div>
          <div className="profile__sidebar-contact-item">
            <PhoneOutlined className="profile__sidebar-contact-icon" />
            <Text className="profile__sidebar-contact-text">{user.phone}</Text>
          </div>
          <div className="profile__sidebar-contact-item">
            <CalendarOutlined className="profile__sidebar-contact-icon" />
            <Text className="profile__sidebar-contact-text">
              В системе с {user.hireDate}
            </Text>
          </div>
        </div>

        <div className="profile__sidebar-actions">
          <Button
            type="primary"
            icon={<UserOutlined />}
            size="large"
            className="profile__sidebar-edit-btn"
            block
          >
            Редактировать профиль
          </Button>
        </div>
      </div>
    </div>
  );
};

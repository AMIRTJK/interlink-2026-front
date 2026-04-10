import { Avatar, Button, Typography, Space } from "antd";
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
        <div className="profile-sidebar__avatar-wrapper">
          <Avatar
            size={120}
            src={user.avatar}
            icon={<UserOutlined />}
            className="profile-sidebar__avatar"
          />
          <div className="profile-sidebar__status-dot" />
        </div>

        <div className="profile-sidebar__info">
          <Title level={4} className="profile-sidebar__name-text">
            {user.fullName}
          </Title>
          <Text className="profile-sidebar__role-text">{user.role}</Text>
          <div className="profile-sidebar__location">
            <EnvironmentOutlined className="profile-sidebar__icon" />
            <Text type="secondary">{user.location}</Text>
          </div>
        </div>

        <div className="profile-sidebar__department">
          <div className="profile-sidebar__department-icon">
            <BankOutlined />
          </div>
          <div className="profile-sidebar__department-info">
            <Text className="profile-sidebar__label">ОТДЕЛ</Text>
            <Text className="profile-sidebar__value">{user.department}</Text>
          </div>
        </div>

        <div className="profile-sidebar__contacts">
          <div className="profile-sidebar__contacts-item">
            <MailOutlined className="profile-sidebar__icon" />
            <Text>{user.email}</Text>
          </div>
          <div className="profile-sidebar__contacts-item">
            <PhoneOutlined className="profile-sidebar__icon" />
            <Text>{user.phone}</Text>
          </div>
          <div className="profile-sidebar__contacts-item">
            <CalendarOutlined className="profile-sidebar__icon" />
            <Text>В системе с {user.hireDate}</Text>
          </div>
        </div>

        <Button
          type="primary"
          icon={<UserOutlined />}
          size="large"
          className="profile-sidebar__edit-btn"
        >
          Редактировать профиль
        </Button>
      </div>
    </div>
  );
};

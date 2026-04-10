import { Typography, Row, Col } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { IUser } from "@/entities/profile";
import "./styles.css";

const { Title, Text } = Typography;

interface IProps {
  user: IUser;
}

export const ProfileDetails = ({ user }: IProps) => {
  const detailItems = [
    { label: "ФИО ПОЛНОСТЬЮ", value: user.fullName },
    { label: "РАБОЧИЙ EMAIL", value: user.email },
    { label: "ДОЛЖНОСТЬ", value: user.position },
    { label: "УРОВЕНЬ ДОСТУПА", value: user.accessLevel, color: "#5932ea" },
    { label: "СТАЖ В КОМПАНИИ", value: user.tenure },
    { label: "ПОДРАЗДЕЛЕНИЕ", value: user.subdivision },
  ];

  return (
    <div className="profile-details">
      <div className="profile-details__header">
        <AppstoreOutlined className="profile-details__header-icon" />
        <Title level={5} className="profile-details__header-title">
          Персональные данные
        </Title>
      </div>

      <Row gutter={[32, 32]} className="profile-details__grid">
        {detailItems.map((item, index) => (
          <Col span={12} key={index} className="profile-details__item">
            <Text className="profile-details__label" type="secondary">
              {item.label}
            </Text>
            <Text
              className="profile-details__value"
              style={{ color: item.color }}
            >
              {item.value}
            </Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

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
    <div className="profile__details">
      <div className="profile__details-card">
        <div className="profile__details-header">
          <div className="profile__details-icon">
            <AppstoreOutlined />
          </div>
          <Title level={5} className="profile__details-title">
            Персональные данные
          </Title>
        </div>

        <div className="profile__details-content">
          <Row gutter={[48, 32]}>
            {detailItems.map((item, index) => (
              <Col span={12} key={index}>
                <div className="profile__details-item">
                  <Text className="profile__details-label">
                    {item.label}
                  </Text>
                  <Text
                    className="profile__details-value"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </Text>
                  <div className="profile__details-divider" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

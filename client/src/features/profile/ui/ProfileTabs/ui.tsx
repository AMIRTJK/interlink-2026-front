import { Tabs } from "antd";
import "./styles.css";

interface IProps {
  activeKey: string;
  onChange: (key: string) => void;
}

export const ProfileTabs = ({ activeKey, onChange }: IProps) => {
  const items = [
    {
      key: "details",
      label: "Детали пользователя",
    },
    {
      key: "modules",
      label: "Модули системы",
    },
  ];

  return (
    <div className="profile__tabs">
      <Tabs
        activeKey={activeKey}
        onChange={onChange}
        items={items}
        className="profile__tabs-nav"
        animated={{ inkBar: true, tabPane: true }}
      />
    </div>
  );
};

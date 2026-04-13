import { Typography } from "antd";
import "./styles.css";

const { Text } = Typography;

interface IProps {
  activeDocs: number;
  completedTasks: number;
}

export const ProfileStats = ({ activeDocs, completedTasks }: IProps) => {
  return (
    <div className="profile__stats">
      <div className="profile__stats-card-blue">
        <Text className="profile__stats-label">Активных док.</Text>
        <Text className="profile__stats-value">{activeDocs}</Text>
      </div>
      <div className="profile__stats-card-white">
        <Text className="profile__stats-label">Задач выполнено</Text>
        <Text className="profile__stats-value">{completedTasks}</Text>
      </div>
    </div>
  );
};

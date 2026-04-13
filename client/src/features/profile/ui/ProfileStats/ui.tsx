import { Typography } from "antd";
import "./styles.css";

const { Text } = Typography;

interface IProps {
  activeDocs: number;
  completedTasks: number;
}

export const ProfileStats = ({ activeDocs, completedTasks }: IProps) => {
  return (
    <div className="profile-stats">
      <div className="profile-stats__card profile-stats__card--blue">
        <Text className="profile-stats__label">Активных док.</Text>
        <Text className="profile-stats__value">{activeDocs}</Text>
      </div>
      <div className="profile-stats__card profile-stats__card--white">
        <Text className="profile-stats__label">Задач выполнено</Text>
        <Text className="profile-stats__value">{completedTasks}</Text>
      </div>
    </div>
  );
};

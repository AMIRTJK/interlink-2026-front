export interface IUser {
  id: string;
  fullName: string;
  role: string;
  location: string;
  department: string;
  email: string;
  phone: string;
  hireDate: string;
  avatar?: string;
  activeDocs: number;
  completedTasks: number;
  position: string;
  accessLevel: string;
  tenure: string;
  subdivision: string;
}

export interface IProfileProps {
  user: IUser;
}

import { Quiz } from "./quiz.interface";
import { User } from "./user.interface";

export interface Room {
  id: string;
  users: User[];
  quizzes: Quiz[];
  status: "created" | "started" | "full" | "empty";
}

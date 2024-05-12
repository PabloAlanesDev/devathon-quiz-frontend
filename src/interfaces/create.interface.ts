import { Response } from "./response.interface";

export interface UserCreate {
  name: string;
}

export interface RoomCreate {
  owner: string;
  quiz_id: string;
  quiz_count: number;
}

export interface TopicCreate {
  name: string;
  description: string;
}

export interface QuizCreate {
  question: string;
  topic_id: string;
  responses: Response[];
}

export interface RoomQuizCreate {
  question: string;
  responses: Response[];
}

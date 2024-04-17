export interface User {
  id: string;
  name: string;
  score: number;
  status: string;
}

export interface Response {
  id: string;
  text: string;
  status: string;
}

export interface Question {
  id: string;
  text: string;
  options: Response[];
}

export interface Quiz {
  id: string;
  name: string;
  description: string;
  questions: Question[];
  count: number;
}

export interface Rooms {
  id: string;
  owner: User;
  users: User[];
  quiz: Quiz;
  status: string;
}

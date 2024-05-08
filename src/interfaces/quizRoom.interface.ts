export interface QuizRoom {
  id: string;
  quiz_id: string;
  status: "pending" | "in_progress" | "done";
}

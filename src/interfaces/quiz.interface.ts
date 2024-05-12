import { Response } from "./response.interface";

export interface Quiz {
  id: string;
  question: string;
  topic_id: string;
  responses: Response[];
}

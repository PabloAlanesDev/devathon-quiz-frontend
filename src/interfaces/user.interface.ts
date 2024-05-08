export interface User {
  id: string;
  name: string;
  score: number;
  role: "invited" | "owner";
  status: "unknown" | "connect" | "disconnect";
}


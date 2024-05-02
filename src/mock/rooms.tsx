import { Rooms } from "@/types/types";
import { playerOne, playerTwo, playerThree, playerFour } from "@/mock/users";
import { quiz } from "@/mock/quiz";

export const rooms: Rooms[] = [
  {
    id: "898283",
    owner: playerOne,
    users: [playerOne, playerTwo, playerThree, playerFour],
    quiz: quiz,
    status: "online",
  },
  {
    id: "898283",
    owner: playerOne,
    users: [playerThree, playerFour],
    quiz: quiz,
    status: "online",
  },
  {
    id: "898283",
    owner: playerOne,
    users: [playerOne, playerThree, playerFour],
    quiz: quiz,
    status: "online",
  },
  {
    id: "898283",
    owner: playerOne,
    users: [playerOne, playerTwo, playerFour],
    quiz: quiz,
    status: "online",
  },
  {
    id: "898283",
    owner: playerOne,
    users: [playerOne],
    quiz: quiz,
    status: "online",
  },
];
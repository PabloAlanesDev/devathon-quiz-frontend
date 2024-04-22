import {
  Button,
  Flex,
  Heading,
  Avatar,
  TextField,
  Text,
} from "@radix-ui/themes";
import { FrameIcon, CopyIcon } from "@radix-ui/react-icons";
import TopicSelector from "@/components/TopicSelector";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { User } from "../types/types";

// TODO: Mock Data delete after
const participants: User[] = [
  {
    id: "8927857f",
    name: "Player One",
    score: 39287,
    status: "online",
  },
  {
    id: "8927857f",
    name: "Player Two",
    score: 39287,
    status: "online",
  },
  {
    id: "8927857f",
    name: "Player Three",
    score: 39287,
    status: "online",
  },
  {
    id: "8927857f",
    name: "Player Four",
    score: 39287,
    status: "online",
  },
];

export default function CreateRoomPage() {
  const codeRoom = useRef(null);

  const copyRoomCode = () => {};

  return (
    <main className="min-h-dvh grid place-content-center p-4">
      <div className="flex flex-col gap-8 md:flex-row">
        <TopicSelector />

        <Flex className="flex-col items-center justify-between gap-8">
          <Heading>Tu código de sala de juego</Heading>

          <TextField.Root>
            <TextField.Slot>
              <FrameIcon />
              <Text ref={codeRoom}>38DC2D</Text>
            </TextField.Slot>
            <Button onClick={copyRoomCode}>
              <CopyIcon />
            </Button>
          </TextField.Root>

          <Heading>Participantes</Heading>

          <Flex gap="2">
            {participants.map(({ name }) => (
              <Avatar
                key={name}
                radius="full"
                size="5"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback={name.slice(0, 2).toUpperCase()}
              />
            ))}
          </Flex>

          <Flex className="gap-2">
            <Link to={`/`}>
              <Button size="3">Volver al inicio</Button>
            </Link>
            <Link to={`/room`}>
              <Button size="3">Crear sala de juego</Button>
            </Link>
          </Flex>
        </Flex>
      </div>
    </main>
  );
}

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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/";

export default function CreateRoomPage() {
  const [owner, setOwner] = useState({});
  const [participants, setParticipants] = useState([]);
  const [room, setRoom] = useState({});
  const [quiz, setQuiz] = useState({});
  const [topic, setTopic] = useState();

  const createUser = () => {
    const endpoint = `${url}api/users`;

    const newUser = {
      name: localStorage.getItem("username"),
    };

    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        try {
          if (!res.ok)
            throw new Error(res.statusText || "Something went wrong.");
          return res.json();
        } catch (err) {
          console.log(err);
        }
      })
      .then((data) => setOwner(data));
  };

  const createRoom = () => {
    const endpoint = `${url}api/rooms`;

    const room = {
      owner: owner.name,
      quiz_id: crypto.randomUUID(),
      quiz_count: 5,
    };

    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(room),
    })
      .then((res) => {
        try {
          if (!res.ok)
            throw new Error(res.statusText || "Something went wrong.");
          return res.json();
        } catch (err) {
          console.log(err);
        }
      })
      .then((data) => setRoom(data));
  };

  useEffect(() => {
    createUser();
    createRoom();
  }, []);

  const copyRoomCode = () => {};

  return (
    <main className="min-h-dvh grid place-content-center p-4">
      <div className="flex flex-col gap-8 md:flex-row">
        <TopicSelector setTopic={setTopic} />

        <Flex className="flex-col items-center justify-between gap-8">
          <Heading>Tu código de sala de juego</Heading>

          <TextField.Root>
            <TextField.Slot>
              <FrameIcon />
              <Text>{crypto.randomUUID()}</Text>
            </TextField.Slot>
            <Button onClick={copyRoomCode}>
              <CopyIcon />
            </Button>
          </TextField.Root>

          <Heading>Participantes</Heading>

          <Flex gap="2">
            {participants.map(({ name, id }) => (
              <Avatar
                key={id}
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
            <Link to={`/quiz`}>
              <Button size="3">Crear sala de juego</Button>
            </Link>
          </Flex>
        </Flex>
      </div>
    </main>
  );
}

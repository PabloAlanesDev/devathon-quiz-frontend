import {
  Container,
  Button,
  Flex,
  Heading,
  Grid,
  Avatar,
  TextField,
  Text,
} from "@radix-ui/themes";
import { FrameIcon, CopyIcon } from "@radix-ui/react-icons";
import TopicSelector from "@/components/TopicSelector";
import { useRef } from "react";

const roomParticipants = [
  {
    username: "Player One",
    role: "admin",
    userImage:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
  },
  {
    username: "Player Two",
    role: "user",
    userImage:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
  },
  {
    username: "Player Three",
    role: "user",
    userImage:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
  },
  {
    username: "Player Four",
    role: "user",
    userImage:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
  },
];

export default function Main() {
  const codeRoom = useRef(null);

  const copyRoomCode = () => {
    const value = codeRoom.current;
    console.log(value.textContent);
  };

  return (
    <main className="min-h-dvh grid place-content-center">
      <Container size="3">
        <Grid columns="2" gap="9">
          <TopicSelector />

          <Flex direction="column" align="center" gap="4">
            <Heading>Your code room to share</Heading>

            <TextField.Root>
              <TextField.Slot>
                <FrameIcon />
                <Text ref={codeRoom}>38DC2D</Text>
              </TextField.Slot>
              <Button onClick={copyRoomCode}>
                <CopyIcon />
              </Button>
            </TextField.Root>

            <Heading>Participants</Heading>

            <Flex gap="2">
              {roomParticipants.map(({ username, userImage }) => (
                <Avatar
                  className="-ml-6"
                  key={username}
                  radius="full"
                  size="7"
                  src={userImage}
                  fallback="A"
                />
              ))}
            </Flex>

            <Flex gap="8" className="m-12">
              <Button size="3">Back to Home</Button>
              <Button size="3">Create Room</Button>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </main>
  );
}

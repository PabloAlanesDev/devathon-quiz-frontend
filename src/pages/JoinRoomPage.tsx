import {
  Box,
  Container,
  Heading,
  ScrollArea,
  Badge,
  Button,
  Avatar,
  TextField,
  Flex,
  RadioCards,
  Text,
} from "@radix-ui/themes";
import { FrameIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

// TODO: Data to delete when have data from back
const emptyRooms = [
  {
    id: crypto.randomUUID(),
    name: "Sala Uno",
    participants: 3,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Dos",
    participants: 2,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Tres",
    participants: 3,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Cuatro",
    participants: 1,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Cinco",
    participants: 1,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Seis",
    participants: 2,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Siete",
    participants: 3,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Ocho",
    participants: 2,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Nueve",
    participants: 2,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Diez",
    participants: 1,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Once",
    participants: 3,
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Doce",
    participants: 3,
    tags: ["html", "css", "python", "ruby"],
  },
];

const JoinRoomPage = () => {
  return (
    <Container size="2">
      <Flex direction="column" gap="4" align="center">
        <Avatar
          radius="full"
          size="7"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />

        <TextField.Root placeholder="Insert your code Room">
          <TextField.Slot>
            <FrameIcon />
          </TextField.Slot>
        </TextField.Root>

        <Heading>Available Rooms</Heading>
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 380 }}>
          <Box p="2" pr="8">
            <RadioCards.Root
              defaultValue="1"
              columns={{ initial: "1", sm: "3" }}
            >
              {emptyRooms.map(({ id, name, tags, participants }) => (
                <RadioCards.Item value={`${id}`}>
                  <Flex direction="column" gap="2" width="100%">
                    <Flex justify="between">
                      <Text weight="bold">{name}</Text>
                      <Text>{participants}/4</Text>
                    </Flex>
                    <Flex gap="2" wrap="wrap">
                      {tags.map((tag) => (
                        <Badge color="blue">{tag}</Badge>
                      ))}
                    </Flex>
                  </Flex>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </Box>
        </ScrollArea>

        <Flex gap="8" className="m-12">
          <Link to={`/`}>
            <Button size="3">Back to Home</Button>
          </Link>
          <Link to={`/create`}>
            <Button size="3">Join Room</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default JoinRoomPage;

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

// TODO: Data to delete when have data from back
const emptyRooms = [
  {
    id: crypto.randomUUID(),
    name: "Sala Uno",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Dos",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Tres",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Cuatro",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Cinco",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Seis",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Siete",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Ocho",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Nueve",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Diez",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Once",
    tags: ["html", "css", "python", "ruby"],
  },
  {
    id: crypto.randomUUID(),
    name: "Sala Doce",
    tags: ["html", "css", "python", "ruby"],
  },
];

const JoinRoom = () => {
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
              {emptyRooms.map(({ id, name, tags }) => (
                <RadioCards.Item value={`${id}`}>
                  <Flex direction="column" gap="2" width="100%">
                    <Text weight="bold">{name}</Text>
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

        <Button size="3">Join Room</Button>
      </Flex>
    </Container>
  );
};

export default JoinRoom;

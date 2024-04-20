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

import { rooms } from "@/mock/rooms";

const emptyRooms = rooms.filter((room) => room.users.length < 4);

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

        <Heading>Available rooms</Heading>
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 380 }}>
          <Box p="2" pr="8">
            <RadioCards.Root
              defaultValue="1"
              columns={{ initial: "1", sm: "3" }}
            >
              {emptyRooms.map(({ id,  users, quiz }) => (
                <RadioCards.Item value={`${id}`}>
                  <Flex direction="column" gap="2" width="100%">
                    <Flex justify="between">
                      <Text weight="bold">{quiz.name}</Text>
                      <Text>{users.length}/4</Text>
                    </Flex>
                    <Badge color="blue">{quiz.name}</Badge>
                  </Flex>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </Box>
        </ScrollArea>

        <Flex gap="8" className="m-12">
          <Link to={`/`}>
            <Button size="3">Back to home</Button>
          </Link>
          <Link to={`/create`}>
            <Button size="3">Join room</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default JoinRoomPage;

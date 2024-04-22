import { Avatar, Flex, Text } from "@radix-ui/themes";
import DefaultAvatar from "../../assets/dafault-avatar.svg";

interface userPorps {
  name: string;
  img?: string;
}

export default function User({ name, img }: userPorps) {
  return (
    <Flex direction="column" align="center">
      <Avatar src={img || DefaultAvatar} size="6" fallback="A" />
      <Text size="3" weight="medium">
        {name}
      </Text>
    </Flex>
  );
}

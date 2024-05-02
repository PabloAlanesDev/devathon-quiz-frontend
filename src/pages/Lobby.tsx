import User from "@/components/ui/User";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";

export default function Lobby() {
  return (
    <Flex
      justify="center"
      align="center"
      gap="5"
      direction="column"
      className="h-[85vh]"
    >
      <Grid columns={{ initial: "2", md: "4" }} rows="1" gap="7" width="auto">
        <User name="User" />
        <User name="User" />
        <User name="User" />
        <User name="User" />
      </Grid>
      <Text size="3" weight="medium">
        Esperando más jugadores...
      </Text>
      <Flex align="center" justify="between" width="200px" mt="7">
        <Button radius="full" size="3" variant="solid" color="red">
          Salir
        </Button>
        <Button
          className="cursor-pointer"
          radius="full"
          size="3"
          variant="solid"
          color="blue"
        >
          Iniciar partida
        </Button>
      </Flex>
    </Flex>
  );
}

import { RadioGroup, Flex, Heading, Box } from "@radix-ui/themes";

// TODO: Mock data delete after
const topics = ["HTML", "CSS", "Python", "Ruby", "Git", "Sass", "Tailwind"];

const TopicSelector = () => {
  return (
    <Flex direction="column" gap="4">
      <Heading align="center">Topic Selector</Heading>

      <Box p="4" className="border rounded-lg h-full">
        <RadioGroup.Root defaultValue="HTML" name="topics">
          {topics.map((topic) => (
            <RadioGroup.Item value={topic} key={topic}>{topic}</RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </Box>
    </Flex>
  );
};

export default TopicSelector;

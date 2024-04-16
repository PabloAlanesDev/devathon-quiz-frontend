import { CheckboxGroup, Flex, Heading, Box } from "@radix-ui/themes";

// TODO: Data to delete when have back data
const topics = ["HTML", "CSS", "Python", "Ruby", "Git", "Sass", "Tailwind"];

const TopicSelector = () => {
  return (
    <Flex direction="column" gap="4">
      <Heading align="center">Topic Selector</Heading>

      <Box p="4" className="border rounded-lg h-full">
        <CheckboxGroup.Root size="3">
          {topics.map((topic) => (
            <CheckboxGroup.Item value={`${topic}`} key={`${topic}`}>
              {topic}
            </CheckboxGroup.Item>
          ))}
        </CheckboxGroup.Root>
      </Box>
    </Flex>
  );
};

export default TopicSelector;

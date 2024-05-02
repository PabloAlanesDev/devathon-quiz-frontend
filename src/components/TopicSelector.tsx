import { RadioGroup, Flex, Heading, Box } from "@radix-ui/themes";

// TODO: Mock data delete after
const topics = [
  "HTML",
  "CSS",
  "Python",
  "Ruby",
  "Git",
  "Sass",
  "Tailwind",
  "Bootstrap",
  "Go",
  "TypeScript",
  "JavaScript",
  "Java",
  "Figma",
];

const TopicSelector = ({ setTopic }) => {
  return (
    <Flex direction="column" gap="4">
      <Heading align="center">Selector de temática</Heading>

      <Box p="4" className="border rounded-lg h-full">
        <RadioGroup.Root defaultValue="HTML" name="topics">
          {topics.map((topic) => (
            <RadioGroup.Item
              value={topic}
              onClick={(event) => setTopic(event.target.value)}
              key={topic}
            >
              {topic}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </Box>
    </Flex>
  );
};

export default TopicSelector;

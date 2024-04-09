import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./TopicSelector.css";
import { useState } from "react";

// TODO: Delete when have data from back
const topics = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Ruby",
  "C++",
  "Git",
  "MarkDown",
  "TypeScript",
  "Go",
  "Kotlin",
];

const TopicSelector = () => {
  const [checkedTopics, setCheckedTopics] = useState([]);

  const handleTopics = (checked: boolean | string, topic: string) => {
    const newTopics = checked
      ? [...checkedTopics, topic]
      : checkedTopics.filter((el) => el !== topic);

    setCheckedTopics(newTopics);
  };

  return (
    <form className="border bg-slate-900 p-4 rounded-lg">
      <div className="flex flex-col gap-4 items-start">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center">
            <Checkbox.Root
              className="CheckboxRoot"
              onCheckedChange={(checked) => handleTopics(checked, topic)}
              id={topic}
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="Label" htmlFor={topic}>
              {topic}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default TopicSelector;

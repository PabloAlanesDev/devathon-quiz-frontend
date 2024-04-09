import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./TopicSelector.css";

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

const TopicSelector = () => (
  <form className="border bg-slate-900 p-4 rounded-lg">
    <div className="flex flex-col gap-4 items-start">
      {topics.map((topic) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox.Root className="CheckboxRoot" id="c1">
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="Label" htmlFor="c1">
            {topic}
          </label>
        </div>
      ))}
    </div>
  </form>
);

export default TopicSelector;

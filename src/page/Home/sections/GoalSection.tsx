import Container from "../../../components/Container";
import Dot from "../../../components/ui/Dot";

const goals = [
  "Be an Exceptional Software Engineer at",
  "Utilize my skills to solve problems to better mankind",
  "Build and showcase a variety of personal and professional projects",
  "Contribute to open source projects to gain experience and recognition",
  "Actively join forums, attend meetups, and participate in developer communities.",
];

const GoalSection = () => {
  return (
    <Container id="goals" className="items-start">
      <h2 className="font-josefin text-3xl font-light">
        My Goals
        <Dot />
      </h2>

      <ul className="list-inside list-disc space-y-4 leading-7 marker:text-primary-500">
        {goals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Container>
  );
};
export default GoalSection;

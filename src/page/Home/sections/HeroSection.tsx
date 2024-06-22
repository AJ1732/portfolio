import Container from "../../../components/Container";
import Reveal from "../../../components/anim/Reveal";
import profile from "../../../assets/profile.jpg";

const HeroSection = () => {
  return (
    <Container className="justify-center md:flex-row md:justify-start md:gap-16 lg:gap-24">
      <figure>
        <Reveal>
          <img
            // src={profile}
            className="max-h-80 max-w-80 rounded-lg bg-zinc-800 object-cover"
            alt="Slack Profile Image of Osezele Iboi"
          />
        </Reveal>
      </figure>

      <header className="space-y-2 text-center">
        <Reveal>
          <h1
            data-testid="slackUserName"
            className="font-bebas text-5xl tracking-wider"
          >
            Osezele Iboi
          </h1>
        </Reveal>

        <Reveal>
          <h2 data-testid="myTrack" className="text-primary-500">
            Software Engineer <span className="text-white">&#x2022; </span>{" "}
            Frontend
          </h2>
        </Reveal>
      </header>
    </Container>
  );
};
export default HeroSection;

import Container from "../../../components/Container";
import Reveal from "../../../components/anim/Reveal";
import profile from "../../../assets/profile.jpg";
import Tile from "../../../components/ui/Tile";

const HeroSection = () => {
  const tiles = new Array(242).fill(1, 0, 239);

  return (
    <Container className="relative">
      {/* GRID BACKGROUND */}
      <div className="grid h-dvh w-full grid-cols-12 flex-wrap justify-center overflow-y-clip">
        {tiles.map((tile) => (
          <Tile key={tile} />
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="pointer-events-none absolute inset-0 z-10 flex size-full flex-col items-center justify-center gap-4 md:flex-row md:gap-16 lg:gap-24">
        <figure className="w-80 h-96 bg-zinc-800/80 rounded-lg shadow-aura transition-all duration-500 hover:shadow-aura-l">
          <Reveal>
            <img
              src={profile}
              className="w-80 h-96 rounded-lg object-cover"
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
      </div>
    </Container>
  );
};
export default HeroSection;

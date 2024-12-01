import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
        background: {
          color: {
            value: "#000000",
          },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;

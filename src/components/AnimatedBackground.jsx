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
        fullScreen: {
          enable: true, // Ensures full background coverage
          zIndex: -1, // Keeps it behind other elements
        },
        particles: {
          number: {
            value: 80, // Increase particle count
            density: {
              enable: true,
              value_area: 800, // Particles distributed over a wide area
            },
          },
          color: {
            value: ["#ffffff", "#00ff99", "#ff0066"], // Multiple colors for vibrancy
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.7,
            random: true, // Varied opacity for depth
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Connects particles on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Adds particles on click
            },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4, // Add 4 particles on click
            },
          },
        },
        background: {
          color: {
            value: "#0d1b2a", // A deep, visually appealing color
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;

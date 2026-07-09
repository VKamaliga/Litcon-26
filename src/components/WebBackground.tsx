import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function WebBackground() {
  return (
    <Particles
      id="tsparticles"
      init={loadSlim}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 70,
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#888",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
    />
  );
}
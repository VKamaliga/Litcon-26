import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function SpiderBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
    el: vantaRef.current,
    THREE,
    color: 0x5c5c5c,
    backgroundColor: 0x000000,
    points: 7,
    maxDistance: 14,
    spacing: 30,
    mouseControls: true,
    touchControls: true,
    });

    return () => {
      effect?.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}

export default SpiderBackground;
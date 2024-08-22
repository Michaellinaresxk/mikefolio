import React from "react";
import { Canvas } from "@react-three/fiber";
import Iphone from "./Spaceship";
import { PresentationControls, Stage } from "@react-three/drei";
const Scene = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PresentationControls>
        <Stage environment="city" intensity={0.8}>
          <Iphone scale={0.5} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Scene;

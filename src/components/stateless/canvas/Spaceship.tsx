import { useAnimations, useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useEffect, useRef, useState } from "react";
import React from "react";

// useGLTF.preload("/public/spaceship.glb");

const Spaceship = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/public/spaceship.glb");

  const { actions, clips } = useAnimations(animations, scene);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (group.current) {
      // Update rotation based on scroll
      group.current.rotation.y = scrollY * 0.01;

      // Update position to move to the right as it rotates
      group.current.position.x = scrollY * 0.02;
    }
  }, [scrollY]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Spaceship;

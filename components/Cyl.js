"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./style.css";
import { Bloom, ToneMapping } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
const Cyl = () => {
  return (
    <Canvas flat camera={{ fov: 23 }}>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <CylMesh />
      <EffectComposer>
        alpha={true}
      <Bloom
        mipmapBlur // A higher value results in a smoother blur, but at the cost of performance. The provided value will be multiplied by the render target width and height, so a value of 0.5 will result in a 256x256 texture if the main render target is 512x512.
        intensity={4.0} // The bloom intensity.
        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
      />
      </EffectComposer>
    </Canvas>
  );
};

const CylMesh = () => {
  let ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });
  const tex = useTexture("./projects/image.png");
  return (
    <group rotation={[0, 14, 0.5]} translateY={50}>
      <mesh ref={ref}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial map={tex} transparent side={2} />
      </mesh>
    </group>
  );
};

export default Cyl;

"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

function ClockModel() {
  const obj = useLoader(OBJLoader, "/clock.obj");

  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({ color: "orange" });
      }
    });
  }, [obj]);

  return <primitive object={obj} scale={0.001} position={[0, 0, 0]} />;
}

export default function Test3D() {
  return (
    <div className="w-full h-[500px]">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <ClockModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

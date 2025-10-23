"use client";

import React, { useRef, useEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";



export default function Model() {
  // make sure the file is here: public/models/orchid.glb
  const { scene } = useGLTF("/models/orchidglb.glb");
  const ref = useRef<THREE.Object3D>(null!);

  // keep it upright and rotate ONLY sideways
  useEffect(() => {
    if (!ref.current) return;
    // most marketplace plants are Y-up already. if yours was Z-up, flip x below (see comment).
    ref.current.rotation.set(0, Math.PI / 8, 0);      // upright
    // if it still looks flat or lying down, use this instead:
    // ref.current.rotation.set(Math.PI / 2, Math.PI / 8, 0);
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.006; // gentle sideways spin
  });

  // ensure it isn't pitch-black materials
  useEffect(() => {
    scene.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (m) {
          m.metalness = Math.min(m.metalness ?? 0, 0.2);
          m.roughness = Math.max(m.roughness ?? 0.6, 0.4);
          if ((m as any).color && (m as any).color.isColor) {
            (m as any).color.offsetHSL(0, 0, 0.15); // nudge brighter
          }
        }
      }
    });
  }, [scene]);

  return (
    // Center auto-centers and fits the model so it won’t be tiny or offscreen
    <Center ref={ref} disableY top={false}>
      {/* scale controls “how big in the hero” — start large and tweak */}
    <primitive object={scene} scale={2.5} position={[0, -1.5, .1]} />
    </Center>
  );
}

// optional: prefetch
useGLTF.preload("/models/orchidglb.glb");

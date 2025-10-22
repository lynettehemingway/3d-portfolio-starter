"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("./model"), { ssr: false });

export default function Scene() {
  return (
    <div className="w-full h-[600px] md:h-[700px]">
      <Canvas
  camera={{ position: [1.0, 1.3, 5.5], fov: 40, near: 0.1, far: 90 }}
  style={{ background: "transparent" }}
>
        {/* bright, soft “studio” lighting */}
        <ambientLight intensity={3.5} />
        <directionalLight position={[3, 4, 5]} intensity={4} />
        <pointLight position={[0, 1, 2]} intensity={5} />
        <Environment preset="studio" intensity={1.2} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

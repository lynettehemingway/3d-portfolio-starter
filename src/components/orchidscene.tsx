// "use client";

// import dynamic from "next/dynamic";
// import React, { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";
// import Model from "./model";

// // turn off ssr for the canvas to avoid "document is not defined"
// const Canvas = dynamic(
//   () => import("@react-three/fiber").then(mod => mod.Canvas),
//   { ssr: false }
// );

// export default function OrchidScene() {
//   return (
//     <div style={{ width: "100%", height: 500 }}>
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//         <Suspense fallback={null}>
//           <Model />
//           <OrbitControls enableDamping />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

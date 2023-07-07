import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, zoomFactor }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.7 / zoomFactor : 0.75 / zoomFactor}
      position={isMobile ? [0, -3 / zoomFactor, -2.2 / zoomFactor] : [0, -3.25 / zoomFactor, -1.5 / zoomFactor]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const zoomFactor = 1;

  const calculateCameraPosition = () => {
    const initialPosition = [100, 200, 500];
    const adjustedPosition = initialPosition.map((coord) => coord / zoomFactor);
    return adjustedPosition;
  };

  return (
    <Canvas
      frameloop="demand"
      angle={0.7}
      shadows
      dpr={[1, 2]}
      camera={{ position: calculateCameraPosition(), fov: isMobile ? 30 : 12 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: "absolute",
        left: isMobile ? "50%" : "30%",
        top: "10%",
        width: isMobile ? "100%" : "70%",
        transform: isMobile ? "translateX(-50%)" : "none",
        zIndex: isMobile ? 1 : "unset",
      }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
              <Computers isMobile={isMobile} zoomFactor={zoomFactor} />
            </Suspense>
      
            <Preload all />
          </Canvas>
  );
};

export default ComputersCanvas;
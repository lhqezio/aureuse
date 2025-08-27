'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}

const MorphingShape = ({ position, color, speed = 1, scale = 1 }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current += state.clock.getDelta() * speed;
      meshRef.current.rotation.x = Math.sin(timeRef.current) * 0.3;
      meshRef.current.rotation.y = Math.cos(timeRef.current * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(timeRef.current * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const AnimatedBackground = () => {
  const shapes: ShapeProps[] = useMemo(() => [
    { position: [-3, 0, -2], color: '#00d4ff', speed: 0.5, scale: 1.2 },
    { position: [3, 1, -3], color: '#00ffff', speed: 0.8, scale: 0.8 },
    { position: [0, -1, -4], color: '#0099ff', speed: 0.6, scale: 1.5 },
    { position: [-2, 2, -1], color: '#00b3ff', speed: 0.7, scale: 0.9 },
    { position: [2, -2, -2], color: '#0088ff', speed: 0.4, scale: 1.1 },
  ], []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {shapes.map((shape, index) => (
          <MorphingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
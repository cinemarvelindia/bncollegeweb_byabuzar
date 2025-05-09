
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleCloud = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(
            Array(2000)
              .fill(0)
              .flatMap(() => [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
              ])
          )}
          count={2000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        sizeAttenuation={true}
        color="#1a3a8f"
        transparent={true}
        opacity={0.5}
      />
    </points>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    }
  });
  
  return (
    <Sphere ref={mesh} position={position} args={[0.5, 16, 16]} castShadow>
      <meshStandardMaterial 
        color="#d4af37" 
        metalness={0.5}
        roughness={0.2} 
        opacity={0.7} 
        transparent
      />
    </Sphere>
  );
};

interface ThreeJSBackgroundProps {
  className?: string;
}

const ThreeJSBackground: React.FC<ThreeJSBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 z-0 opacity-70 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <ParticleCloud />
        <FloatingSphere position={[-2, 0, 0]} />
        <FloatingSphere position={[2, 0, 0]} />
        <FloatingSphere position={[0, 2, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;

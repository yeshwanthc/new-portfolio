import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Icon = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
    <mesh position={position}>
      <octahedronGeometry args={[0.2]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  </Float>
);

export const FloatingIcons = () => (
  <div className="fixed inset-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
  
      <Icon position={[-2, 2, 0]} color="#9333ea" />
      <Icon position={[2, -2, -2]} color="#3b82f6" />
      <Icon position={[3, 2, -4]} color="#ec4899" />
      <Icon position={[-3, -2, -6]} color="#8b5cf6" />
      <Icon position={[0, 3, -8]} color="#6366f1" />
    </Canvas>
  </div>
);

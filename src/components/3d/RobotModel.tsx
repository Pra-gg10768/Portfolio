import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Cylinder, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface RobotModelProps {
  position?: [number, number, number];
}

const RobotModel: React.FC<RobotModelProps> = ({ position = [0, 0, 0] }) => {
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const antennaRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const [hovering, setHovering] = useState(false);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Floating animation
    if (robotRef.current) {
      robotRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.1;
      robotRef.current.rotation.x = Math.sin(t * 0.3) * 0.01;
      robotRef.current.rotation.z = Math.sin(t * 0.25) * 0.01;
    }

    if (antennaRef.current) {
      (antennaRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        hovering ? 1.5 + Math.sin(t * 8) * 0.5 : 0.5;
    }

    // Eye tracking
    const lookAtX = mouse.x * viewport.width * 0.1;
    const lookAtY = mouse.y * viewport.height * 0.1;
    const lookTarget = new THREE.Vector3(lookAtX, lookAtY, 1);

    [leftEyeRef, rightEyeRef].forEach((eye) => {
      if (eye.current) {
        eye.current.lookAt(lookTarget);
      }
    });
  });

  return (
    <motion.group
      ref={robotRef}
      position={position}
      animate={{ rotateY: hovering ? Math.PI * 2 : 0 }}
      transition={{ duration: 0.5 }}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
    >
      {/* Ambient particles */}
      <Sparkles
        count={40}
        scale={[2, 3, 2]}
        size={2}
        speed={0.4}
        color="#60a5fa"
        opacity={0.7}
        position={[0, 1, 0]}
      />

      {/* Head */}
      <motion.group ref={headRef} position={[0, 1.5, 0]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </Sphere>

        {/* Eyes */}
        <Sphere ref={rightEyeRef} args={[0.1, 32, 32]} position={[0.2, 0.1, 0.4]}>
          <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={1.5} />
        </Sphere>
        <Sphere ref={leftEyeRef} args={[0.1, 32, 32]} position={[-0.2, 0.1, 0.4]}>
          <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={1.5} />
        </Sphere>

        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.3, 16]} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Sphere ref={antennaRef} args={[0.04, 16, 16]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </Sphere>

        {/* Mouth */}
        <Box args={[0.3, 0.05, 0.02]} position={[0, -0.3, 0.4]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>

        {/* Ears */}
        {[1, -1].map((dir) => (
          <Cylinder
            key={dir}
            args={[0.05, 0.05, 0.2, 16]}
            rotation={[0, 0, Math.PI / 2]}
            position={[dir * 0.5, 0.1, 0]}
          >
            <meshStandardMaterial color="#9ca3af" />
          </Cylinder>
        ))}
      </motion.group>

      {/* Neck */}
      <Cylinder args={[0.1, 0.1, 0.2, 16]} position={[0, 1.25, 0]}>
        <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
      </Cylinder>

      {/* Body */}
      <motion.group position={[0, 0.5, 0]}>
        <Box args={[0.8, 1.2, 0.6]}>
          <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.3} />
        </Box>

        {/* Chest Light */}
        <Box args={[0.3, 0.3, 0.05]} position={[0, 0.2, 0.325]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#14b8a6"
            emissiveIntensity={hovering ? 2 : 0.5}
          />
        </Box>

        {/* Control Panel */}
        <Box args={[0.6, 0.3, 0.05]} position={[0, -0.2, 0.325]}>
          <meshStandardMaterial color="#1e40af" metalness={0.5} roughness={0.5} />
        </Box>

        {/* Buttons */}
        {[-0.2, 0, 0.2].map((x, idx) => (
          <Sphere key={idx} args={[0.04, 16, 16]} position={[x, -0.2, 0.35]}>
            <meshStandardMaterial
              color={['#ef4444', '#facc15', '#22c55e'][idx]}
            />
          </Sphere>
        ))}
      </motion.group>

      {/* Arms */}
      {[
        { side: 'right', x: 0.5, zRot: -0.5 },
        { side: 'left', x: -0.5, zRot: 0.5 },
      ].map(({ side, x, zRot }) => (
        <motion.group
          key={side}
          position={[x, 0.6, 0]}
          animate={{ rotateZ: hovering ? zRot : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cylinder args={[0.08, 0.08, 0.8, 16]} position={[0, -0.4, 0]}>
            <meshStandardMaterial color="#4b5563" metalness={0.7} roughness={0.3} />
          </Cylinder>
          <Sphere args={[0.12, 16, 16]} position={[0, -0.8, 0]}>
            <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
          </Sphere>
        </motion.group>
      ))}

      {/* Legs */}
      {[
        { side: 'right', x: 0.25, xRot: 0.2 },
        { side: 'left', x: -0.25, xRot: -0.2 },
      ].map(({ side, x, xRot }) => (
        <motion.group
          key={side}
          position={[x, -0.6, 0]}
          animate={{ rotateX: hovering ? xRot : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cylinder args={[0.1, 0.1, 0.8, 16]} position={[0, -0.4, 0]}>
            <meshStandardMaterial color="#4b5563" metalness={0.7} roughness={0.3} />
          </Cylinder>
          <Box args={[0.2, 0.1, 0.3]} position={[0, -0.85, 0.05]}>
            <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.3} />
          </Box>
        </motion.group>
      ))}
    </motion.group>
  );
};

export default RobotModel;

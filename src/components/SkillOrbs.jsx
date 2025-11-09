import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const Word = ({ children, ...props }) => {
  const color = new THREE.Color();
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 1.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate color
    ref.current.material.color.lerp(color.set(props.hovered ? '#00ffff' : 'white'), 0.1);
  });

  return <Text ref={ref} children={children} {...props} {...fontProps} />;
};

const Constellation = ({ skills, count = 8, radius = 20 }) => {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Memoize the positions and connections
  const { words, connections } = useMemo(() => {
    const tempWords = [];
    const tempPoints = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    // Create skill points
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j));
        tempPoints.push(pos);
        tempWords.push({ pos, text: skills[Math.floor(Math.random() * skills.length)].name });
      }
    }

    // Create connections
    const tempConnections = [];
    for (let i = 0; i < tempPoints.length; i++) {
      for (let j = i + 1; j < tempPoints.length; j++) {
        const dist = tempPoints[i].distanceTo(tempPoints[j]);
        if (dist < radius / (count / 2)) { // Adjust this threshold for more/fewer lines
          tempConnections.push(tempPoints[i], tempPoints[j]);
        }
      }
    }

    return { words: tempWords, connections: tempConnections };
  }, [skills, count, radius]);

  useFrame(() => {
    // Animate lines, maybe? (optional)
  });

  return (
    <>
      {words.map(({ pos, text }, index) => (
        <Word key={index} position={pos} children={text} />
      ))}
      <lineSegments ref={linesRef} geometry={new THREE.BufferGeometry().setFromPoints(connections)}>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
};

const SkillOrbs = ({ skills }) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Constellation skills={skills} count={8} radius={20} />
      <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} />
    </Canvas>
  );
};

export default SkillOrbs;

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const SkillOrbs = ({ skills }) => {
  const Word = ({ children, ...props }) => {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    useFrame(({ camera }) => {
      ref.current.quaternion.copy(camera.quaternion)
    })
    return <Text ref={ref} children={children} color={color} {...props} {...fontProps} />
  }

  const Cloud = ({ count = 4, radius = 20 }) => {
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (count + 1)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++) {
          const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j))
          const label = skills && skills.length ? skills[Math.floor(Math.random() * skills.length)].name : 'Skill'
          temp.push([pos, label])
        }
      return temp
    }, [count, radius, skills])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
  }

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} />
      <OrbitControls />
    </Canvas>
  );
};

export default SkillOrbs;

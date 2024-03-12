import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Macbook(props) {
  const { nodes, materials } = useGLTF("/models/macbook.glb");
  const texture = useTexture('/img/Background.jpg');

  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.413, -11.346]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.matte.geometry}
          material={materials.matte}>
            <meshLambertMaterial map={texture} toneMapped={false} />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back_1.geometry}
          material={materials.blackmatte}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back_2.geometry}
          material={materials.aluminium}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1.geometry}
        material={materials.aluminium}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_2.geometry}
        material={materials.blackmatte}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useRouter } from 'next/navigation';
import {useFrame} from "@react-three/fiber";

export function Miles(props) {
  const { scene} = useGLTF("/assets/spiderman.glb");
  const { nodes, materials } = useGLTF("/assets/spiderman.glb");
  useFrame((state, delta) => (scene.rotation.y += delta))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_n3d.geometry}
        material={materials.MAINTEXTURE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Face_n3d.geometry}
        material={materials.FACE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Neck_n3d.geometry}
        material={materials.NECK}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_n3d.geometry}
        material={materials.HAIR}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes_n3d.geometry}
        material={materials.EYES}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teeth_n3d.geometry}
        material={materials.HAIR}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue_n3d.geometry}
        material={materials.TONGUE}
      />
    </group>
  );
}

useGLTF.preload("/assets/spiderman.glb");

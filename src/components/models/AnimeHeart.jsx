import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Heart(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/AnimeHeart.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="db7c7a68b6754caebc97bd6a24a88550fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Elaina" rotation={[0.399, 0, 0]} scale={100} />
                <group
                  name="Heart"
                  position={[-1.724, 273.206, -189.384]}
                  rotation={[-0.355, 0.079, 0.021]}
                  scale={81.349}
                >
                  <mesh
                    name="Heart_Heart_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Heart_Heart_0.geometry}
                    material={materials.Heart}
                  />
                </group>
                <group
                  name="Hair"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="metarig004"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_9">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Face_Body}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Outline}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Hair}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Hair_Outline}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_114"
                      geometry={nodes.Object_114.geometry}
                      material={materials.Clothes}
                      skeleton={nodes.Object_114.skeleton}
                    />
                    <skinnedMesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials.Clothes_Outline}
                      skeleton={nodes.Object_115.skeleton}
                    />
                    <group
                      name="Object_11"
                      rotation={[0.399, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_15"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_113"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Elaina_Clothes"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/AnimeHeart.glb");

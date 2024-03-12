import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Anime(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/WalkingAnime.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="5af8b5efda8c4aaaa105cb8a557da94cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="my_autorig_actor" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_150"
                      geometry={nodes.Object_150.geometry}
                      material={materials.Material_001}
                      skeleton={nodes.Object_150.skeleton}
                    />
                    <skinnedMesh
                      name="Object_151"
                      geometry={nodes.Object_151.geometry}
                      material={materials.Material_002}
                      skeleton={nodes.Object_151.skeleton}
                    />
                    <group name="Object_149" rotation={[-Math.PI / 2, 0, 0]} />
                  </group>
                </group>
                <group name="mesh_id175" rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/WalkingAnime.glb");

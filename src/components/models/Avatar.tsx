import React, { useEffect, useRef } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

export function Avatar(props) {
  const group = useRef();
  const { materials } = useGLTF("/assets/avatar.glb");
  const { nodes } = useGLTF("/assets/blank.glb");
  const { animations: fallingAnimation } = useFBX("/assets/animation.fbx");
  const { animations: wavingAnimation } = useFBX("/assets/wave.fbx");
  const { animations: dancingAnimation } = useFBX("/assets/dance.fbx");

  fallingAnimation[0].name = "Falling";
  wavingAnimation[0].name = "Waving";
  dancingAnimation[0].name = "Dancing";

  const { actions: fallingAction, mixer: fallingMixer } = useAnimations(fallingAnimation, group);
  const { actions: wavingAction, mixer: wavingMixer } = useAnimations(wavingAnimation, group);
  const { actions: dancingAction } = useAnimations(dancingAnimation, group);

  useEffect(() => {
    fallingAction["Falling"].reset().setLoop(THREE.LoopOnce).fadeIn(0.5).play(); 
    fallingMixer.addEventListener('finished', () => {
      fallingAction["Falling"].reset().fadeOut(0.5);
      wavingAction["Waving"].reset().setLoop(THREE.LoopRepeat,2).fadeIn(0.5).play();
      wavingMixer.addEventListener('finished', () => {
        wavingAction["Waving"].reset().fadeOut(0.5);
        wavingAction["Waving"].reset().setLoop(THREE.LoopRepeat).fadeOut(0.5).play();
        dancingAction["Dancing"].reset().fadeIn(0.5).play();
      })
    })
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature"  scale={0.01}>
          <group name="Arms">
            <skinnedMesh
              name="R_arm_geo_body_mat_0005"
              geometry={nodes.R_arm_geo_body_mat_0005.geometry}
              material={materials.outline_mat1}
              skeleton={nodes.R_arm_geo_body_mat_0005.skeleton}
            />
            <skinnedMesh
              name="R_arm_geo_body_mat_0005_1"
              geometry={nodes.R_arm_geo_body_mat_0005_1.geometry}
              material={materials.body_mat}
              skeleton={nodes.R_arm_geo_body_mat_0005_1.skeleton}
            />
          </group>
          <group name="Head">
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001"
              geometry={nodes.L_brow_geo_hair_mat_0001.geometry}
              material={materials.outline_mat1}
              skeleton={nodes.L_brow_geo_hair_mat_0001.skeleton}
            />
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001_1"
              geometry={nodes.L_brow_geo_hair_mat_0001_1.geometry}
              material={materials.body_mat}
              skeleton={nodes.L_brow_geo_hair_mat_0001_1.skeleton}
            />
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001_2"
              geometry={nodes.L_brow_geo_hair_mat_0001_2.geometry}
              material={materials.hair_mat}
              skeleton={nodes.L_brow_geo_hair_mat_0001_2.skeleton}
            />
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001_3"
              geometry={nodes.L_brow_geo_hair_mat_0001_3.geometry}
              material={materials.cornea_mat}
              skeleton={nodes.L_brow_geo_hair_mat_0001_3.skeleton}
            />
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001_4"
              geometry={nodes.L_brow_geo_hair_mat_0001_4.geometry}
              material={materials.eyes_mat}
              skeleton={nodes.L_brow_geo_hair_mat_0001_4.skeleton}
            />
            <skinnedMesh
              name="L_brow_geo_hair_mat_0001_5"
              geometry={nodes.L_brow_geo_hair_mat_0001_5.geometry}
              material={materials.face_mat}
              skeleton={nodes.L_brow_geo_hair_mat_0001_5.skeleton}
            />
          </group>
          <group name="Legs">
            <skinnedMesh
              name="L_leg_geo_body_mat_0"
              geometry={nodes.L_leg_geo_body_mat_0.geometry}
              material={materials.lower_body_mat}
              skeleton={nodes.L_leg_geo_body_mat_0.skeleton}
            />
            <skinnedMesh
              name="L_leg_geo_body_mat_0_1"
              geometry={nodes.L_leg_geo_body_mat_0_1.geometry}
              material={materials.outline_mat1}
              skeleton={nodes.L_leg_geo_body_mat_0_1.skeleton}
            />
            <skinnedMesh
              name="L_leg_geo_body_mat_0_2"
              geometry={nodes.L_leg_geo_body_mat_0_2.geometry}
              material={materials.body_mat}
              skeleton={nodes.L_leg_geo_body_mat_0_2.skeleton}
            />
          </group>
          <group name="Shirt">
            <skinnedMesh
              name="outline_outline_mat1_0002"
              geometry={nodes.outline_outline_mat1_0002.geometry}
              material={materials.upper_body_mat}
              skeleton={nodes.outline_outline_mat1_0002.skeleton}
            />
            <skinnedMesh
              name="outline_outline_mat1_0002_1"
              geometry={nodes.outline_outline_mat1_0002_1.geometry}
              material={materials.outline_mat1}
              skeleton={nodes.outline_outline_mat1_0002_1.skeleton}
            />
          </group>
          <group name="Shorts">
            <skinnedMesh
              name="braces_geo_upper_body_mat_0"
              geometry={nodes.braces_geo_upper_body_mat_0.geometry}
              material={materials.upper_body_mat}
              skeleton={nodes.braces_geo_upper_body_mat_0.skeleton}
            />
            <skinnedMesh
              name="braces_geo_upper_body_mat_0_1"
              geometry={nodes.braces_geo_upper_body_mat_0_1.geometry}
              material={materials.lower_body_mat}
              skeleton={nodes.braces_geo_upper_body_mat_0_1.skeleton}
            />
            <skinnedMesh
              name="braces_geo_upper_body_mat_0_2"
              geometry={nodes.braces_geo_upper_body_mat_0_2.geometry}
              material={materials.outline_mat1}
              skeleton={nodes.braces_geo_upper_body_mat_0_2.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/blank.glb");

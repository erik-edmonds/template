import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Classroom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/ClassroomAnime.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="abd016b8024042979a282043fedb7708fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Torso_Eye_L"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Map_Platform"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Map_Platform_Map_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Map_Platform_Map_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Map_Wall"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Map_Wall_Map_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Map_Wall_Map_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Map_Blackboard01"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Map_Blackboard01_Map_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Map_Blackboard01_Map_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Map_Blackboard02"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Map_Blackboard02_Map_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Map_Blackboard02_Map_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="char_grp"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="rig">
                    <group name="Object_15">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_18"
                        geometry={nodes.Object_18.geometry}
                        material={materials.material_1}
                        skeleton={nodes.Object_18.skeleton}
                      />
                      <skinnedMesh
                        name="Object_836"
                        geometry={nodes.Object_836.geometry}
                        material={materials.Body}
                        skeleton={nodes.Object_836.skeleton}
                      />
                      <skinnedMesh
                        name="Object_837"
                        geometry={nodes.Object_837.geometry}
                        material={materials.Body_OutLine}
                        skeleton={nodes.Object_837.skeleton}
                      />
                      <skinnedMesh
                        name="Object_839"
                        geometry={nodes.Object_839.geometry}
                        material={materials.Body}
                        skeleton={nodes.Object_839.skeleton}
                      />
                      <skinnedMesh
                        name="Object_840"
                        geometry={nodes.Object_840.geometry}
                        material={materials.Body_OutLine}
                        skeleton={nodes.Object_840.skeleton}
                      />
                      <skinnedMesh
                        name="Object_842"
                        geometry={nodes.Object_842.geometry}
                        material={materials.material_1}
                        skeleton={nodes.Object_842.skeleton}
                      />
                      <skinnedMesh
                        name="Object_844"
                        geometry={nodes.Object_844.geometry}
                        material={materials.material_1}
                        skeleton={nodes.Object_844.skeleton}
                      />
                      <skinnedMesh
                        name="Object_846"
                        geometry={nodes.Object_846.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_846.skeleton}
                      />
                      <skinnedMesh
                        name="Object_847"
                        geometry={nodes.Object_847.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_847.skeleton}
                      />
                      <skinnedMesh
                        name="Object_849"
                        geometry={nodes.Object_849.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_849.skeleton}
                      />
                      <skinnedMesh
                        name="Object_850"
                        geometry={nodes.Object_850.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_850.skeleton}
                      />
                      <skinnedMesh
                        name="Object_852"
                        geometry={nodes.Object_852.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_852.skeleton}
                      />
                      <skinnedMesh
                        name="Object_853"
                        geometry={nodes.Object_853.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_853.skeleton}
                      />
                      <skinnedMesh
                        name="Object_855"
                        geometry={nodes.Object_855.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_855.skeleton}
                      />
                      <skinnedMesh
                        name="Object_856"
                        geometry={nodes.Object_856.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_856.skeleton}
                      />
                      <skinnedMesh
                        name="Object_858"
                        geometry={nodes.Object_858.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_858.skeleton}
                      />
                      <skinnedMesh
                        name="Object_859"
                        geometry={nodes.Object_859.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_859.skeleton}
                      />
                      <skinnedMesh
                        name="Object_861"
                        geometry={nodes.Object_861.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_861.skeleton}
                      />
                      <skinnedMesh
                        name="Object_862"
                        geometry={nodes.Object_862.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_862.skeleton}
                      />
                      <skinnedMesh
                        name="Object_864"
                        geometry={nodes.Object_864.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_864.skeleton}
                      />
                      <skinnedMesh
                        name="Object_865"
                        geometry={nodes.Object_865.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_865.skeleton}
                      />
                      <skinnedMesh
                        name="Object_867"
                        geometry={nodes.Object_867.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_867.skeleton}
                      />
                      <skinnedMesh
                        name="Object_868"
                        geometry={nodes.Object_868.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_868.skeleton}
                      />
                      <skinnedMesh
                        name="Object_870"
                        geometry={nodes.Object_870.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_870.skeleton}
                      />
                      <skinnedMesh
                        name="Object_871"
                        geometry={nodes.Object_871.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_871.skeleton}
                      />
                      <skinnedMesh
                        name="Object_873"
                        geometry={nodes.Object_873.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_873.skeleton}
                      />
                      <skinnedMesh
                        name="Object_874"
                        geometry={nodes.Object_874.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_874.skeleton}
                      />
                      <skinnedMesh
                        name="Object_876"
                        geometry={nodes.Object_876.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_876.skeleton}
                      />
                      <skinnedMesh
                        name="Object_877"
                        geometry={nodes.Object_877.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_877.skeleton}
                      />
                      <skinnedMesh
                        name="Object_879"
                        geometry={nodes.Object_879.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_879.skeleton}
                      />
                      <skinnedMesh
                        name="Object_880"
                        geometry={nodes.Object_880.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_880.skeleton}
                      />
                      <skinnedMesh
                        name="Object_882"
                        geometry={nodes.Object_882.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_882.skeleton}
                      />
                      <skinnedMesh
                        name="Object_883"
                        geometry={nodes.Object_883.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_883.skeleton}
                      />
                      <skinnedMesh
                        name="Object_885"
                        geometry={nodes.Object_885.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_885.skeleton}
                      />
                      <skinnedMesh
                        name="Object_886"
                        geometry={nodes.Object_886.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_886.skeleton}
                      />
                      <skinnedMesh
                        name="Object_888"
                        geometry={nodes.Object_888.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_888.skeleton}
                      />
                      <skinnedMesh
                        name="Object_889"
                        geometry={nodes.Object_889.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_889.skeleton}
                      />
                      <skinnedMesh
                        name="Object_891"
                        geometry={nodes.Object_891.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_891.skeleton}
                      />
                      <skinnedMesh
                        name="Object_892"
                        geometry={nodes.Object_892.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_892.skeleton}
                      />
                      <skinnedMesh
                        name="Object_894"
                        geometry={nodes.Object_894.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_894.skeleton}
                      />
                      <skinnedMesh
                        name="Object_895"
                        geometry={nodes.Object_895.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_895.skeleton}
                      />
                      <skinnedMesh
                        name="Object_897"
                        geometry={nodes.Object_897.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_897.skeleton}
                      />
                      <skinnedMesh
                        name="Object_898"
                        geometry={nodes.Object_898.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_898.skeleton}
                      />
                      <skinnedMesh
                        name="Object_900"
                        geometry={nodes.Object_900.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_900.skeleton}
                      />
                      <skinnedMesh
                        name="Object_901"
                        geometry={nodes.Object_901.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_901.skeleton}
                      />
                      <skinnedMesh
                        name="Object_903"
                        geometry={nodes.Object_903.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_903.skeleton}
                      />
                      <skinnedMesh
                        name="Object_904"
                        geometry={nodes.Object_904.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_904.skeleton}
                      />
                      <skinnedMesh
                        name="Object_906"
                        geometry={nodes.Object_906.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_906.skeleton}
                      />
                      <skinnedMesh
                        name="Object_907"
                        geometry={nodes.Object_907.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_907.skeleton}
                      />
                      <skinnedMesh
                        name="Object_909"
                        geometry={nodes.Object_909.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_909.skeleton}
                      />
                      <skinnedMesh
                        name="Object_910"
                        geometry={nodes.Object_910.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_910.skeleton}
                      />
                      <skinnedMesh
                        name="Object_912"
                        geometry={nodes.Object_912.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_912.skeleton}
                      />
                      <skinnedMesh
                        name="Object_913"
                        geometry={nodes.Object_913.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_913.skeleton}
                      />
                      <skinnedMesh
                        name="Object_915"
                        geometry={nodes.Object_915.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_915.skeleton}
                      />
                      <skinnedMesh
                        name="Object_916"
                        geometry={nodes.Object_916.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_916.skeleton}
                      />
                      <skinnedMesh
                        name="Object_918"
                        geometry={nodes.Object_918.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_918.skeleton}
                      />
                      <skinnedMesh
                        name="Object_919"
                        geometry={nodes.Object_919.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_919.skeleton}
                      />
                      <skinnedMesh
                        name="Object_921"
                        geometry={nodes.Object_921.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_921.skeleton}
                      />
                      <skinnedMesh
                        name="Object_922"
                        geometry={nodes.Object_922.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_922.skeleton}
                      />
                      <skinnedMesh
                        name="Object_924"
                        geometry={nodes.Object_924.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_924.skeleton}
                      />
                      <skinnedMesh
                        name="Object_925"
                        geometry={nodes.Object_925.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_925.skeleton}
                      />
                      <skinnedMesh
                        name="Object_927"
                        geometry={nodes.Object_927.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_927.skeleton}
                      />
                      <skinnedMesh
                        name="Object_928"
                        geometry={nodes.Object_928.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_928.skeleton}
                      />
                      <skinnedMesh
                        name="Object_930"
                        geometry={nodes.Object_930.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_930.skeleton}
                      />
                      <skinnedMesh
                        name="Object_931"
                        geometry={nodes.Object_931.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_931.skeleton}
                      />
                      <skinnedMesh
                        name="Object_933"
                        geometry={nodes.Object_933.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_933.skeleton}
                      />
                      <skinnedMesh
                        name="Object_934"
                        geometry={nodes.Object_934.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_934.skeleton}
                      />
                      <skinnedMesh
                        name="Object_936"
                        geometry={nodes.Object_936.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_936.skeleton}
                      />
                      <skinnedMesh
                        name="Object_937"
                        geometry={nodes.Object_937.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_937.skeleton}
                      />
                      <skinnedMesh
                        name="Object_939"
                        geometry={nodes.Object_939.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_939.skeleton}
                      />
                      <skinnedMesh
                        name="Object_940"
                        geometry={nodes.Object_940.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_940.skeleton}
                      />
                      <skinnedMesh
                        name="Object_942"
                        geometry={nodes.Object_942.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_942.skeleton}
                      />
                      <skinnedMesh
                        name="Object_943"
                        geometry={nodes.Object_943.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_943.skeleton}
                      />
                      <skinnedMesh
                        name="Object_945"
                        geometry={nodes.Object_945.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_945.skeleton}
                      />
                      <skinnedMesh
                        name="Object_946"
                        geometry={nodes.Object_946.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_946.skeleton}
                      />
                      <skinnedMesh
                        name="Object_948"
                        geometry={nodes.Object_948.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_948.skeleton}
                      />
                      <skinnedMesh
                        name="Object_949"
                        geometry={nodes.Object_949.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_949.skeleton}
                      />
                      <skinnedMesh
                        name="Object_951"
                        geometry={nodes.Object_951.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_951.skeleton}
                      />
                      <skinnedMesh
                        name="Object_952"
                        geometry={nodes.Object_952.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_952.skeleton}
                      />
                      <skinnedMesh
                        name="Object_954"
                        geometry={nodes.Object_954.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_954.skeleton}
                      />
                      <skinnedMesh
                        name="Object_955"
                        geometry={nodes.Object_955.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_955.skeleton}
                      />
                      <skinnedMesh
                        name="Object_957"
                        geometry={nodes.Object_957.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_957.skeleton}
                      />
                      <skinnedMesh
                        name="Object_958"
                        geometry={nodes.Object_958.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_958.skeleton}
                      />
                      <skinnedMesh
                        name="Object_960"
                        geometry={nodes.Object_960.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_960.skeleton}
                      />
                      <skinnedMesh
                        name="Object_961"
                        geometry={nodes.Object_961.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_961.skeleton}
                      />
                      <skinnedMesh
                        name="Object_963"
                        geometry={nodes.Object_963.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_963.skeleton}
                      />
                      <skinnedMesh
                        name="Object_964"
                        geometry={nodes.Object_964.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_964.skeleton}
                      />
                      <skinnedMesh
                        name="Object_966"
                        geometry={nodes.Object_966.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_966.skeleton}
                      />
                      <skinnedMesh
                        name="Object_967"
                        geometry={nodes.Object_967.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_967.skeleton}
                      />
                      <skinnedMesh
                        name="Object_969"
                        geometry={nodes.Object_969.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_969.skeleton}
                      />
                      <skinnedMesh
                        name="Object_970"
                        geometry={nodes.Object_970.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_970.skeleton}
                      />
                      <skinnedMesh
                        name="Object_972"
                        geometry={nodes.Object_972.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_972.skeleton}
                      />
                      <skinnedMesh
                        name="Object_973"
                        geometry={nodes.Object_973.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_973.skeleton}
                      />
                      <skinnedMesh
                        name="Object_975"
                        geometry={nodes.Object_975.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_975.skeleton}
                      />
                      <skinnedMesh
                        name="Object_976"
                        geometry={nodes.Object_976.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_976.skeleton}
                      />
                      <skinnedMesh
                        name="Object_978"
                        geometry={nodes.Object_978.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_978.skeleton}
                      />
                      <skinnedMesh
                        name="Object_979"
                        geometry={nodes.Object_979.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_979.skeleton}
                      />
                      <skinnedMesh
                        name="Object_981"
                        geometry={nodes.Object_981.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_981.skeleton}
                      />
                      <skinnedMesh
                        name="Object_982"
                        geometry={nodes.Object_982.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_982.skeleton}
                      />
                      <skinnedMesh
                        name="Object_984"
                        geometry={nodes.Object_984.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_984.skeleton}
                      />
                      <skinnedMesh
                        name="Object_985"
                        geometry={nodes.Object_985.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_985.skeleton}
                      />
                      <skinnedMesh
                        name="Object_987"
                        geometry={nodes.Object_987.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_987.skeleton}
                      />
                      <skinnedMesh
                        name="Object_988"
                        geometry={nodes.Object_988.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_988.skeleton}
                      />
                      <skinnedMesh
                        name="Object_990"
                        geometry={nodes.Object_990.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_990.skeleton}
                      />
                      <skinnedMesh
                        name="Object_991"
                        geometry={nodes.Object_991.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_991.skeleton}
                      />
                      <skinnedMesh
                        name="Object_993"
                        geometry={nodes.Object_993.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_993.skeleton}
                      />
                      <skinnedMesh
                        name="Object_994"
                        geometry={nodes.Object_994.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_994.skeleton}
                      />
                      <skinnedMesh
                        name="Object_996"
                        geometry={nodes.Object_996.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_996.skeleton}
                      />
                      <skinnedMesh
                        name="Object_997"
                        geometry={nodes.Object_997.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_997.skeleton}
                      />
                      <skinnedMesh
                        name="Object_999"
                        geometry={nodes.Object_999.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Object_999.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1000"
                        geometry={nodes.Object_1000.geometry}
                        material={materials.Hair_OutLine}
                        skeleton={nodes.Object_1000.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1002"
                        geometry={nodes.Object_1002.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1002.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1003"
                        geometry={nodes.Object_1003.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1003.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1004"
                        geometry={nodes.Object_1004.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1004.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1006"
                        geometry={nodes.Object_1006.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1006.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1007"
                        geometry={nodes.Object_1007.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1007.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1008"
                        geometry={nodes.Object_1008.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1008.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1010"
                        geometry={nodes.Object_1010.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1010.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1011"
                        geometry={nodes.Object_1011.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1011.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1012"
                        geometry={nodes.Object_1012.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1012.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1014"
                        geometry={nodes.Object_1014.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1014.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1015"
                        geometry={nodes.Object_1015.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1015.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1016"
                        geometry={nodes.Object_1016.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1016.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1018"
                        geometry={nodes.Object_1018.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1018.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1019"
                        geometry={nodes.Object_1019.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1019.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1020"
                        geometry={nodes.Object_1020.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1020.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1022"
                        geometry={nodes.Object_1022.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1022.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1023"
                        geometry={nodes.Object_1023.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1023.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1025"
                        geometry={nodes.Object_1025.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1025.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1026"
                        geometry={nodes.Object_1026.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1026.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1028"
                        geometry={nodes.Object_1028.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1028.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1029"
                        geometry={nodes.Object_1029.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1029.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1031"
                        geometry={nodes.Object_1031.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1031.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1032"
                        geometry={nodes.Object_1032.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1032.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1034"
                        geometry={nodes.Object_1034.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1034.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1035"
                        geometry={nodes.Object_1035.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1035.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1037"
                        geometry={nodes.Object_1037.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1037.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1038"
                        geometry={nodes.Object_1038.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1038.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1039"
                        geometry={nodes.Object_1039.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1039.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1041"
                        geometry={nodes.Object_1041.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1041.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1042"
                        geometry={nodes.Object_1042.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1042.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1044"
                        geometry={nodes.Object_1044.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1044.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1045"
                        geometry={nodes.Object_1045.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1045.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1047"
                        geometry={nodes.Object_1047.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1047.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1048"
                        geometry={nodes.Object_1048.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1048.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1049"
                        geometry={nodes.Object_1049.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1049.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1051"
                        geometry={nodes.Object_1051.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1051.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1052"
                        geometry={nodes.Object_1052.geometry}
                        material={materials.Clothes_B}
                        skeleton={nodes.Object_1052.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1053"
                        geometry={nodes.Object_1053.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1053.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1055"
                        geometry={nodes.Object_1055.geometry}
                        material={materials.Clothes_F}
                        skeleton={nodes.Object_1055.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1056"
                        geometry={nodes.Object_1056.geometry}
                        material={materials.Clothes_OutLine}
                        skeleton={nodes.Object_1056.skeleton}
                      />
                      <group
                        name="Object_17"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_835"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_838"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_841"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_843"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_845"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_848"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_851"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_854"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_857"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_860"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_863"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_866"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_869"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_872"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_875"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_878"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_881"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_884"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_887"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_890"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_893"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_896"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_899"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_902"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_905"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_908"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_911"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_914"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_917"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_920"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_923"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_926"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_929"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_932"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_935"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_938"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_941"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_944"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_947"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_950"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_953"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_956"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_959"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_962"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_965"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_968"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_971"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_974"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_977"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_980"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_983"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_986"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_989"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_992"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_995"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_998"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1001"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1005"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1009"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1013"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1017"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1021"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1024"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1027"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1030"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1033"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1036"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1040"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1043"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1046"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1050"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_1054"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                  </group>
                  <group name="cs_grp">
                    <group
                      name="cs_eyelid2"
                      position={[-1.788, 0.165, -0.029]}
                      scale={0.098}
                    />
                    <group
                      name="cs_jaw_square"
                      position={[2.907, -0.044, 0.461]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.283}
                    />
                    <group
                      name="cs_half_circle"
                      position={[0.03, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.069}
                    />
                    <group
                      name="cs_shoulderr"
                      position={[-0.708, -0.053, 0.672]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={0.085}
                    />
                    <group
                      name="cs_shoulderl"
                      position={[-0.532, -0.053, 0.672]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={0.085}
                    />
                    <group
                      name="cs_square"
                      position={[-5.737, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_base_finger_end"
                      position={[-2.89, -0.053, -0.157]}
                      scale={0.098}
                    />
                    <group
                      name="cs_base_finger"
                      position={[-2.67, -0.053, -0.157]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_head"
                      position={[-5.032, -0.381, 0.81]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_semi_sphere_inv"
                      position={[-0.615, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group
                      name="cs_semi_sphere"
                      position={[-0.648, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group name="cs_fist" position={[7.973, 0, 0]} />
                    <group
                      name="cs_ctrl_ik_solid_blue"
                      position={[5.16, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_ctrl_ik_solid_red"
                      position={[4.963, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_c_eye_offset"
                      position={[-1.617, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_pupil_blue"
                      position={[4.722, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.208}
                    />
                    <group
                      name="cs_solid_pupil_red"
                      position={[4.483, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.215}
                    />
                    <group
                      name="cs_solid_eye_red"
                      position={[3.917, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.215}
                    />
                    <group
                      name="cs_solid_eye_blue"
                      position={[4.156, -0.053, -0.515]}
                      rotation={[0, 0, Math.PI]}
                      scale={0.208}
                    />
                    <group
                      name="cs_user_c_thigh_fkr"
                      position={[4.963, -0.067, -0.508]}
                    />
                    <group
                      name="cs_user_c_thigh_fkl"
                      position={[0.126, -0.001, 0.772]}
                      rotation={[-1.629, 0.01, -0.175]}
                      scale={0.415}
                    />
                    <group
                      name="cs_user_c_leg_fkr"
                      position={[2.476, 0.051, 0.479]}
                    />
                    <group
                      name="cs_user_c_leg_fkl"
                      position={[0.169, -0.015, 0.528]}
                      rotation={[-0.883, 1.317, -0.642]}
                      scale={0.475}
                    />
                    <group
                      name="cs_spine"
                      position={[0, -0.006, 1.075]}
                      rotation={[Math.PI / 2, -0.007, 0]}
                      scale={0.05}
                    />
                    <group
                      name="cs_hand"
                      position={[2.476, 0.051, 0.479]}
                      scale={0.098}
                    />
                    <group
                      name="cs_cube_03"
                      position={[-4.468, -0.381, 0.673]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_box_head"
                      position={[-3.901, -0.381, 0.81]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_cube_02"
                      position={[-3.443, -0.381, 0.873]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.074}
                    />
                    <group
                      name="cs_box"
                      position={[-2.347, -0.053, -0.16]}
                      scale={0.702}
                    />
                    <group
                      name="cs_foot_roll"
                      position={[-1.409, -0.053, -0.157]}
                      scale={0.098}
                    />
                    <group
                      name="cs_footl"
                      position={[1.967, -0.053, 0.472]}
                      scale={0.098}
                    />
                    <group
                      name="cs_jaw"
                      position={[2.449, -0.044, 0.461]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.283}
                    />
                    <group
                      name="cs_cube"
                      position={[-2.803, -0.515, 0.863]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.192}
                    />
                    <group
                      name="cs_cheek_inflate"
                      position={[0.531, -0.053, 0.117]}
                      scale={0.098}
                    />
                    <group
                      name="cs_wire_eyebrow"
                      position={[3.566, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_eyebrow_red"
                      position={[3.081, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_eyebrow_blue"
                      position={[2.679, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_footr"
                      position={[2.067, -0.053, 0.472]}
                      scale={0.098}
                    />
                    <group
                      name="cs_c_eyelid_micro"
                      position={[-1.961, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group
                      name="cs_arrow_03"
                      position={[1.228, -0.044, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_pos"
                      position={[-2.074, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_curve"
                      position={[0.422, -0.053, 0.515]}
                      scale={0.098}
                    />
                    <group
                      name="cs_arrow_cross"
                      position={[2.082, -0.044, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_plane_5"
                      position={[0.803, -0.053, 0.001]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_fk"
                      position={[-1.602, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_foot_fk"
                      position={[-0.083, -0.053, 0.285]}
                      scale={0.098}
                    />
                    <group
                      name="cs_eyelid"
                      position={[-1.785, -0.053, 0.071]}
                      scale={0.098}
                    />
                    <group
                      name="cs_c_eye"
                      position={[-1.785, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group
                      name="cs_arrow"
                      position={[1.025, -0.044, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_arrow_02"
                      position={[1.328, -0.044, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_circle_ik"
                      position={[-0.267, -0.053, -0.113]}
                      rotation={[Math.PI / 2, -1.571, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_plane_4_fill"
                      position={[1.338, -0.053, 0.506]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_04_rot2"
                      position={[-0.689, -0.053, -0.16]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_04_rot"
                      position={[-0.772, -0.053, -0.15]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_05"
                      position={[-0.943, -0.053, -0.16]}
                      scale={0.098}
                    />
                    <group
                      name="cs_triangle_02"
                      position={[0.213, -0.053, 0.948]}
                      rotation={[0, 0, 1.743]}
                      scale={0.172}
                    />
                    <group
                      name="cs_triangle"
                      position={[-0.166, -0.053, 0.935]}
                      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                      scale={0.225}
                    />
                    <group
                      name="cs_plane_4"
                      position={[0.846, -0.053, 0.501]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_squashed"
                      position={[0.531, -0.053, -0.061]}
                      scale={0.098}
                    />
                    <group
                      name="cs_yeux"
                      position={[-1.039, -0.053, 0.462]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_plane_3"
                      position={[0.643, -0.053, 0.001]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_plane_2"
                      position={[-1.064, -0.053, 0.822]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_01"
                      position={[0.03, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_circle_02"
                      position={[0.33, -0.053, -0.078]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_plane_1"
                      position={[0.422, -0.053, 0.285]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_04"
                      position={[-1.265, -0.053, -0.157]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_02"
                      position={[-0.84, -0.053, 0.164]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_03"
                      position={[-0.259, -0.053, 0.156]}
                      scale={0.098}
                    />
                    <group
                      name="cs_torus_01"
                      position={[-1.25, -0.053, 0.174]}
                      scale={0.098}
                    />
                    <group
                      name="cs_sphere"
                      position={[-0.848, -0.053, 0.472]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group
                      name="cs_sphere_dir2"
                      position={[-0.746, -0.053, 0.473]}
                      scale={0.094}
                    />
                    <group
                      name="cs_sphere_dir1"
                      position={[-0.548, -0.053, 0.477]}
                      scale={0.085}
                    />
                    <group
                      name="cs_arrow_twist"
                      position={[5.246, -0.046, 0.308]}
                    />
                    <group
                      name="cs_arrow_cross_solid"
                      position={[-1.203, -0.044, -1.334]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.084}
                    />
                    <group
                      name="cs_pos_solid_eye_offset_blue"
                      position={[-2.583, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.245}
                    />
                    <group
                      name="cs_pos_solid_eye_offset_red"
                      position={[-3.083, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.245}
                    />
                    <group
                      name="cs_solid_arrow_twist_blue"
                      position={[2.266, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_arrow_twist_red"
                      position={[1.859, -0.046, -0.46]}
                      scale={0.25}
                    />
                    <group
                      name="cs_solid_bar_01"
                      position={[-1.916, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_bar_blue"
                      position={[-6.034, -0.231, -0.422]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_bar_red"
                      position={[-4.874, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_01"
                      position={[0.03, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02"
                      position={[0.524, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_blue"
                      position={[0.876, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_green"
                      position={[0.326, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_02_red"
                      position={[0.7, -0.053, -0.515]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_circle_ik_blue"
                      position={[-4.072, -0.053, -0.482]}
                      rotation={[-Math.PI / 2, -1.571, 0]}
                      scale={0.133}
                    />
                    <group
                      name="cs_solid_circle_ik_red"
                      position={[-3.226, -0.053, -0.482]}
                      rotation={[-Math.PI / 2, -1.571, 0]}
                      scale={0.133}
                    />
                    <group
                      name="cs_solid_circle_squashed_blue"
                      position={[0.102, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_circle_squashed_green"
                      position={[-0.429, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_circle_squashed_red"
                      position={[0.65, -0.598, -1.152]}
                      scale={0.374}
                    />
                    <group
                      name="cs_solid_fk_blue"
                      position={[-3.712, -0.053, -0.483]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={0.062}
                    />
                    <group
                      name="cs_solid_fk_red"
                      position={[-2.867, -0.053, -0.483]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={0.062}
                    />
                    <group
                      name="cs_solid_plane_2"
                      position={[-1.176, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_2_blue"
                      position={[-0.633, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_2_red"
                      position={[-0.891, -0.053, -0.498]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.054}
                    />
                    <group
                      name="cs_solid_plane_3"
                      position={[0.977, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_3_blue"
                      position={[1.362, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_3_red"
                      position={[1.153, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_5_blue"
                      position={[1.609, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_plane_5_red"
                      position={[1.523, -0.053, -0.508]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.055}
                    />
                    <group
                      name="cs_solid_torus_04_blue"
                      position={[-2.533, -0.053, -0.478]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_04_red"
                      position={[-2.606, -0.053, -0.478]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_blue"
                      position={[-3.844, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_green"
                      position={[-4.087, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_torus_red"
                      position={[-3.602, -0.053, -1.279]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_triangle"
                      position={[-0.277, -0.053, -0.474]}
                      rotation={[Math.PI / 2, -1.571, 0]}
                      scale={0.225}
                    />
                    <group
                      name="cs_pos_solid"
                      position={[-2.074, -0.053, -1.292]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_blue"
                      position={[-1.964, -0.053, -0.042]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_global"
                      position={[-1.845, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_solid_eye_aim_red"
                      position={[-2.082, -0.053, -0.042]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_eye_aim"
                      position={[-1.554, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_eye_aim_global"
                      position={[-1.715, -0.053, -0.087]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={0.098}
                    />
                    <group
                      name="cs_user_c_skull_01x"
                      position={[0, -0.019, 1.575]}
                      rotation={[-Math.PI / 2, 1.571, 0]}
                      scale={0.058}
                    />
                    <group
                      name="cs_user_c_shoulderl"
                      position={[0.078, -0.064, 1.396]}
                      rotation={[-Math.PI, 0, -1.538]}
                      scale={0.081}
                    />
                    <group
                      name="cs_user_c_shoulderr"
                      position={[-1.73, 0.125, 0.128]}
                    />
                    <group
                      name="cs_user_c_skull_02x"
                      position={[0, -0.019, 1.575]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.053}
                    />
                    <group
                      name="cs_user_c_skull_03x"
                      position={[0, -0.019, 1.669]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.065}
                    />
                    <group
                      name="cs_twist_shape"
                      position={[-0.476, -0.053, 0.156]}
                      scale={0.098}
                    />
                    <group name="cs_torus_tip_01" position={[-0.992, 0, 0]} />
                    <group name="cs_wavy_circle" position={[6.982, 0, 0]} />
                    <group
                      name="cs_arrow_x_up"
                      position={[1.025, -0.135, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_arrow_x_down"
                      position={[1.025, -0.238, 0.037]}
                      scale={0.283}
                    />
                    <group
                      name="cs_c_foot_ik_offset"
                      rotation={[-Math.PI, -Math.PI / 2, 0]}
                      scale={0.112}
                    />
                    <group
                      name="cs_fly"
                      position={[3.682, -0.044, 0.037]}
                      scale={0.283}
                    />
                    <group name="cs_cube_solid" position={[-3.953, 0, 0]} />
                    <group
                      name="cs_cube_solid_offset"
                      position={[-4.354, 0, 0]}
                    />
                    <group
                      name="cs_sphere_offset"
                      position={[-0.848, -0.053, 0.556]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.085}
                    />
                    <group
                      name="cs_sphere_solid_offset"
                      position={[-5.18, 0, 0]}
                    />
                    <group name="cs_box_offset" position={[-5.754, 0, 0]} />
                    <group name="cs_sphere_solid" position={[-4.745, 0, 0]} />
                    <group
                      name="cs_user_c_arm_fkl"
                      position={[0.237, 0.026, 1.294]}
                      rotation={[3.113, -0.368, -1.683]}
                      scale={0.229}
                    />
                    <group
                      name="cs_user_c_arm_fkr"
                      position={[0.131, 0.015, 1.335]}
                    />
                    <group
                      name="cs_user_c_arm_ikr"
                      position={[0.131, 0.015, 1.335]}
                    />
                  </group>
                </group>
                <group
                  name="Torso_Ear"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Torso_Body"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Torso_Eyelash"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Torso_Eye_R"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair003"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair004"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair005"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair007"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair008"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair010"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair009"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair006"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair011"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair012"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair013"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair030"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair031"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair032"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair033"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair034"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair035"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair036"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair037"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair040"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair041"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair042"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair043"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair044"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair045"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauA002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauB002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauC002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair038"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair039"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair014"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair015"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair016"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair017"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair018"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair019"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair020"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair021"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair024"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair025"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair026"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair027"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair028"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair029"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauA001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauB001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair_BandeauC001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair022"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair023"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Hair046"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Underwear_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Shoes_L_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Socks_L_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Shoes_R_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Socks_R_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Necktie001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_PleatedSuspenders"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Necktie002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Necktie003"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Necktie004"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_PleatedSkirt_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_PleatedButton"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_OvercoatButton"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Shirt_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_Overcoat_SS"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Clothes_OvercoatPocket"
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

useGLTF.preload("/models/ClassroomAnime.glb");

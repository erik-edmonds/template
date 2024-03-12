import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Cat(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/CatAnime.glb");
  animations[0].name = "Moving";

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Moving"].reset().fadeIn(0.5).play();
  }, []);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="d06aeee87f624523ad6601b74e4e8e50fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="mainAishaAshasd">
                  <group name="mainAishaMain">
                    <group name="mainAishaFitSkeleton" />
                    <group name="mainAishaMotionSystem">
                      <group
                        name="mainAishaFKSystem"
                        position={[0.906, -0.385, -0.227]}
                        rotation={[0, -0.164, 0]}
                      >
                        <group
                          name="mainAishaFKParentConstraintToRoot_M"
                          position={[0.003, 9.828, -0.177]}
                          rotation={[-0.003, 0, -0.004]}
                        >
                          <group
                            name="mainAishaFKOffsetHip_R"
                            position={[-0.82, -0.209, -0.054]}
                            rotation={[-1.099, -1.382, -2.581]}
                          >
                            <group name="mainAishaFKExtraHip_R">
                              <group name="mainAishaFKHip_R" />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetSkirtF1_M"
                            position={[0, 0.321, 1.335]}
                            rotation={[-1.748, Math.PI / 2, 0]}
                          >
                            <group name="mainAishaFKExtraSkirtF1_M">
                              <group name="mainAishaFKSkirtF1_M" />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetSkirtB1_M"
                            position={[0, -0.019, -0.407]}
                            rotation={[-0.955, Math.PI / 2, 0]}
                          >
                            <group name="mainAishaFKExtraSkirtB1_M">
                              <group name="mainAishaFKSkirtB1_M" />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetHip_L"
                            position={[0.82, -0.209, -0.054]}
                            rotation={[2.043, -1.382, -2.581]}
                          >
                            <group name="mainAishaFKExtraHip_L">
                              <group name="mainAishaFKHip_L" />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaFKParentConstraintToWrist_R"
                          position={[-2.224, 9.355, 1.61]}
                          rotation={[-2.068, -0.594, -2.777]}
                        >
                          <group
                            name="mainAishaFKOffsetMiddleFinger1_R"
                            position={[0.931, 0, 0]}
                            rotation={[0.011, 0.11, -0.064]}
                          >
                            <group
                              name="mainAishaSDKFKMiddleFinger1_R"
                              rotation={[0, Math.PI / 8, 0]}
                            >
                              <group name="mainAishaFKExtraMiddleFinger1_R">
                                <group name="mainAishaFKMiddleFinger1_R" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetThumbFinger1_R"
                            position={[0.217, 0.125, -0.101]}
                            rotation={[-0.805, -0.425, 0.632]}
                          >
                            <group name="mainAishaFKExtraThumbFinger1_R">
                              <group name="mainAishaFKThumbFinger1_R" />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetIndexFinger1_R"
                            position={[0.915, 0.174, -0.017]}
                            rotation={[0.003, 0.069, 0.086]}
                          >
                            <group
                              name="mainAishaSDKFKIndexFinger1_R"
                              rotation={[0, Math.PI / 8, 0]}
                            >
                              <group name="mainAishaFKExtraIndexFinger1_R">
                                <group name="mainAishaFKIndexFinger1_R" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetCup_R"
                            position={[0.193, -0.12, -0.001]}
                            rotation={[0, 0.03, 0.052]}
                          >
                            <group name="mainAishaSDKFKCup_R">
                              <group name="mainAishaFKExtraCup_R">
                                <group name="mainAishaFKCup_R" />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaFKParentConstraintToScapula_R"
                          position={[-0.171, 12.699, -0.042]}
                          rotation={[-1.596, 0.089, 3.141]}
                        >
                          <group
                            name="mainAishaFKOffsetShoulder_R"
                            position={[0.611, 0, 0]}
                            rotation={[0, 0, -0.054]}
                          >
                            <group name="mainAishaFKExtraShoulder_R">
                              <group
                                name="mainAishaFKShoulder_R"
                                rotation={[-0.274, 1.234, 0.419]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaFKParentConstraintToChest_M"
                          position={[0.075, 11.876, -0.566]}
                          rotation={[1.543, 1.481, 0.141]}
                        >
                          <group
                            name="mainAishaFKOffsetScapula_R"
                            position={[0.787, 0.438, -0.311]}
                            rotation={[1.573, 1.432, -1.574]}
                          >
                            <group name="mainAishaFKExtraScapula_R">
                              <group
                                name="mainAishaFKScapula_R"
                                position={[0.006, 0.002, 0.065]}
                              />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetNeck_M"
                            position={[1.168, 0, 0]}
                            rotation={[0, 0, 0.042]}
                          >
                            <group name="mainAishaFKExtraNeck_M" />
                          </group>
                          <group
                            name="mainAishaFKOffsetScapula_L"
                            position={[0.787, 0.438, 0.311]}
                            rotation={[-1.573, -1.432, 1.568]}
                          >
                            <group name="mainAishaFKExtraScapula_L">
                              <group
                                name="mainAishaFKScapula_L"
                                position={[0.006, -0.002, -0.065]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaFKOffsetRoot_M"
                          position={[0, 9.829, -0.177]}
                          rotation={[1.323, Math.PI / 2, 0]}
                        >
                          <group name="mainAishaFKExtraRoot_M" />
                        </group>
                        <group
                          name="mainAishaFKParentConstraintToWrist_L"
                          position={[2.505, 8.712, -0.985]}
                          rotation={[1.718, -0.347, 3.053]}
                        >
                          <group
                            name="mainAishaFKOffsetMiddleFinger1_L"
                            position={[-0.931, 0, 0]}
                            rotation={[0.011, 0.11, -0.064]}
                          >
                            <group
                              name="mainAishaSDKFKMiddleFinger1_L"
                              rotation={[0, 0.55, 0]}
                            >
                              <group name="mainAishaFKExtraMiddleFinger1_L">
                                <group name="mainAishaFKMiddleFinger1_L" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetThumbFinger1_L"
                            position={[-0.217, -0.125, 0.101]}
                            rotation={[-0.805, -0.425, 0.632]}
                          >
                            <group name="mainAishaFKExtraThumbFinger1_L">
                              <group name="mainAishaFKThumbFinger1_L" />
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetIndexFinger1_L"
                            position={[-0.915, -0.174, 0.017]}
                            rotation={[0.003, 0.069, 0.086]}
                          >
                            <group
                              name="mainAishaSDKFKIndexFinger1_L"
                              rotation={[0, 0.55, 0]}
                            >
                              <group name="mainAishaFKExtraIndexFinger1_L">
                                <group name="mainAishaFKIndexFinger1_L" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaFKOffsetCup_L"
                            position={[-0.193, 0.12, 0.001]}
                            rotation={[0, 0.03, 0.052]}
                          >
                            <group name="mainAishaSDKFKCup_L">
                              <group name="mainAishaFKExtraCup_L">
                                <group name="mainAishaFKCup_L" />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaFKParentConstraintToScapula_L"
                          position={[0.449, 12.643, -0.041]}
                          rotation={[1.546, -0.09, 3.141]}
                        >
                          <group
                            name="mainAishaFKOffsetShoulder_L"
                            position={[-0.611, 0, 0]}
                            rotation={[0, 0, -0.054]}
                          >
                            <group name="mainAishaFKExtraShoulder_L">
                              <group
                                name="mainAishaFKShoulder_L"
                                rotation={[-0.095, 1.118, -0.192]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="mainAishaIKSystem">
                        <group name="mainAishaIKJoints">
                          <group
                            name="mainAishaIKParentConstraintHip_R"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[-0.003, -0.164, -0.004]}
                          >
                            <group
                              name="mainAishaIKXOffsetHip_R"
                              position={[-0.82, -0.209, -0.054]}
                              rotation={[-1.099, -1.382, -2.581]}
                            />
                            <group
                              name="mainAishaIKMessureFromHip_R"
                              position={[-0.82, -0.209, -0.054]}
                              rotation={[-1.099, -1.382, -2.581]}
                            />
                          </group>
                          <group
                            name="mainAishaIKParentConstraintShoulder_R"
                            position={[0.744, 12.314, -0.296]}
                            rotation={[-1.581, 0.092, 2.976]}
                          >
                            <group
                              name="mainAishaIKXOffsetShoulder_R"
                              position={[0.611, 0, 0]}
                              rotation={[0, 0, -0.054]}
                            />
                            <group
                              name="mainAishaIKMessureFromShoulder_R"
                              position={[0.611, 0, 0]}
                              rotation={[0, 0, -0.054]}
                            />
                          </group>
                          <group
                            name="mainAishaIKParentConstraintRoot_M"
                            position={[0, 9.829, -0.177]}
                            rotation={[1.323, Math.PI / 2, 0]}
                          />
                          <group
                            name="mainAishaIKParentConstraintHip_L"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[-0.003, -0.164, -0.004]}
                          >
                            <group
                              name="mainAishaIKXOffsetHip_L"
                              position={[0.82, -0.209, -0.054]}
                              rotation={[2.043, -1.382, -2.581]}
                            />
                            <group
                              name="mainAishaIKMessureFromHip_L"
                              position={[0.82, -0.209, -0.054]}
                              rotation={[2.043, -1.382, -2.581]}
                            />
                          </group>
                          <group
                            name="mainAishaIKParentConstraintShoulder_L"
                            position={[1.356, 12.258, -0.194]}
                            rotation={[1.561, -0.093, -2.977]}
                          >
                            <group
                              name="mainAishaIKXOffsetShoulder_L"
                              position={[-0.611, 0, 0]}
                              rotation={[0, 0, -0.054]}
                            />
                            <group
                              name="mainAishaIKMessureFromShoulder_L"
                              position={[-0.611, 0, 0]}
                              rotation={[0, 0, -0.054]}
                            />
                          </group>
                          <group
                            name="mainAishaIKSpSpineOffset_M"
                            position={[0, 9.829, -0.177]}
                            rotation={[1.393, 1.571, 0]}
                          />
                          <group
                            name="mainAishaIKAcSpineOffset_M"
                            position={[0, 9.829, -0.177]}
                            rotation={[1.323, Math.PI / 2, 0]}
                          />
                          <group name="mainAishaIKAcSpineOffset3_M">
                            <group
                              name="mainAishaIKAcPociXformRoot_M"
                              position={[0.935, 9.444, -0.402]}
                            />
                            <group
                              name="mainAishaIKAcPociXformRootPart1_M"
                              position={[0.944, 9.772, -0.46]}
                            />
                            <group
                              name="mainAishaIKAcPociXformRootPart2_M"
                              position={[0.954, 10.099, -0.518]}
                            />
                            <group
                              name="mainAishaIKAcPociXformSpine1_M"
                              position={[0.964, 10.427, -0.576]}
                            />
                            <group
                              name="mainAishaIKAcPociXformSpine1Part1_M"
                              position={[0.974, 10.785, -0.639]}
                            />
                            <group
                              name="mainAishaIKAcPociXformSpine1Part2_M"
                              position={[0.985, 11.143, -0.702]}
                            />
                            <group
                              name="mainAishaIKAcPociXformChest_M"
                              position={[0.995, 11.496, -0.765]}
                            />
                          </group>
                          <group
                            name="mainAishaIKAcSpineOffset2_M"
                            position={[0, 9.829, -0.177]}
                            rotation={[1.393, 1.571, 0]}
                          >
                            <group
                              name="mainAishaIKAcRootPart1FollowOffset_M"
                              position={[-0.007, -0.312, 0.944]}
                              rotation={[-0.161, -0.029, -0.073]}
                            />
                            <group
                              name="mainAishaIKAcRootPart2FollowOffset_M"
                              position={[0.325, -0.334, 0.954]}
                              rotation={[-0.161, -0.029, -0.073]}
                            />
                            <group
                              name="mainAishaIKAcSpine1FollowOffset_M"
                              position={[0.657, -0.357, 0.964]}
                              rotation={[-0.161, -0.029, 0.063]}
                            />
                            <group
                              name="mainAishaIKAcSpine1Part1FollowOffset_M"
                              position={[1.02, -0.333, 0.974]}
                              rotation={[-0.161, -0.029, 0.063]}
                            />
                            <group
                              name="mainAishaIKAcSpine1Part2FollowOffset_M"
                              position={[1.382, -0.308, 0.985]}
                              rotation={[-0.161, -0.029, 0.063]}
                            />
                            <group
                              name="mainAishaIKAcChestFollowOffset_M"
                              position={[1.745, -0.284, 0.995]}
                              rotation={[0, 0, 0.316]}
                            />
                          </group>
                        </group>
                        <group name="mainAishaIKHandle">
                          <group
                            name="mainAishaIKRootConstraint"
                            position={[0.906, -0.385, -0.227]}
                            rotation={[0, -0.164, 0]}
                          />
                          <group
                            name="mainAishaIKOffsetLeg_R"
                            position={[-2.2, 1.78, -0.771]}
                          >
                            <group name="mainAishaIKExtraLeg_R">
                              <group
                                name="mainAishaIKLeg_R"
                                position={[0.909, 0, 0]}
                                rotation={[0, 0.206, 0]}
                              >
                                <group
                                  name="mainAishaIKFKAlignedOffsetLeg_R"
                                  rotation={[0, -1.563, -Math.PI / 2]}
                                />
                                <group
                                  name="mainAishaIKLegFootRockInnerPivot_R"
                                  position={[0.645, -1.78, 2.097]}
                                  rotation={[0, 0.008, 0]}
                                >
                                  <group
                                    name="mainAishaIKLegFootRockOuterPivot_R"
                                    position={[-1.396, 0, -0.011]}
                                  >
                                    <group
                                      name="mainAishaIKFKAlignedLeg_R"
                                      position={[0.767, 1.78, -2.091]}
                                      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                                    />
                                    <group
                                      name="mainAishaIKLegFootRoll_R"
                                      position={[0.767, 1.78, -2.091]}
                                    />
                                    <group
                                      name="mainAishaRollOffsetHeel_R"
                                      position={[0.774, 0.01, -2.981]}
                                    >
                                      <group name="mainAishaRollRollerHeel_R">
                                        <group name="mainAishaRollExtraHeel_R">
                                          <group name="mainAishaRollHeel_R">
                                            <group
                                              name="mainAishaRollOffsetToesEnd_R"
                                              position={[-0.012, 0.089, 3.608]}
                                            >
                                              <group name="mainAishaRollRollerToesEnd_R">
                                                <group name="mainAishaRollExtraToesEnd_R">
                                                  <group name="mainAishaRollToesEnd_R">
                                                    <group
                                                      name="mainAishaRollOffsetToes_R"
                                                      position={[
                                                        0.005, 0.084, -0.621,
                                                      ]}
                                                    >
                                                      <group name="mainAishaRollRollerToes_R">
                                                        <group name="mainAishaRollExtraToes_R">
                                                          <group name="mainAishaRollToes_R">
                                                            <group
                                                              name="mainAishaIKAnkleHandle_R"
                                                              rotation={[
                                                                Math.PI / 2,
                                                                -Math.PI / 2,
                                                                0,
                                                              ]}
                                                            />
                                                            <group
                                                              name="mainAishaIKLegHandle_R"
                                                              position={[
                                                                0, 1.597,
                                                                -2.097,
                                                              ]}
                                                              rotation={[
                                                                0, -0.008, 0,
                                                              ]}
                                                            />
                                                            <group
                                                              name="mainAishaIKmessureConstrainToLeg_R"
                                                              position={[
                                                                0, 1.597,
                                                                -2.097,
                                                              ]}
                                                              rotation={[
                                                                0, -0.008, 0,
                                                              ]}
                                                            />
                                                          </group>
                                                        </group>
                                                      </group>
                                                    </group>
                                                    <group
                                                      name="mainAishaIKOffsetToes_R"
                                                      position={[
                                                        0.005, 0.084, -0.621,
                                                      ]}
                                                    >
                                                      <group name="mainAishaIKExtraToes_R">
                                                        <group name="mainAishaIKToes_R">
                                                          <group
                                                            name="mainAishaIKToesHandle_R"
                                                            position={[
                                                              -0.005, -0.084,
                                                              0.621,
                                                            ]}
                                                            rotation={[
                                                              -Math.PI,
                                                              -1.563,
                                                              3.007,
                                                            ]}
                                                          />
                                                        </group>
                                                      </group>
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleOffsetLeg_R"
                            position={[1.426, 3.578, 7.165]}
                            rotation={[0.033, 0.206, -0.007]}
                          >
                            <group name="mainAishaPoleExtraLeg_R">
                              <group name="mainAishaPoleLeg_R" />
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleAimLeg_R"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[-0.844, -1.213, -2.494]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_R"
                            position={[-5.154, 12.599, 0.103]}
                          >
                            <group name="mainAishaIKExtraArm_R">
                              <group name="mainAishaIKArm_R">
                                <group name="mainAishaIKArmHandle_R" />
                                <group
                                  name="mainAishaIKFKAlignedOffsetArm_R"
                                  rotation={[-1.571, 0, -3.046]}
                                >
                                  <group name="mainAishaIKFKAlignedArm_R" />
                                </group>
                                <group name="mainAishaIKmessureConstrainToArm_R" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleOffsetArm_R"
                            position={[-3.629, 12.599, -4.189]}
                          >
                            <group name="mainAishaPoleExtraArm_R">
                              <group name="mainAishaPoleArm_R" />
                            </group>
                          </group>
                          <group
                            name="mainAishaIKSpineHandle_M"
                            position={[0.995, 11.501, -0.765]}
                            rotation={[0, 1.407, 1.329]}
                          />
                          <group
                            name="mainAishaIKOffsetcvSpine1_M"
                            position={[0.945, 9.786, -0.462]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtracvSpine1_M">
                              <group name="mainAishaIKcvSpine1_M">
                                <group name="mainAishaIKSpineLocator1_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetcvSpine2_M"
                            position={[0.955, 10.128, -0.523]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtracvSpine2_M">
                              <group name="mainAishaIKcvSpine2_M">
                                <group name="mainAishaIKSpineLocator2_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetcvSpine3_M"
                            position={[0.965, 10.47, -0.583]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtracvSpine3_M">
                              <group name="mainAishaIKcvSpine3_M">
                                <group name="mainAishaIKSpineLocator3_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetcvSpine4_M"
                            position={[0.975, 10.812, -0.644]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtracvSpine4_M">
                              <group name="mainAishaIKcvSpine4_M">
                                <group name="mainAishaIKSpineLocator4_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetcvSpine5_M"
                            position={[0.985, 11.154, -0.704]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtracvSpine5_M">
                              <group name="mainAishaIKcvSpine5_M">
                                <group name="mainAishaIKSpineLocator5_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetSpine2_M"
                            position={[0.965, 10.47, -0.583]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtraSpine2_M">
                              <group name="mainAishaIKSpine2_M">
                                <group
                                  name="mainAishaIKSpine2LocalOrient1_M"
                                  rotation={[1.323, Math.PI / 2, 0]}
                                >
                                  <group name="mainAishaIKSpine2LocalOrient2_M" />
                                </group>
                              </group>
                            </group>
                            <group
                              name="mainAishaIKSpine2LocalOrient3_M"
                              rotation={[1.323, Math.PI / 2, 0]}
                            />
                          </group>
                          <group
                            name="mainAishaIKOffsetSpine3_M"
                            position={[0.995, 11.496, -0.765]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKExtraSpine3_M">
                              <group name="mainAishaIKSpine3_M">
                                <group name="mainAishaIKSpineLocator6_M" />
                                <group
                                  name="mainAishaIKSpine3LocalOrient1_M"
                                  rotation={[1.709, 1.571, 0]}
                                >
                                  <group name="mainAishaIKSpine3LocalOrient2_M" />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetConstrainedSpine1_M"
                            position={[0.935, 9.444, -0.402]}
                            rotation={[0, -0.164, 0]}
                          >
                            <group name="mainAishaIKOffsetSpine1_M">
                              <group name="mainAishaIKExtraSpine1_M">
                                <group name="mainAishaIKSpine1_M">
                                  <group name="mainAishaIKSpineLocator0_M" />
                                  <group
                                    name="mainAishaIKSpine1LocalOrient1_M"
                                    rotation={[1.323, Math.PI / 2, 0]}
                                  >
                                    <group name="mainAishaIKSpine1LocalOrient2_M">
                                      <group
                                        name="mainAishaIKSpine1LocalOrient3_M"
                                        rotation={[0, 0, 0.142]}
                                      />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaIKOffsetLeg_L"
                            position={[2.2, 1.78, -0.771]}
                          >
                            <group name="mainAishaIKExtraLeg_L">
                              <group
                                name="mainAishaIKLeg_L"
                                position={[-0.084, 0, 0]}
                                rotation={[0, -0.161, 0]}
                              >
                                <group
                                  name="mainAishaIKFKAlignedOffsetLeg_L"
                                  rotation={[-Math.PI, -1.563, -1.571]}
                                />
                                <group
                                  name="mainAishaIKLegFootRockInnerPivot_L"
                                  position={[-0.645, -1.78, 2.097]}
                                  rotation={[0, -0.008, 0]}
                                >
                                  <group
                                    name="mainAishaIKLegFootRockOuterPivot_L"
                                    position={[1.396, 0, -0.011]}
                                  >
                                    <group
                                      name="mainAishaIKFKAlignedLeg_L"
                                      position={[-0.767, 1.78, -2.091]}
                                      rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                                    />
                                    <group
                                      name="mainAishaIKLegFootRoll_L"
                                      position={[-0.767, 1.78, -2.091]}
                                    />
                                    <group
                                      name="mainAishaRollOffsetHeel_L"
                                      position={[-0.774, 0.01, -2.981]}
                                    >
                                      <group name="mainAishaRollRollerHeel_L">
                                        <group name="mainAishaRollExtraHeel_L">
                                          <group name="mainAishaRollHeel_L">
                                            <group
                                              name="mainAishaRollOffsetToesEnd_L"
                                              position={[0.012, 0.089, 3.608]}
                                            >
                                              <group name="mainAishaRollRollerToesEnd_L">
                                                <group name="mainAishaRollExtraToesEnd_L">
                                                  <group name="mainAishaRollToesEnd_L">
                                                    <group
                                                      name="mainAishaRollOffsetToes_L"
                                                      position={[
                                                        -0.005, 0.084, -0.621,
                                                      ]}
                                                    >
                                                      <group
                                                        name="mainAishaRollRollerToes_L"
                                                        rotation={[0.166, 0, 0]}
                                                      >
                                                        <group name="mainAishaRollExtraToes_L">
                                                          <group name="mainAishaRollToes_L">
                                                            <group
                                                              name="mainAishaIKAnkleHandle_L"
                                                              rotation={[
                                                                -Math.PI / 2,
                                                                -Math.PI / 2,
                                                                0,
                                                              ]}
                                                            />
                                                            <group
                                                              name="mainAishaIKLegHandle_L"
                                                              position={[
                                                                0, 1.597,
                                                                -2.097,
                                                              ]}
                                                              rotation={[
                                                                0, 0.008, 0,
                                                              ]}
                                                            />
                                                            <group
                                                              name="mainAishaIKmessureConstrainToLeg_L"
                                                              position={[
                                                                0, 1.597,
                                                                -2.097,
                                                              ]}
                                                              rotation={[
                                                                0, 0.008, 0,
                                                              ]}
                                                            />
                                                          </group>
                                                        </group>
                                                      </group>
                                                    </group>
                                                    <group
                                                      name="mainAishaIKOffsetToes_L"
                                                      position={[
                                                        -0.005, 0.084, -0.621,
                                                      ]}
                                                    >
                                                      <group name="mainAishaIKExtraToes_L">
                                                        <group name="mainAishaIKToes_L">
                                                          <group
                                                            name="mainAishaIKToesHandle_L"
                                                            position={[
                                                              0.005, -0.084,
                                                              0.621,
                                                            ]}
                                                            rotation={[
                                                              0, -1.563, 3.007,
                                                            ]}
                                                          />
                                                        </group>
                                                      </group>
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleOffsetLeg_L"
                            position={[0.142, 3.746, 7.266]}
                            rotation={[-0.001, -0.151, -0.123]}
                          >
                            <group name="mainAishaPoleExtraLeg_L">
                              <group name="mainAishaPoleLeg_L" />
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleAimLeg_L"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[2.465, -1.343, 0.833]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_L"
                            position={[5.154, 12.599, 0.103]}
                          >
                            <group name="mainAishaIKExtraArm_L">
                              <group name="mainAishaIKArm_L">
                                <group name="mainAishaIKArmHandle_L" />
                                <group
                                  name="mainAishaIKFKAlignedOffsetArm_L"
                                  rotation={[1.571, 0, -3.046]}
                                >
                                  <group name="mainAishaIKFKAlignedArm_L" />
                                </group>
                                <group name="mainAishaIKmessureConstrainToArm_L" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mainAishaPoleOffsetArm_L"
                            position={[3.629, 12.599, -4.189]}
                          >
                            <group name="mainAishaPoleExtraArm_L">
                              <group name="mainAishaPoleArm_L" />
                            </group>
                          </group>
                          <group name="mainAishaIKScalerRoot_M" />
                          <group name="mainAishaIKScalerRootPart1_M" />
                          <group name="mainAishaIKScalerRootPart2_M" />
                          <group name="mainAishaIKScalerSpine1_M" />
                          <group name="mainAishaIKScalerSpine1Part1_M" />
                          <group name="mainAishaIKScalerSpine1Part2_M" />
                          <group name="mainAishaIKScalerChest_M" />
                        </group>
                        <group name="mainAishaIKFollow">
                          <group
                            name="mainAishaPoleOffsetLeg_RFollowNoScale"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[-0.844, -1.213, -2.494]}
                          />
                          <group
                            name="mainAishaPoleOffsetLeg_RFollow"
                            position={[1.426, 3.578, 7.165]}
                            rotation={[0.033, 0.206, -0.007]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_RFollowNoScale"
                            position={[0.744, 12.314, -0.296]}
                            rotation={[-1.581, 0.092, 2.976]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_RFollow"
                            position={[-4.03, 12.749, -0.99]}
                            rotation={[-0.025, -0.164, -0.094]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_RFollowNoScale"
                            position={[-5.154, 12.599, 0.103]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_RFollow"
                            position={[-3.629, 12.599, -4.189]}
                          />
                          <group
                            name="mainAishaIKOffsetSpine3_MFollowNoScale"
                            position={[0.935, 9.444, -0.402]}
                            rotation={[0, -0.164, 0]}
                          />
                          <group
                            name="mainAishaIKOffsetSpine3_MFollow"
                            position={[0.995, 11.496, -0.765]}
                            rotation={[0, -0.164, 0]}
                          />
                          <group
                            name="mainAishaPoleOffsetLeg_LFollowNoScale"
                            position={[0.938, 9.444, -0.401]}
                            rotation={[2.465, -1.343, 0.833]}
                          />
                          <group
                            name="mainAishaPoleOffsetLeg_LFollow"
                            position={[0.142, 3.746, 7.266]}
                            rotation={[-0.001, -0.151, -0.123]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_LFollowNoScale"
                            position={[1.356, 12.258, -0.194]}
                            rotation={[1.561, -0.093, -2.977]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_LFollow"
                            position={[6.096, 11.828, 0.709]}
                            rotation={[-0.025, -0.164, -0.094]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_LFollowNoScale"
                            position={[5.154, 12.599, 0.103]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_LFollow"
                            position={[3.629, 12.599, -4.189]}
                          />
                        </group>
                        <group name="mainAishaIKStatic">
                          <group
                            name="mainAishaPoleOffsetLeg_RStatic"
                            position={[-1.067, 4.211, 7.517]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_RStatic"
                            position={[-5.154, 12.599, 0.103]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_RStatic"
                            position={[-3.629, 12.599, -4.189]}
                          />
                          <group
                            name="mainAishaIKOffsetSpine3_MStatic"
                            position={[0, 11.881, -0.545]}
                          />
                          <group
                            name="mainAishaPoleOffsetLeg_LStatic"
                            position={[1.067, 4.211, 7.517]}
                          />
                          <group
                            name="mainAishaIKOffsetArm_LStatic"
                            position={[5.154, 12.599, 0.103]}
                          />
                          <group
                            name="mainAishaPoleOffsetArm_LStatic"
                            position={[3.629, 12.599, -4.189]}
                          />
                        </group>
                        <group name="mainAishaIKCurve">
                          <group name="mainAishaIKSpineCurve_M" />
                        </group>
                        <group name="mainAishaIKMessure">
                          <group
                            name="mainAishaIKmessureLoc1Leg_R"
                            position={[0.137, 9.237, -0.587]}
                          >
                            <group
                              name="mainAishaIKmessureLoc2Leg_R"
                              position={[-1.429, -7.457, -0.184]}
                            />
                          </group>
                          <group name="mainAishaIKdistanceLeg_R" />
                          <group
                            name="mainAishaIKmessureLoc1Arm_R"
                            position={[0.144, 12.368, -0.397]}
                          >
                            <group
                              name="mainAishaIKmessureLoc2Arm_R"
                              position={[-5.298, 0.231, 0.5]}
                            />
                          </group>
                          <group name="mainAishaIKdistanceArm_R" />
                          <group
                            name="mainAishaIKmessureLoc1Leg_L"
                            position={[1.755, 9.231, -0.32]}
                          >
                            <group
                              name="mainAishaIKmessureLoc2Leg_L"
                              position={[0.313, -7.127, -0.163]}
                            />
                          </group>
                          <group name="mainAishaIKdistanceLeg_L" />
                          <group
                            name="mainAishaIKmessureLoc1Arm_L"
                            position={[1.956, 12.203, -0.093]}
                          >
                            <group
                              name="mainAishaIKmessureLoc2Arm_L"
                              position={[3.198, 0.396, 0.196]}
                            />
                          </group>
                          <group name="mainAishaIKdistanceArm_L" />
                        </group>
                      </group>
                      <group name="mainAishaFKIKSystem">
                        <group
                          name="mainAishaFKIKParentConstraintLeg_R"
                          position={[0.938, 9.444, -0.401]}
                          rotation={[-0.003, -0.164, -0.004]}
                        >
                          <group
                            name="mainAishaFKIKLeg_R"
                            position={[-2.12, -1.254, 0.162]}
                          />
                        </group>
                        <group
                          name="mainAishaFKIKParentConstraintArm_R"
                          position={[0.744, 12.314, -0.296]}
                          rotation={[-1.581, 0.092, 2.976]}
                        >
                          <group
                            name="mainAishaFKIKArm_R"
                            position={[1.863, -0.067, 0.901]}
                            rotation={[-1.571, -0.001, 3.141]}
                          />
                        </group>
                        <group
                          name="mainAishaFKIKParentConstraintSpine_M"
                          position={[0.938, 9.444, -0.401]}
                          rotation={[0.022, 1.407, 1.298]}
                        >
                          <group
                            name="mainAishaFKIKSpine_M"
                            position={[1.254, 0, 1.951]}
                            rotation={[-Math.PI / 2, -0.248, -Math.PI / 2]}
                          />
                        </group>
                        <group
                          name="mainAishaFKIKParentConstraintLeg_L"
                          position={[0.938, 9.444, -0.401]}
                          rotation={[-0.003, -0.164, -0.004]}
                        >
                          <group
                            name="mainAishaFKIKLeg_L"
                            position={[2.12, -1.254, 0.162]}
                          />
                        </group>
                        <group
                          name="mainAishaFKIKParentConstraintArm_L"
                          position={[1.356, 12.258, -0.194]}
                          rotation={[1.561, -0.093, -2.977]}
                        >
                          <group
                            name="mainAishaFKIKArm_L"
                            position={[-1.863, 0.067, -0.901]}
                            rotation={[1.571, 0.001, -3.141]}
                          />
                        </group>
                      </group>
                      <group name="mainAishaBendSystem" />
                      <group name="mainAishaAimSystem" />
                      <group name="mainAishaRootSystem">
                        <group
                          name="mainAishaLegLockConstrained"
                          position={[0.938, 9.444, -0.401]}
                          rotation={[-0.003, -0.164, -0.004]}
                        />
                        <group
                          name="mainAishaRootCenterBtwLegsBlended_M"
                          position={[0, 9.829, -0.177]}
                        >
                          <group name="mainAishaRootOffsetX_M">
                            <group name="mainAishaRootExtraX_M">
                              <group
                                name="mainAishaRootX_M"
                                position={[0.935, -0.385, -0.224]}
                                rotation={[0, -0.164, 0]}
                              >
                                <group
                                  name="mainAishaRootZeroXform"
                                  position={[0, -9.829, 0.177]}
                                />
                                <group
                                  name="mainAishaRootSpineAligned"
                                  rotation={[-0.003, 0, -0.004]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="mainAishaRootCenter_M"
                          position={[0, 9.829, -0.177]}
                        />
                        <group
                          name="mainAishaRootCenterBtwLegs_M"
                          position={[0, 9.829, -0.771]}
                        >
                          <group
                            name="mainAishaRootCenterBtwLegsOffset_M"
                            position={[0, 0, 0.594]}
                          />
                        </group>
                      </group>
                      <group name="mainAishaTwistSystem">
                        <group
                          name="mainAishaTwistFollowOffsetHead_M"
                          position={[0, 14.567, -0.105]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group
                            name="mainAishaTwistFollowHead_M"
                            position={[-0.407, -0.371, 0.872]}
                            rotation={[-0.019, 0.305, -0.108]}
                          >
                            <group
                              name="mainAishaUnTwistIKHead_M"
                              position={[1.169, 0, 0]}
                              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetHead_M"
                          position={[0, 13.037, -0.384]}
                          rotation={[1.751, Math.PI / 2, 0]}
                        >
                          <group
                            name="mainAishaTwistFollowParentHead_M"
                            position={[-0.428, -0.167, 1.152]}
                            rotation={[0.038, 0.304, -0.116]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetChest_M"
                          position={[0, 11.881, -0.545]}
                          rotation={[1.709, 1.571, 0]}
                        >
                          <group
                            name="mainAishaTwistFollowChest_M"
                            position={[-0.411, -0.164, 0.995]}
                            rotation={[-0.162, 0.022, 0.002]}
                          >
                            <group
                              name="mainAishaUnTwistIKChest_M"
                              position={[1.169, 0, 0]}
                              rotation={[-Math.PI / 2, 0.138, -Math.PI / 2]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetChest_M"
                          position={[0, 9.829, -0.177]}
                          rotation={[1.393, 1.571, 0]}
                        >
                          <group name="mainAishaTwistFollowParentChest_M" />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetSpine2_M"
                          position={[0, 10.855, -0.361]}
                          rotation={[1.323, Math.PI / 2, 0]}
                        >
                          <group
                            name="mainAishaTwistFollowSpine2_M"
                            position={[-0.318, -0.31, 0.965]}
                            rotation={[-0.159, -0.04, -0.003]}
                          >
                            <group
                              name="mainAishaUnTwistIKSpine2_M"
                              position={[1.672, 0, 0]}
                              rotation={[-Math.PI / 2, -0.248, -Math.PI / 2]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetSpine2_M"
                          position={[0, 10.855, -0.361]}
                          rotation={[1.323, Math.PI / 2, 0]}
                        >
                          <group
                            name="mainAishaTwistFollowParentSpine2_M"
                            position={[-0.318, -0.31, 0.965]}
                            rotation={[-0.159, -0.04, -0.003]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetKnee_R"
                          position={[-1.563, 5.024, 0.217]}
                          rotation={[-1.099, -1.382, -2.968]}
                        >
                          <group
                            name="mainAishaTwistFollowKnee_R"
                            position={[-0.11, 0.555, -1.237]}
                            rotation={[-0.19, -0.07, -0.169]}
                          >
                            <group
                              name="mainAishaUnTwistIKKnee_R"
                              position={[1.169, 0, 0]}
                              rotation={[-1.482, -0.29, 1.765]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetKnee_R"
                          position={[-0.82, 9.619, -0.231]}
                          rotation={[-1.099, -1.382, -2.581]}
                        >
                          <group
                            name="mainAishaTwistFollowParentKnee_R"
                            position={[0.189, -0.289, -1.034]}
                            rotation={[-0.202, 0.006, 0.187]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetHip_R"
                          position={[-0.82, 9.619, -0.231]}
                          rotation={[-1.099, -1.382, -2.581]}
                        >
                          <group
                            name="mainAishaTwistFollowHip_R"
                            position={[0.189, -0.289, -1.034]}
                            rotation={[-0.202, 0.006, 0.187]}
                          >
                            <group
                              name="mainAishaUnTwistIKHip_R"
                              position={[1.169, 0, 0]}
                              rotation={[-1.485, 0.096, 1.731]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetHip_R"
                          position={[0, 9.829, -0.177]}
                        >
                          <group
                            name="mainAishaTwistFollowParentHip_R"
                            position={[0.938, -0.385, -0.224]}
                            rotation={[-0.003, -0.164, -0.004]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetWrist_R"
                          position={[-5.154, 12.599, 0.103]}
                          rotation={[-1.571, 0, -3.046]}
                        >
                          <group
                            name="mainAishaTwistFollowWrist_R"
                            position={[-3.501, 1.236, -3.63]}
                            rotation={[0.625, 0.455, 0.111]}
                          >
                            <group
                              name="mainAishaUnTwistIKWrist_R"
                              position={[1.169, 0, 0]}
                              rotation={[-1.571, 0.096, -Math.PI]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetWrist_R"
                          position={[-3.452, 12.599, -0.14]}
                          rotation={[-1.571, 0, -3]}
                        >
                          <group
                            name="mainAishaTwistFollowParentWrist_R"
                            position={[-2.521, 0.35, -2.523]}
                            rotation={[0.553, 1.078, 0.18]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetElbow_R"
                          position={[-3.452, 12.599, -0.14]}
                          rotation={[-1.571, 0, -3]}
                        >
                          <group
                            name="mainAishaTwistFollowElbow_R"
                            position={[-2.521, 0.35, -2.523]}
                            rotation={[0.553, 1.078, 0.18]}
                          >
                            <group
                              name="mainAishaUnTwistIKElbow_R"
                              position={[1.169, 0, 0]}
                              rotation={[-1.571, 0.142, -3.142]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetElbow_R"
                          position={[-0.922, 12.599, -0.003]}
                          rotation={[-1.571, 0, 3.088]}
                        >
                          <group
                            name="mainAishaTwistFollowParentElbow_R"
                            position={[-1.043, -0.451, -0.231]}
                            rotation={[0.178, 1.149, -0.042]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetShoulder_R"
                          position={[-0.922, 12.599, -0.003]}
                          rotation={[-1.571, 0, 3.088]}
                        >
                          <group
                            name="mainAishaTwistFollowShoulder_R"
                            position={[-1.043, -0.451, -0.231]}
                            rotation={[0.178, 1.149, -0.042]}
                          >
                            <group
                              name="mainAishaUnTwistIKShoulder_R"
                              position={[1.169, 0, 0]}
                              rotation={[-1.571, -0.054, Math.PI]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetShoulder_R"
                          position={[-0.311, 12.6, -0.003]}
                          rotation={[-1.571, 0, 3.141]}
                        >
                          <group
                            name="mainAishaTwistFollowParentShoulder_R"
                            position={[-1.055, -0.294, -0.286]}
                            rotation={[0.01, -0.092, -0.165]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetKnee_L"
                          position={[1.563, 5.024, 0.217]}
                          rotation={[2.043, -1.382, -2.968]}
                        >
                          <group
                            name="mainAishaTwistFollowKnee_L"
                            position={[0.255, -1.209, -0.02]}
                            rotation={[-0.182, 0.078, -0.293]}
                          >
                            <group
                              name="mainAishaUnTwistIKKnee_L"
                              position={[-1.169, 0, 0]}
                              rotation={[1.66, 0.29, -1.765]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetKnee_L"
                          position={[0.82, 9.619, -0.231]}
                          rotation={[2.043, -1.382, -2.581]}
                        >
                          <group
                            name="mainAishaTwistFollowParentKnee_L"
                            position={[-0.521, 0.213, -0.846]}
                            rotation={[-0.139, 0.141, 0.333]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetHip_L"
                          position={[0.82, 9.619, -0.231]}
                          rotation={[2.043, -1.382, -2.581]}
                        >
                          <group
                            name="mainAishaTwistFollowHip_L"
                            position={[-0.521, 0.213, -0.846]}
                            rotation={[-0.139, 0.141, 0.333]}
                          >
                            <group
                              name="mainAishaUnTwistIKHip_L"
                              position={[-1.169, 0, 0]}
                              rotation={[1.657, -0.096, -1.731]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetHip_L"
                          position={[0, 9.829, -0.177]}
                        >
                          <group
                            name="mainAishaTwistFollowParentHip_L"
                            position={[0.938, -0.385, -0.224]}
                            rotation={[-0.003, -0.164, -0.004]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetWrist_L"
                          position={[5.154, 12.599, 0.103]}
                          rotation={[1.571, 0, -3.046]}
                        >
                          <group
                            name="mainAishaTwistFollowWrist_L"
                            position={[1.694, 0.735, 4.272]}
                            rotation={[-0.171, 0.336, -0.017]}
                          >
                            <group
                              name="mainAishaUnTwistIKWrist_L"
                              position={[-1.169, 0, 0]}
                              rotation={[1.571, -0.096, Math.PI]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetWrist_L"
                          position={[3.452, 12.599, -0.14]}
                          rotation={[1.571, 0, -3]}
                        >
                          <group
                            name="mainAishaTwistFollowParentWrist_L"
                            position={[0.609, 0.415, 2.679]}
                            rotation={[-0.013, 1.21, -0.128]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetElbow_L"
                          position={[3.452, 12.599, -0.14]}
                          rotation={[1.571, 0, -3]}
                        >
                          <group
                            name="mainAishaTwistFollowElbow_L"
                            position={[0.609, 0.415, 2.679]}
                            rotation={[-0.013, 1.21, -0.128]}
                          >
                            <group
                              name="mainAishaUnTwistIKElbow_L"
                              position={[-1.169, 0, 0]}
                              rotation={[1.571, -0.142, 3.142]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetElbow_L"
                          position={[0.922, 12.599, -0.003]}
                          rotation={[1.571, 0, 3.088]}
                        >
                          <group
                            name="mainAishaTwistFollowParentElbow_L"
                            position={[-1.037, 0.034, 0.396]}
                            rotation={[-0.486, 1.16, 0.252]}
                          />
                        </group>
                        <group
                          name="mainAishaTwistFollowOffsetShoulder_L"
                          position={[0.922, 12.599, -0.003]}
                          rotation={[1.571, 0, 3.088]}
                        >
                          <group
                            name="mainAishaTwistFollowShoulder_L"
                            position={[-1.037, 0.034, 0.396]}
                            rotation={[-0.486, 1.16, 0.252]}
                          >
                            <group
                              name="mainAishaUnTwistIKShoulder_L"
                              position={[-1.169, 0, 0]}
                              rotation={[1.571, 0.054, -Math.PI]}
                            />
                          </group>
                        </group>
                        <group
                          name="mainAishaTwistFollowParentOffsetShoulder_L"
                          position={[0.311, 12.6, -0.003]}
                          rotation={[1.571, 0, 3.141]}
                        >
                          <group
                            name="mainAishaTwistFollowParentShoulder_L"
                            position={[-1.045, 0.19, 0.341]}
                            rotation={[0.01, 0.092, 0.165]}
                          />
                        </group>
                        <group
                          name="mainAishaFKIKMixKnee_R"
                          position={[-0.309, 4.756, 0.673]}
                        />
                        <group
                          name="mainAishaFKIKMixWrist_R"
                          position={[-1.551, 8.97, 0.999]}
                        />
                        <group
                          name="mainAishaFKIKMixElbow_R"
                          position={[-0.906, 10.077, -0.149]}
                        />
                        <group
                          name="mainAishaFKIKMixKnee_L"
                          position={[1.496, 4.908, 1.445]}
                        />
                        <group
                          name="mainAishaFKIKMixWrist_L"
                          position={[3.538, 8.327, -0.79]}
                        />
                        <group
                          name="mainAishaFKIKMixElbow_L"
                          position={[2.908, 9.92, -0.637]}
                        />
                      </group>
                      <group name="mainAishaGlobalSystem">
                        <group
                          name="mainAishaGlobalOffsetHead_M"
                          position={[0, 14.567, -0.105]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="mainAishaGlobalHead_M" />
                        </group>
                      </group>
                      <group name="mainAishaConstraintSystem" />
                      <group name="mainAishaDynamicSystem" />
                      <group name="mainAishaDrivingSystem">
                        <group
                          name="mainAishaFingers_R"
                          position={[-1.551, 8.97, 0.999]}
                          rotation={[-2.139, -0.577, -2.941]}
                          scale={[1.93, 0.804, 1]}
                        />
                        <group
                          name="mainAishaFingers_L"
                          position={[3.538, 8.327, -0.79]}
                          rotation={[-1.363, 0.387, -0.077]}
                          scale={[1.93, 0.804, 1]}
                        />
                      </group>
                    </group>
                    <group name="mainAishaDeformationSystem">
                      <group name="Object_380">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_509"
                          geometry={nodes.Object_509.geometry}
                          material={materials.mainAishaHeadmat}
                          skeleton={nodes.Object_509.skeleton}
                        />
                        <skinnedMesh
                          name="Object_511"
                          geometry={nodes.Object_511.geometry}
                          material={materials.mainAishaBodymat}
                          skeleton={nodes.Object_511.skeleton}
                        />
                        <skinnedMesh
                          name="Object_513"
                          geometry={nodes.Object_513.geometry}
                          material={materials.mainAishaShoeMat}
                          skeleton={nodes.Object_513.skeleton}
                        />
                        <skinnedMesh
                          name="Object_515"
                          geometry={nodes.Object_515.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_515.skeleton}
                        />
                        <skinnedMesh
                          name="Object_517"
                          geometry={nodes.Object_517.geometry}
                          material={materials.lambert1}
                          skeleton={nodes.Object_517.skeleton}
                        />
                        <skinnedMesh
                          name="Object_519"
                          geometry={nodes.Object_519.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_519.skeleton}
                        />
                        <skinnedMesh
                          name="Object_521"
                          geometry={nodes.Object_521.geometry}
                          material={materials.mainAishaShirtMAT}
                          skeleton={nodes.Object_521.skeleton}
                        />
                        <skinnedMesh
                          name="Object_523"
                          geometry={nodes.Object_523.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_523.skeleton}
                        />
                        <skinnedMesh
                          name="Object_525"
                          geometry={nodes.Object_525.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_525.skeleton}
                        />
                        <skinnedMesh
                          name="Object_527"
                          geometry={nodes.Object_527.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_527.skeleton}
                        />
                        <skinnedMesh
                          name="Object_529"
                          geometry={nodes.Object_529.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_529.skeleton}
                        />
                        <skinnedMesh
                          name="Object_531"
                          geometry={nodes.Object_531.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_531.skeleton}
                        />
                        <skinnedMesh
                          name="Object_533"
                          geometry={nodes.Object_533.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_533.skeleton}
                        />
                        <skinnedMesh
                          name="Object_535"
                          geometry={nodes.Object_535.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_535.skeleton}
                        />
                        <skinnedMesh
                          name="Object_537"
                          geometry={nodes.Object_537.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_537.skeleton}
                        />
                        <skinnedMesh
                          name="Object_539"
                          geometry={nodes.Object_539.geometry}
                          material={materials.mainAishaHairMat}
                          skeleton={nodes.Object_539.skeleton}
                        />
                        <skinnedMesh
                          name="Object_541"
                          geometry={nodes.Object_541.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_541.skeleton}
                          morphTargetDictionary={
                            nodes.Object_541.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_541.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_543"
                          geometry={nodes.Object_543.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_543.skeleton}
                          morphTargetDictionary={
                            nodes.Object_543.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_543.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_545"
                          geometry={nodes.Object_545.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_545.skeleton}
                          morphTargetDictionary={
                            nodes.Object_545.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_545.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_547"
                          geometry={nodes.Object_547.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_547.skeleton}
                          morphTargetDictionary={
                            nodes.Object_547.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_547.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_549"
                          geometry={nodes.Object_549.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_549.skeleton}
                          morphTargetDictionary={
                            nodes.Object_549.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_549.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_551"
                          geometry={nodes.Object_551.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_551.skeleton}
                          morphTargetDictionary={
                            nodes.Object_551.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_551.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_553"
                          geometry={nodes.Object_553.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_553.skeleton}
                          morphTargetDictionary={
                            nodes.Object_553.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_553.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_555"
                          geometry={nodes.Object_555.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_555.skeleton}
                          morphTargetDictionary={
                            nodes.Object_555.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_555.morphTargetInfluences
                          }
                        />
                        <skinnedMesh
                          name="Object_557"
                          geometry={nodes.Object_557.geometry}
                          material={materials.mainAishalambert46}
                          skeleton={nodes.Object_557.skeleton}
                          morphTargetDictionary={
                            nodes.Object_557.morphTargetDictionary
                          }
                          morphTargetInfluences={
                            nodes.Object_557.morphTargetInfluences
                          }
                        />
                        <group
                          name="Object_508"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_510"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_512"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_514"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_516"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_518"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_520"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_522"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_524"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_526"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_528"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_530"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_532"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_534"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_536"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_538"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_540"
                          position={[0, -0.045, 2.233]}
                          scale={0.092}
                        />
                        <group
                          name="Object_542"
                          position={[0, -0.045, 2.611]}
                          scale={0.092}
                        />
                        <group
                          name="Object_544"
                          position={[0, -0.045, 2.437]}
                          scale={0.092}
                        />
                        <group
                          name="Object_546"
                          position={[0, -0.045, 1.875]}
                          scale={0.092}
                        />
                        <group
                          name="Object_548"
                          position={[0, -0.045, 1.994]}
                          scale={0.092}
                        />
                        <group
                          name="Object_550"
                          position={[0, -0.045, 2.089]}
                          scale={0.092}
                        />
                        <group
                          name="Object_552"
                          position={[0, -0.045, 2.117]}
                          scale={0.092}
                        />
                        <group
                          name="Object_554"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                        <group
                          name="Object_556"
                          position={[0, -0.045, 0]}
                          scale={0.092}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="mainAishaGeometry">
                    <group
                      name="mainAishaAishaSD"
                      position={[0, -0.045, 0]}
                      scale={0.092}
                    >
                      <group name="mainAishaHeadbody" />
                      <group name="mainAishabody" />
                      <group name="mainAishaShoe" />
                      <group name="mainAishablinkeye" />
                      <group name="mainAishapCylinder1" />
                      <group name="mainAishaear" />
                      <group name="mainAishaSkrit1" />
                      <group name="mainAishaHair">
                        <group name="mainAishabackhairtop" />
                        <group name="mainAishaHairL" />
                        <group name="mainAishaHaircen" />
                        <group name="mainAishaHairR" />
                        <group name="mainAishaHairSR" />
                        <group name="mainAishaHairSL" />
                        <group name="mainAishaLonghair" />
                        <group name="mainAishapTorusR" />
                        <group name="mainAishapTorusL" />
                      </group>
                      <group name="mainAishaemotion">
                        <group name="mainAishaOom" position={[0, 0, 24.195]} />
                        <group name="mainAishaom" position={[0, 0, 28.29]} />
                        <group name="mainAishafunm" position={[0, 0, 26.401]} />
                        <group
                          name="mainAishablinkcute"
                          position={[0, 0, 20.316]}
                        />
                        <group
                          name="mainAishalikeeye"
                          position={[0, 0, 21.612]}
                        />
                        <group name="mainAishallm" position={[0, 0, 22.641]} />
                        <group
                          name="mainAishanormaleye"
                          position={[0, 0, 22.943]}
                        />
                        <group name="mainAishaLm" />
                        <group name="mainAishacuteeye1" />
                        <group name="mainAishaemo" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/CatAnime.glb");

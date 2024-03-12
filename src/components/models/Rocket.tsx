import React, {useEffect, useRef} from "react";
import { useGLTF } from "@react-three/drei";

export function Rocket(props) {
    const { nodes, materials } = useGLTF("/rocket.glb");
    
    useEffect(() => {
        
    })
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_3.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_4.geometry}
                    material={materials["Material.004"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/rocket.glb");

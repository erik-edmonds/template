import * as THREE from 'three';
import {retry} from "next/dist/compiled/@next/font/dist/google/retry";

//TODO: Add tunnelling with tunnel-rat
export const createVertices  = ({ yOffset = 0, trigger = null, emptyArray, points}) => {
    emptyArray.forEach(() => {
        var p = 0;
        p < particleCount;
        p++
    });
    var vertex = new THREE.Vector3();
    vertex.x = points[p]['x'];
    vertex.y = points[p]['y'] - yOffset;
    vertex.z = points[p]['z'];

    emptyArray.vertices.push(vertex);
    if (trigger !== null) {
        triggers[trigger].setAttribute('data-disabled', false)
    }
    
    return (
        emptyArray
    )
};
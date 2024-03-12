import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";

console.clear();

class Particles extends THREE.Points {
  constructor(gu) {
    let particlePos = []; //vec4 (speed, shift radius, phase, reserved);
    let particleAlpha = []; //vec4 (phase, speed, reserved, reserved)
    let g = new THREE.BufferGeometry().setFromPoints(
      new Array(1000).fill().map((_) => {
        
        particlePos.push(Math.random() * 0.2 + 0.2, Math.random() + 1, Math.random(), 0);
        particleAlpha.push(Math.random(), Math.random() * 0.4 + 0.1, 0, 0);
        
        let r = 5;
        return new THREE.Vector3().setFromCylindricalCoords(
          Math.sqrt(r * r * Math.random()),
          Math.random() * Math.PI * 2,
          Math.random() * 10
        );
      })
    ).setAttribute("particlePos", new THREE.Float32BufferAttribute(particlePos, 4))
    .setAttribute("particleAlpha", new THREE.Float32BufferAttribute(particleAlpha, 4));
    
    let m = new THREE.PointsMaterial({
      size: 0.5,
      color: "white",
      transparent: true,
      depthTest: false,
      onBeforeCompile: (shader) => {
        shader.uniforms.time = gu.time;
        shader.uniforms.heightLimMin = { value: 0 };
        shader.uniforms.heightLimMax = { value: 10 };
        shader.vertexShader = `
          uniform float time;
          uniform float heightLimMin;
          uniform float heightLimMax;
          attribute vec4 particlePos;
          attribute vec4 particleAlpha;
          varying float vParticleAlpha;
          mat2 rot(float a){float c = cos(a); float s = sin(a); return mat2(c, s, -s, c);}
          ${noise}
          ${shader.vertexShader}
        `.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
            float t = time;
          
            vParticleAlpha = sin(mod((particleAlpha.x + t * particleAlpha.y) * PI2, PI2)) * 0.5 + 0.5;
                        
            float hGap = heightLimMax - heightLimMin;
            float halfGap = hGap * 0.5;
            
            float verticalSpeed = particlePos.x;
            float verticalShift = mod((position.y - heightLimMin) + verticalSpeed * t, hGap);
            transformed.y = heightLimMin + verticalShift; // make it looped on Y-axis
            float verticalFade = smoothstep(halfGap, halfGap - 1., abs(verticalShift - halfGap)); // for both top and bottom
            vParticleAlpha *= verticalFade;
            
            // particle shift
            float n = snoise(vec4(position, t * 0.05));
            float radius = particlePos.y;
            float phase = particlePos.z;
            
            float angle = (phase + n) * PI ;
            vec2 shiftVec = rot(angle) * vec2(radius, 0.);
            
            transformed.xz += shiftVec; // make it shifting
            
          `
        ).replace(
          `gl_PointSize = size;`,
          `gl_PointSize = size * vParticleAlpha;`
        );
        //console.log(shader.vertexShader);
        shader.fragmentShader = `
          varying float vParticleAlpha;
          ${shader.fragmentShader}
        `.replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
          vec2 uv = gl_PointCoord.xy - 0.5;
          float d = sqrt(dot(uv, uv));
          if(d > 0.5) discard;
          float f = smoothstep(0.5, 0., d);
          f *= f * f * f * f;
          f = f * 0.95 + 0.05;
          diffuseColor.a = vParticleAlpha * f;
          `
        );
        //console.log(shader.fragmentShader);
      }
    });
    super(g, m);
  }
}

let scene = new THREE.Scene();
scene.background = new THREE.Color("maroon");
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 5, 10);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", (event) => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 5, 0);

let gu = {
  time: { value: 0 }
};

let grid = new THREE.GridHelper();
scene.add(grid);

let particles = new Particles(gu);
scene.add(particles);

let clock = new THREE.Clock();

renderer.setAnimationLoop((_) => {
  let t = clock.getElapsedTime();
  gu.time.value = t;
  controls.update();
  renderer.render(scene, camera);
});
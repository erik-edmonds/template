#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D s_noise;
uniform bool u_transition;
uniform float u_transition_val;

uniform sampler2D b_prime;
uniform sampler2D b_position;

varying vec3 v_colour;
varying float v_fogDepth;

vec2 getScreenSpace() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

    return uv;
}

void main() {
    vec2 uv = gl_PointCoord.xy - .5;
    vec2 s = gl_FragCoord.xy / u_resolution.xy;

    float l = length(uv);
    float c = smoothstep(.5, 0., l);
    float fog = smoothstep(-200., -1., v_fogDepth);
    float opacity = c * fog;
    
    float fade = smoothstep(1., 0., u_transition_val);

    gl_FragColor = vec4(
        mix(
            vec3(1),
            mix(vec3(1), v_colour, opacity),
            fade),
        1.);
}

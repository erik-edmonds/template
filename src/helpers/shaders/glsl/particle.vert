attribute vec4 a_position;
attribute vec3 a_colour;
attribute vec2 a_reference;

uniform float u_time;
uniform mat4 u_m_model;
uniform mat4 u_m_view;
uniform mat4 u_m_MVP;
uniform mat4 u_m_proj;

uniform sampler2D b_position;
uniform sampler2D b_velocity;

varying vec3 v_colour;
varying float v_fogDepth;

float random(vec2 st) {
    return fract(sin(dot(st,
    vec2(12.9898,78.233)))*
    43758.5453123);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float hash21(vec2 p) {
    p = fract(p * vec2(233.34, 851.74));
    p += dot(p, p + 23.45);
    return fract(p.x * p.y);
}


void main() {
    vec3 position = texture2D(b_position, a_reference).xyz;
    vec3 velocity = texture2D(b_velocity, a_reference).xyz;

    vec4 pos = vec4(position * .5, 1.);

    vec4 mvPos = u_m_view * u_m_model * pos;

    float il = 1. / pow(length(mvPos.xyz), 2.);

    v_fogDepth = mvPos.z;

    float isq = ( 1. / -mvPos.z );
    isq = pow(il, .66);

    float b = .5 * smoothstep(0., .1, length(velocity));

    gl_Position = u_m_proj * mvPos;
    float r = random(a_reference);
    float r1 = r;
    r *= r*r;
    gl_PointSize = (r) * 500. * isq;
    v_colour = hsv2rgb(vec3(r1*.2+.4, r*.8, b));
}

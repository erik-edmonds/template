#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D s_noise;

uniform sampler2D b_prime;
uniform sampler2D b_blur;

varying vec3 v_colour;

vec2 getScreenSpace() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

    return uv;
}

void main() {
    vec2 uv = getScreenSpace();

    vec2 s = gl_FragCoord.xy / u_resolution.xy;

    vec4 n1 = texture2D(b_blur, s);
    vec4 n = clamp(texture2D(b_prime, s), 0., 1.);

    vec4 c = (n1*.8 + n*.2);

    gl_FragColor = clamp(c, 0., 1.);
}

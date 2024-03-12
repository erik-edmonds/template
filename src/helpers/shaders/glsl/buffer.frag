#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D s_noise;
uniform bool u_transition;
uniform float u_transition_val;

uniform sampler2D b_prime;
uniform sampler2D b_blur;
uniform sampler2D b_bloom;

varying vec3 v_colour;

vec2 getScreenSpace() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

    return uv;
}

void main() {
    vec2 uv = getScreenSpace();

    vec2 s = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = .5/u_resolution.xy;

    vec4 bloom = texture2D(b_bloom, s);
    vec4 n = texture2D(b_prime, s);

    float fade = smoothstep(1., 0., u_transition_val);

    gl_FragColor = vec4(mix(vec3(1), (n.rgb * .5 + bloom.rgb * .5), fade) * (1. + (1.-fade)), 1.);
}

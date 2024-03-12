#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_delta;
uniform sampler2D s_noise;
uniform bool u_nreset;

uniform sampler2D b_prime;
uniform sampler2D b_velocity;
uniform sampler2D b_position;
uniform sampler2D b_origin;

vec2 getScreenSpace() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

    return uv;
}

vec3 hash33(vec3 p) {
    return fract(vec3(
    sin(p.x) * 43543.454354,
    sin(p.y) * 7531.154354,
    sin(p.z) * 10053.75315
    ));
}

void main() {
    vec2 uv = getScreenSpace();
    vec2 s = gl_FragCoord.xy / u_resolution.xy;

    vec3 position = texture2D(b_position, s).xyz;
    vec3 velocity = texture2D(b_velocity, s).xyz;

    vec3 pos = position + velocity * .005;

    if(length(pos) > 100.) {
        pos = pos / length(pos) * 2.;
    }

    gl_FragColor = vec4(pos, 1.0);
}

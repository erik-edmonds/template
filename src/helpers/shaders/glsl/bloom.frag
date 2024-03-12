#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D s_noise;
uniform int u_bloomstep;

uniform sampler2D b_prime;
uniform sampler2D b_blur;
uniform sampler2D b_bloom;

varying vec3 v_colour;

vec2 getScreenSpace() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

    return uv;
}

vec4 tex(sampler2D tex, vec2 co) {
    return clamp(texture2D(tex, co), 0., 1.);
}

void main() {
    vec2 uv = getScreenSpace();

    vec2 s = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = 1./u_resolution.xy;

    vec4 n1;
    vec4 c;
    vec4 n = texture2D(b_prime, s);
    vec4 n2 = n;
    if(u_bloomstep == 0) {
        n1 = tex(b_blur, s);
        n1 += tex(b_blur, s + vec2(0, p.y));
        n1 += tex(b_blur, s + vec2(0, p.y*2.));
        n1 += tex(b_blur, s + vec2(0, p.y*3.));
        n1 += tex(b_blur, s + vec2(0, p.y*-1.));
        n1 += tex(b_blur, s + vec2(0, p.y*-2.));
        n1 += tex(b_blur, s + vec2(0, p.y*-3.));
        n1/=6.;
        c = n1;
    } else if(u_bloomstep == 1) {
        n1 = tex(b_bloom, s);
        n1 += tex(b_bloom, s + vec2(p.x, 0.));
        n1 += tex(b_bloom, s + vec2(p.x*2., 0));
        n1 += tex(b_bloom, s + vec2(p.x*3., 0));
        n1 += tex(b_bloom, s + vec2(p.x*-1., 0));
        n1 += tex(b_bloom, s + vec2(p.x*-2., 0));
        n1 += tex(b_bloom, s + vec2(p.x*-3., 0));
        n1/=6.;
        c = pow(n1, vec4(2.));
    }

    gl_FragColor = clamp(n1, 0., 1.);
}

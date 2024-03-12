#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D s_noise;
uniform int u_frame;
uniform float u_nsize;
uniform float u_seed;

uniform sampler2D b_velocity;
uniform sampler2D b_position;

#define PI 3.141592653589793
#define HPI 1.5707963267948966
#define TAU 6.283185307179586
#define G 0.67408

const float nudge = 0.739513;
float normalizer = 1.0 / sqrt(1.0 + nudge*nudge);
float SpiralNoiseC(vec3 p)
{
    float n = 0.0;
    float iter = 1.0;
    for (int i = 0; i < 8; i++)
    {
        n += -abs(sin(p.y*iter) + cos(p.x*iter)) / iter;
        p.xy += vec2(p.y, -p.x) * nudge;
        p.xy *= normalizer;
        p.xz += vec2(p.z, -p.x) * nudge;
        p.xz *= normalizer;
        iter *= 1.733733;
    }
    return n;
}
mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

vec3 hash33(vec3 p) {
    return fract(vec3(
    sin(p.x) * 43543.454354,
    sin(p.y) * 7531.154354,
    sin(p.z) * 10053.75315
    ));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 position = texture2D(b_position, uv).xyz;
    vec3 velocity = texture2D(b_velocity, uv).xyz;
    vec3 acceleration = vec3(position);

    float tm = u_time;

    float l = length(position);
    position = ( vec4(position, 1.) * rotationMatrix(vec3(sin(tm * 25.), cos(tm * 10.), sin(tm) * cos(tm * 5.)), .5 + 10. / l) ).xyz;

    vec3 spherical = vec3(1./l, atan(position.y, position.x), acos(position.z / l));
    float n = SpiralNoiseC(position*.5);
    n *= 1.+n;

    float t = tm * -5.;

    float oset = sin(cos(t)*5.) * 20. + 10.;

    float a = n + smoothstep(10.+oset, 11.+oset, l)*-5.;

    acceleration.x = spherical.x * sin(spherical.z) * cos(spherical.y) * a;
    acceleration.y = spherical.x * sin(spherical.z) * sin(spherical.y) * a;
    acceleration.z = spherical.x * cos(spherical.z) * a;

    vec3 vel = velocity * .99 + acceleration;

    float st = (sin(t)*.5)*.2;

    gl_FragColor = vec4(vel, 1.0);
}

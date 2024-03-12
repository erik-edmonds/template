attribute vec4 a_position;

uniform mat4 u_modelViewMatrix;
uniform mat4 u_projectionMatrix;

void main() {
    gl_Position = a_position;
}

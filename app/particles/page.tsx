function _defineProperty(obj, key, value) 
{
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } 
  else {
    obj[key] = value;
  }
  return obj;
}
  
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);
  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
  return value;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);
  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }return descriptor.value;
}

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  if (receiver !== classConstructor) {
    throw new TypeError("Private static access of wrong provenance");
  } if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

import { Vec2, Vec3, Mat2, Mat3, Mat4 } from 'https://cdn.skypack.dev/wtc-math';

console.clear();

function powerOf2(v) {
  return v && !(v & v - 1);
}

function nextPow2(v) {
  v--;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
}

const pow2Image = c => {
  const newWidth = powerOf2(c.width) ? c.width : nextPow2(c.width);
  const newHeight = powerOf2(c.height) ? c.height : nextPow2(c.height);
  const _c = document.createElement('canvas');
  const ctx = _c.getContext('2d');
  _c.width = newWidth;
  _c.height = newHeight;
  ctx.drawImage(c, 0, 0, newWidth, newHeight);
  return _c;
};

const asyncImageLoad = function (img, src) {
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const glEnumToString = function () {
  const haveEnumsForType = {};
  const enums = {};

  function addEnums(gl) {
    const type = gl.constructor.name;
    if (!haveEnumsForType[type]) {
      for (const key in gl) {
        if (typeof gl[key] === 'number') {
          const existing = enums[gl[key]];
          enums[gl[key]] = existing ? `${existing} | ${key}` : key;
        }
      }
      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || (typeof value === 'number' ? `0x${value.toString(16)}` : value);
  };
}();

const addExtensions = ctx => {
  // Set up the extensions
  ctx.getExtension('OES_standard_derivatives');
  ctx.getExtension('EXT_shader_texture_lod');
  ctx.getExtension('OES_texture_float');
  ctx.getExtension('WEBGL_color_buffer_float');
  ctx.getExtension('OES_texture_float_linear');
  ctx.getExtension('EXT_color_buffer_float');
};
function createContext(c, opt_attribs, params) {
  const ctx = c.getContext("webgl", params) || this._el.getContext("experimental-webgl", params);

  addExtensions(ctx);

  return ctx;
}var _blending = new WeakMap();var _blendingEnabled = new WeakMap();

class Renderer {
  constructor(canvas, options) {_defineProperty(this, "isWebgl2", false);_blending.set(this, { writable: true, value: void 0 });_blendingEnabled.set(this, { writable: true, value: false });
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(Renderer, Renderer, _defaultOptions), options);
    this.width = options.width;
    this.height = options.height;
    this.pxRatio = options.pxRatio;
    this.clearing = options.clearing;
    this.depthTesting = options.depthTesting;
    this.canvas = canvas || document.createElement('canvas');
    this.canvas.width = this.width * this.pxRatio;
    this.canvas.height = this.height * this.pxRatio;
    this.premultipliedAlpha = options.premultipliedAlpha;

    this.ctx = this.canvas.getContext("webgl", options) || this.canvas.getContext("experimental-webgl", options);

    this.ctx.viewportWidth = this.canvas.width;
    this.ctx.viewportHeight = this.canvas.height;

    this.uniformResolution = new Uniform(this.ctx, 'resolution', Uniform.TYPE_V2, [this.canvas.width, this.canvas.height]);

    this.addExtensions();
  }
  resize(w, h, ratio) {
    this.width = w;
    this.height = h;
    this.pxRatio = ratio || this.pxRatio;
    this.canvas.width = this.width * this.pxRatio;
    this.canvas.height = this.height * this.pxRatio;

    this.ctx.viewportWidth = this.canvas.width;
    this.ctx.viewportHeight = this.canvas.height;

    this.uniformResolution = new Uniform(this.ctx, 'resolution', Uniform.TYPE_V2, [this.canvas.width, this.canvas.height]);
  }
  setViewport(dimensions) {
    let w = this.width * this.pxRatio;
    let h = this.height * this.pxRatio;
    if (dimensions) {
      w = dimensions[0];
      h = dimensions[1];
    }
    this.ctx.viewport(0, 0, w, h);
    this.uniformResolution = new Uniform(this.ctx, 'resolution', Uniform.TYPE_V2, [w, h]);
  }
  addExtensions() {
    this.ctx.getExtension('OES_standard_derivatives');
    this.ctx.getExtension('EXT_shader_texture_lod');
    this.ctx.getExtension('OES_texture_float');
    this.ctx.getExtension('WEBGL_color_buffer_float');
    this.ctx.getExtension('OES_texture_float_linear');
    this.ctx.getExtension('EXT_color_buffer_float');
  }
  setupProgram(program, buffers, attributes, uniforms) {
    this.currentProgram = program;
    this.ctx.useProgram(program.program);

    this.premultiplied = program.premultiplied;

    this.depthTesting = program.depthTesting;

    if (program.blending === Program.BLENDING_NORMAL && program.transparent === false) {
      this.blending = Program.BLENDING_OFF;
    } else {
      this.blending = program.blending;
    }

    this.clearColour = program.clearColour;
    const a = this.clearColour[3];

    if (this.premultipliedAlpha) this.clearColour = this.clearColour.map((c, i) => c * a);

    this.ctx.clearColor(...this.clearColour);

    buffers.forEach(buffer => {
      buffer.link(program.program);
    });

    // this.ctx.enable(ctx.DEPTH_TEST);
    if (this.depthTesting) this.ctx.enable(ctx.DEPTH_TEST);else
    this.ctx.disable(ctx.DEPTH_TEST);

    uniforms.forEach(uniform => {
      uniform.bind(program.program);
    });
    this.uniformResolution.bind(program.program);
  }
  render(points, buffer) {
    this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, (buffer === null || buffer === void 0 ? void 0 : buffer.fb) || null);
    if (this.clearing) {
      this.ctx.clear(this.ctx.COLOR_BUFFER_BIT);

      if (this.depthTesting) this.ctx.clear(this.ctx.DEPTH_BUFFER_BIT);
    }
    switch (this.currentProgram.renderType) {
      case Program.RENDER_TRIANGLES:
        this.ctx.drawArrays(this.ctx.TRIANGLES, 0, points);
        break;
      case Program.RENDER_STRIP:
        this.ctx.drawArrays(this.ctx.TRIANGLE_STRIP, 0, points);
        break;
      case Program.RENDER_LINES:
        this.ctx.drawArrays(this.ctx.LINE_STRIP, 0, points);
        break;
      case Program.RENDER_LINELOOP:
        this.ctx.drawArrays(this.ctx.LINE_LOOP, 0, points);
        break;
      case Program.RENDER_POINTS:
        this.ctx.drawArrays(this.ctx.POINTS, 0, points);
        break;}


  }

  /* SETTERS AND GETTERS */
  get blending() {
    return _classPrivateFieldGet(this, _blending) || Program.BLENDING_NORMAL;
  }
  set blending(blending) {

    if (blending === Renderer.BLENDING_DEBUG) {

      if (!this.breakLog) {
        console.log(blending, Renderer.BLENDING_OFF, this.premultiplied);
        this.breakLog = true;
      }
      _classPrivateFieldSet(this, _blending, blending);
      this.ctx.enable(this.ctx.BLEND);
      this.ctx.blendFuncSeparate(this.ctx.ONE, this.ctx.ONE_MINUS_SRC_ALPHA, this.ctx.ONE, this.ctx.ONE_MINUS_SRC_ALPHA);
      return;
    }

    _classPrivateFieldSet(this, _blending, blending);
    if (blending === Renderer.BLENDING_OFF) {
      this.ctx.disable(this.ctx.BLEND);
      _classPrivateFieldSet(this, _blendingEnabled, false);
      return;
    }
    if (_classPrivateFieldGet(this, _blendingEnabled) === false) {
      this.ctx.enable(this.ctx.BLEND);
      // this.ctx.alphaFunc(this.ctx.GL_GREATER, 0.5);
      // this.ctx.enable(this.ctx.GL_ALPHA_TEST);
      _classPrivateFieldSet(this, _blendingEnabled, true);
    }

    if (this.premultiplied) {
      switch (this.blending) {
        case Renderer.BLENDING_NORMAL:
          this.ctx.blendFuncSeparate(this.ctx.ONE, this.ctx.ONE_MINUS_SRC_ALPHA, this.ctx.ONE, this.ctx.ONE_MINUS_SRC_ALPHA);
          break;
        case Renderer.BLENDING_ADDITIVE:
          this.ctx.blendFunc(this.ctx.ONE, this.ctx.ONE);
          break;
        case Renderer.BLENDING_SUBTRACTIVE:
          this.ctx.blendFuncSeparate(this.ctx.ZERO, this.ctx.ZERO, this.ctx.ONE_MINUS_SRC_COLOR, this.ctx.ONE_MINUS_SRC_ALPHA);
          break;
        case Renderer.BLENDING_MULTIPLY:
          this.ctx.blendFuncSeparate(this.ctx.ZERO, this.ctx.SRC_COLOR, this.ctx.ZERO, this.ctx.SRC_ALPHA);
          break;}

    } else {
      switch (this.blending) {
        case Renderer.BLENDING_NORMAL:
          this.ctx.blendFuncSeparate(this.ctx.SRC_ALPHA, this.ctx.ONE_MINUS_SRC_ALPHA, this.ctx.ONE, this.ctx.ONE_MINUS_SRC_ALPHA);
          break;
        case Renderer.BLENDING_ADDITIVE:
          this.ctx.blendFunc(this.ctx.SRC_ALPHA, this.ctx.ONE);
          break;
        case Renderer.BLENDING_SUBTRACTIVE:
          this.ctx.blendFunc(this.ctx.ZERO, this.ctx.ONE_MINUS_SRC_COLOR);
          break;
        case Renderer.BLENDING_MULTIPLY:
          this.ctx.blendFunc(this.ctx.ZERO, this.ctx.SRC_COLOR);
          break;}

    }
  }}var _defaultOptions = { writable: true, value: { width: 512, height: 512, pxRatio: Math.min(window.devicePixelRatio, 2), clearing: true, depthTesting: true, premultipliedAlpha: true } };_defineProperty(Renderer, "BLENDING_DEBUG", -1);_defineProperty(Renderer, "BLENDING_NORMAL", 1);_defineProperty(Renderer, "BLENDING_ADDITIVE", 2);_defineProperty(Renderer, "BLENDING_SUBTRACTIVE", 4);_defineProperty(Renderer, "BLENDING_MULTIPLY", 8);_defineProperty(Renderer, "BLENDING_OFF", 16);

class Buffer {
  constructor(ctx, data, options) {
    this.ctx = ctx;
    this.name = name;
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(Buffer, Buffer, _defaults), options);
    this.attributes = options.attributes.map(a => Object.assign({}, _classStaticPrivateFieldSpecGet(Buffer, Buffer, _defaultAttribute), a));

    this.normalized = options.normalized;
    this.drawType = options.drawType;
    this.type = options.type;
    if (data instanceof Array) data = new Float32Array(data);
    this.data = data;
    this.buffer = ctx.createBuffer();
  }

  link(program) {
    this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.buffer);
    this.ctx.bufferData(
    this.ctx.ARRAY_BUFFER,
    this.data,
    this.drawType);
    let location = this.ctx.getAttribLocation(program, `a_${this.name}`);

    this.attributes.forEach(attribute => {
      const location = this.ctx.getAttribLocation(program, `a_${attribute.name}`);
      this.ctx.vertexAttribPointer(location, attribute.numComponents, this.type, this.normalized, attribute.stride, attribute.offset);
      this.ctx.enableVertexAttribArray(location);
    });
  }

  get length() {
    return this.data.length;
  }}var _defaultAttribute = { writable: true, value: { numComponents: 2, offset: 0, stride: 0 } };var _defaults = { writable: true, value: { attributes: [{ name: 'position' }], normalized: false, drawType: window.WebGLRenderingContext.STATIC_DRAW, type: window.WebGLRenderingContext.FLOAT } };var _vShader = new WeakMap();var _fShader = new WeakMap();var _p = new WeakMap();var _renderType = new WeakMap();

class Program {
  constructor(ctx, vertexShaderSource, fragmentShaderSource, options = {}) {_vShader.set(this, { writable: true, value: void 0 });_fShader.set(this, { writable: true, value: void 0 });_p.set(this, { writable: true, value: void 0 });_renderType.set(this, { writable: true, value: void 0 });
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(Program, Program, _defaultOptions2), options);

    this.ctx = ctx;

    this.renderType = options.renderType;

    this.clearColour = options.clearColour;
    this.blending = options.blending;
    this.premultiplied = options.premultiplied;
    this.transparent = options.transparent;
    this.depthTesting = options.depthTesting;

    // Create the shaders
    this.vShader = Program.createShaderOfType(this.ctx, this.ctx.VERTEX_SHADER, vertexShaderSource);
    this.fShader = Program.createShaderOfType(this.ctx, this.ctx.FRAGMENT_SHADER, fragmentShaderSource);

    // Create the program and link the shaders
    _classPrivateFieldSet(this, _p, this.ctx.createProgram());
    this.ctx.attachShader(_classPrivateFieldGet(this, _p), this.vShader);
    this.ctx.attachShader(_classPrivateFieldGet(this, _p), this.fShader);

    this.ctx.linkProgram(_classPrivateFieldGet(this, _p));

    // Check the result of linking
    var linked = this.ctx.getProgramParameter(_classPrivateFieldGet(this, _p), this.ctx.LINK_STATUS);
    if (!linked) {
      var error = this.ctx.getProgramInfoLog(_classPrivateFieldGet(this, _p));
      console.log('Failed to link program: ' + error);
      this.ctx.deleteProgram(_classPrivateFieldGet(this, _p));
      this.ctx.deleteShader(this.fShader);
      this.ctx.deleteShader(this.vShader);
    }
  }

  get program() {
    return _classPrivateFieldGet(this, _p);
  }

  /* SETTERS AND GETTERS */

  set renderType(value) {
    if ([
    Program.RENDER_TRIANGLES,
    Program.RENDER_STRIP,
    Program.RENDER_LINES,
    Program.RENDER_LINELOOP,
    Program.RENDER_POINTS].
    indexOf(value) > -1) _classPrivateFieldSet(this, _renderType, value);
  }
  get renderType() {
    return _classPrivateFieldGet(this, _renderType);
  }

  /**
   * Static Methods
   */

  /**
   * Create a shader of a given type given a context, type and source.
   *
    * @static
   * @param  {WebGLContext} ctx The context under which to create the shader
   * @param  {WebGLShaderType} type The shader type, vertex or fragment
   * @param  {string} source The shader source.
   * @return {WebGLShader} The created shader
   */
  static createShaderOfType(ctx, type, source) {
    const shader = ctx.createShader(type);
    ctx.shaderSource(shader, source);
    ctx.compileShader(shader);

    // Check the compile status
    const compiled = ctx.getShaderParameter(shader, ctx.COMPILE_STATUS);
    if (!compiled) {
      // Something went wrong during compilation; get the error
      const lastError = ctx.getShaderInfoLog(shader);
      console.error(`${Program.addLineNumbersWithError(source, lastError)}\nError compiling ${glEnumToString(ctx, type)}: ${lastError}`);
      ctx.deleteShader(shader);
      return null;
    }

    return shader;
  }
  static addLineNumbersWithError(src, log = '') {
    console.log(src);
    const errorRE = /ERROR:\s*\d+:(\d+)/gi;
    // Note: Error message formats are not defined by any spec so this may or may not work.
    const matches = [...log.matchAll(errorRE)];
    const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
      const lineNo = parseInt(m[1]);
      const next = matches[ndx + 1];
      const end = next ? next.index : log.length;
      const msg = log.substring(m.index, end);
      return [lineNo - 1, msg];
    }));
    return src.split('\n').map((line, lineNo) => {
      const err = lineNoToErrorMap.get(lineNo);
      return `${lineNo + 1}: ${line}${err ? `\n\n^^^ ${err}` : ''}`;
    }).join('\n');
  }}_defineProperty(Program, "RENDER_TRIANGLES", 0);_defineProperty(Program, "RENDER_STRIP", 1);_defineProperty(Program, "RENDER_LINES", 2);_defineProperty(Program, "RENDER_LINELOOP", 4);_defineProperty(Program, "RENDER_POINTS", 8);var _defaultOptions2 = { writable: true, value: { renderType: Program.RENDER_TRIANGLES, clearColour: [1.0, 1.0, 1.0, 1.0], blending: Renderer.BLENDING_OFF, premultiplied: true, transparent: false, depthTesting: true } };var _prefix = new WeakMap();

class Uniform {
  constructor(ctx, name, type, value) {_prefix.set(this, { writable: true, value: 'u' });
    this.ctx = ctx;
    this.name = name;
    this.type = type;
    this.value = value;
  }

  prebind() {

  }

  bind(program) {
    this.prebind(program);
    const location = this.ctx.getUniformLocation(program, `${_classPrivateFieldGet(this, _prefix)}_${this.name}`);
    switch (this.type) {
      case Uniform.TYPE_INT:
        if (!isNaN(this.value)) this.ctx.uniform1i(location, this.value);
        break;
      case Uniform.TYPE_FLOAT:
        if (!isNaN(this.value)) this.ctx.uniform1f(location, this.value);
        break;
      case Uniform.TYPE_V2:
        if (this.value instanceof Array && this.value.length === 2.) this.ctx.uniform2fv(location, this.value);
        break;
      case Uniform.TYPE_V3:
        if (this.value instanceof Array && this.value.length === 3.) this.ctx.uniform3fv(location, this.value);
        break;
      case Uniform.TYPE_V4:
        if (this.value instanceof Array && this.value.length === 4.) this.ctx.uniform4fv(location, this.value);
        break;
      case Uniform.TYPE_BOOL:
        if (!isNaN(this.value)) this.ctx.uniform1i(location, this.value);
        break;
      case Uniform.TYPE_M2:
        if (this.value instanceof Array && this.value.length === 4.) this.ctx.uniformMatrix2fv(location, false, this.value);
      case Uniform.TYPE_M3:
        if (this.value instanceof Array && this.value.length === 9.) this.ctx.uniformMatrix3fv(location, false, this.value);
      case Uniform.TYPE_M4:
        if (this.value instanceof Array && this.value.length === 16.) this.ctx.uniformMatrix4fv(location, false, this.value);
        break;}

  }}_defineProperty(Uniform, "TYPE_INT", 0);_defineProperty(Uniform, "TYPE_FLOAT", 1);_defineProperty(Uniform, "TYPE_V2", 2);_defineProperty(Uniform, "TYPE_V3", 3);_defineProperty(Uniform, "TYPE_V4", 4);_defineProperty(Uniform, "TYPE_BOOL", 5);_defineProperty(Uniform, "TYPE_M2", 6);_defineProperty(Uniform, "TYPE_M3", 7);_defineProperty(Uniform, "TYPE_M4", 8);var _prefix2 = new WeakMap();

class Texture extends Uniform {
  constructor(ctx, name, options) {
    super(ctx, name, 0, null);_prefix2.set(this, { writable: true, value: 's' });
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(Texture, Texture, _defaultOptions3), options);
    this.textureType = options.textureType;
    this.minFilter = options.minFilter;
    this.magFilter = options.magFilter;
    this.makePowerOf2 = options.makePowerOf2;
    this.generateMipMap = options.generateMipMap;
    this.url = options.url;
    this.data = options.data;
    this.value = Texture.masteri++;
  }
  async preload() {
    const store = {};

    const img = new Image();
    img.crossOrigin = "anonymous";

    await asyncImageLoad(img, this.url);

    if (this.makePowerOf2) this.image = pow2Image(img);else
    this.image = img;

    // this.loadTexture(gl, n, store);
    return this;
  }

  prebind(program) {
    if (!this.image) return;

    const texture = this.ctx.createTexture(); // Create the texture object

    this.ctx.pixelStorei(this.ctx.UNPACK_FLIP_Y_WEBGL, true);
    this.ctx.bindTexture(this.ctx.TEXTURE_2D, texture);

    this.ctx.activeTexture(this.ctx.TEXTURE0 + this.value);

    // Set the parameters based on the passed type
    // In WebGL images are wrapped by default, so we don't need to check for that
    if (this.textureType === Texture.IMAGETYPE_MIRROR) {
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.MIRRORED_REPEAT);
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.MIRRORED_REPEAT);
    } else if (this.textureType === Texture.IMAGETYPE_REGULAR) {
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.CLAMP_TO_EDGE);
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.CLAMP_TO_EDGE);
    }

    this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.minFilter);
    this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.magFilter);

    // Upload the image into the texture.
    if (this.data) {
      this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, this.data);
    } else {
      this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, this.image);
    }

    if (this.generateMipMap) this.ctx.generateMipmap(this.ctx.TEXTURE_2D);
  }}var _defaultOptions3 = { writable: true, value: { textureType: 0, minFilter: window.WebGLRenderingContext.LINEAR, magFilter: window.WebGLRenderingContext.LINEAR, makePowerOf2: false, generateMipMap: false } };_defineProperty(Texture, "masteri", 0);_defineProperty(Texture, "IMAGETYPE_REGULAR", 0);_defineProperty(Texture, "IMAGETYPE_TILE", 1);_defineProperty(Texture, "IMAGETYPE_MIRROR", 2);var _fb = new WeakMap();var _fb2 = new WeakMap();var _activeFB = new WeakMap();var _name = new WeakMap();var _width = new WeakMap();var _height = new WeakMap();var _pxRatio = new WeakMap();var _tiling = new WeakMap();var _texdepth = new WeakMap();var _data = new WeakMap();

class FrameBuffer {
  constructor(renderer, name, options) {_fb.set(this, { writable: true, value: void 0 });_fb2.set(this, { writable: true, value: void 0 });_activeFB.set(this, { writable: true, value: void 0 });_name.set(this, { writable: true, value: void 0 });_width.set(this, { writable: true, value: void 0 });_height.set(this, { writable: true, value: void 0 });_pxRatio.set(this, { writable: true, value: void 0 });_tiling.set(this, { writable: true, value: Texture.IMAGETYPE_REGULAR });_texdepth.set(this, { writable: true, value: FrameBuffer.TEXTYPE_HALF_FLOAT_OES });_data.set(this, { writable: true, value: void 0 });
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(FrameBuffer, FrameBuffer, _defaultOptions4), options);

    this.width = options.width;
    this.height = options.height;
    this.pxRatio = options.pxRatio;
    this.tiling = options.tiling;
    this.texdepth = options.texdepth;
    this.depthTesting = options.depthTesting;

    _classPrivateFieldSet(this, _name, name);
    this.value = Texture.masteri++;

    this.ctx = renderer.ctx;
    this.renderer = renderer;

    this.data = options.data;

    _classPrivateFieldSet(this, _fb, this.createFrameBuffer());
    _classPrivateFieldSet(this, _fb2, this.createFrameBuffer());
    _classPrivateFieldSet(this, _activeFB, _classPrivateFieldGet(this, _fb));
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
    _classPrivateFieldSet(this, _fb, this.createFrameBuffer());
    _classPrivateFieldSet(this, _fb2, this.createFrameBuffer());
    _classPrivateFieldSet(this, _activeFB, _classPrivateFieldGet(this, _fb));
  }
  createFrameBuffer() {
    const targetTexture = this.ctx.createTexture();
    this.ctx.bindTexture(this.ctx.TEXTURE_2D, targetTexture);
    {
      // define size and format of level 0
      const level = 0;
      let internalFormat = this.ctx.RGBA;
      const border = 0;
      let format = this.ctx.RGBA;
      let t;
      if (this.texdepth === FrameBuffer.TEXTYPE_FLOAT) {
        const e = this.ctx.getExtension('OES_texture_float');
        t = this.ctx.FLOAT;
        // internalFormat = this.ctx.FLOAT;
        // format = this.ctx.FLOAT;
      } else if (this.texdepth & FrameBuffer.TEXTYPE_HALF_FLOAT_OES) {
        // t = gl.renderer.isWebgl2 ? e.HALF_FLOAT : e.HALF_FLOAT_OES;
        //     gl.renderer.extensions['OES_texture_half_float'] ? gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES : 
        //     gl.UNSIGNED_BYTE;
        const e = this.ctx.getExtension('OES_texture_half_float');
        t = this.renderer.isWebgl2 ? this.ctx.HALF_FLOAT : e.HALF_FLOAT_OES;
        // format = gl.RGBA;
        if (this.renderer.isWebgl2) {
          internalFormat = this.ctx.RGBA16F;
        }
        // internalFormat = gl.RGB32F;
        // format = gl.RGB32F;
        // window.gl = gl
        // t = e.HALF_FLOAT_OES;
      } else {
        t = this.ctx.UNSIGNED_BYTE;
      }
      const type = t;
      const data = this.data;
      this.ctx.texImage2D(this.ctx.TEXTURE_2D, level, internalFormat,
      this.width * this.pxRatio, this.height * this.pxRatio, border,
      format, type, data);
      // gl.generateMipmap(gl.TEXTURE_2D);

      // set the filtering so we don't need mips
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.ctx.NEAREST);
      this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.ctx.NEAREST);

      // Set the parameters based on the passed type
      if (this.tiling === Texture.IMAGETYPE_TILE) {
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.REPEAT);
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.REPEAT);
      } else if (this.tiling === Texture.IMAGETYPE_MIRROR) {
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.MIRRORED_REPEAT);
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.MIRRORED_REPEAT);
      } else if (this.tiling === Texture.IMAGETYPE_REGULAR) {
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.CLAMP_TO_EDGE);
        this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.CLAMP_TO_EDGE);
      }
    }

    // Create and bind the framebuffer
    const fb = this.ctx.createFramebuffer();
    this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, fb);

    if (this.depthTesting) {
      var ext = this.ctx.getExtension('WEBGL_depth_texture');
      let depth = this.ctx.createTexture();
      this.ctx.bindTexture(this.ctx.TEXTURE_2D, depth);
      this.ctx.texImage2D(
      this.ctx.TEXTURE_2D, 0, this.ctx.DEPTH_COMPONENT, this.width * this.pxRatio, this.height * this.pxRatio, 0, this.ctx.DEPTH_COMPONENT, this.ctx.UNSIGNED_SHORT, null);
      this.ctx.framebufferTexture2D(this.ctx.FRAMEBUFFER, this.ctx.DEPTH_ATTACHMENT, this.ctx.TEXTURE_2D, depth, 0);
    }

    // attach the texture as the first color attachment
    const attachmentPoint = this.ctx.COLOR_ATTACHMENT0;
    const level = 0;
    this.ctx.framebufferTexture2D(
    this.ctx.FRAMEBUFFER,
    attachmentPoint,
    this.ctx.TEXTURE_2D,
    targetTexture,
    level);

    return {
      fb: fb,
      frameTexture: targetTexture };

  }
  bind() {
    // find the active texture based on the index
    let uniform = this.ctx.getUniformLocation(this.renderer.currentProgram.program, `b_${_classPrivateFieldGet(this, _name)}`);

    // Set the texture unit to the uniform
    this.ctx.uniform1i(uniform, this.value);
    this.ctx.activeTexture(this.ctx.TEXTURE0 + this.value);
    // Bind the texture
    this.ctx.bindTexture(this.ctx.TEXTURE_2D, _classPrivateFieldGet(this, _activeFB).frameTexture);
  }
  render(n) {
    this.bind();

    // Finally, ping-pong the texture
    _classPrivateFieldSet(this, _activeFB, _classPrivateFieldGet(this, _activeFB) === _classPrivateFieldGet(this, _fb) ? _classPrivateFieldGet(this, _fb2) : _classPrivateFieldGet(this, _fb));

    // this.renderer.render(n, this.#activeFB);
    this.renderer.render(n, _classPrivateFieldGet(this, _activeFB), [this.width, this.height]);
  }

  set data(value) {
    if (value instanceof Float32Array) _classPrivateFieldSet(this, _data, value);
  }
  get data() {
    return _classPrivateFieldGet(this, _data) || null;
  }
  set width(value) {
    if (value > 0) _classPrivateFieldSet(this, _width, value);
  }
  get width() {
    return _classPrivateFieldGet(this, _width) || 1;
  }
  set height(value) {
    if (value > 0) _classPrivateFieldSet(this, _height, value);
  }
  get height() {
    return _classPrivateFieldGet(this, _height) || 1;
  }
  set pxRatio(value) {
    if (value > 0) _classPrivateFieldSet(this, _pxRatio, value);
  }
  get pxRatio() {
    return _classPrivateFieldGet(this, _pxRatio) || 1;
  }
  set tiling(value) {
    if ([Texture.IMAGETYPE_REGULAR, Texture.IMAGETYPE_TILE, Texture.IMAGETYPE_MIRROR].indexOf(value) > -1) _classPrivateFieldSet(this, _tiling, value);
  }
  get tiling() {
    return _classPrivateFieldGet(this, _tiling);
  }
  set texdepth(value) {
    if ([FrameBuffer.TEXTYPE_FLOAT, FrameBuffer.TEXTYPE_UNSIGNED_BYTE, FrameBuffer.TEXTYPE_HALF_FLOAT_OES].indexOf(value) > -1) _classPrivateFieldSet(this, _texdepth, value);
  }
  get texdepth() {
    return _classPrivateFieldGet(this, _texdepth);
  }}var _defaultOptions4 = { writable: true, value: { width: 512, height: 512, pxRatio: Math.min(window.devicePixelRatio, 2), tiling: Texture.IMAGETYPE_REGULAR, texdepth: FrameBuffer.TEXTYPE_HALF_FLOAT_OES, data: null, depthTesting: false } };_defineProperty(FrameBuffer, "TEXTYPE_FLOAT", 0);_defineProperty(FrameBuffer, "TEXTYPE_UNSIGNED_BYTE", 1);_defineProperty(FrameBuffer, "TEXTYPE_HALF_FLOAT_OES", 2);var _fov = new WeakMap();var _aspect = new WeakMap();var _near = new WeakMap();var _far = new WeakMap();var _pos = new WeakMap();var _target = new WeakMap();var _up = new WeakMap();var _updateDebounce = new WeakMap();var _model = new WeakMap();var _view = new WeakMap();var _proj = new WeakMap();var _MVP = new WeakMap();var _u_model = new WeakMap();var _u_view = new WeakMap();var _u_proj = new WeakMap();var _u_MVP = new WeakMap();var _name2 = new WeakMap();

class Camera {
  constructor(renderer, name, options) {_fov.set(this, { writable: true, value: void 0 });_aspect.set(this, { writable: true, value: void 0 });_near.set(this, { writable: true, value: void 0 });_far.set(this, { writable: true, value: void 0 });_pos.set(this, { writable: true, value: void 0 });_target.set(this, { writable: true, value: void 0 });_up.set(this, { writable: true, value: void 0 });_updateDebounce.set(this, { writable: true, value: void 0 });_model.set(this, { writable: true, value: void 0 });_view.set(this, { writable: true, value: void 0 });_proj.set(this, { writable: true, value: void 0 });_MVP.set(this, { writable: true, value: void 0 });_u_model.set(this, { writable: true, value: void 0 });_u_view.set(this, { writable: true, value: void 0 });_u_proj.set(this, { writable: true, value: void 0 });_u_MVP.set(this, { writable: true, value: void 0 });_name2.set(this, { writable: true, value: void 0 });
    options = Object.assign({}, _classStaticPrivateFieldSpecGet(Camera, Camera, _defaultOptions5), options);

    this.renderer = renderer;
    this.ctx = renderer.ctx;

    this.fov = options.fov;
    this.aspect = options.aspect;
    this.near = options.near;
    this.far = options.far;
    this.pos = options.pos;
    this.target = options.target;
    this.up = options.up;

    this.name = name;

    this.update(true);
  }
  update(nt = false) {
    clearTimeout(_classPrivateFieldGet(this, _updateDebounce));
    // this.#updateDebounce = setTimeout(() => {
    _classPrivateFieldSet(this, _model, new Mat4());
    _classPrivateFieldSet(this, _view, Mat4.lookAt(this.pos, this.target, this.up));
    _classPrivateFieldSet(this, _proj, Mat4.perspective(this.fov, this.aspect, this.near, this.far));
    _classPrivateFieldSet(this, _MVP, _classPrivateFieldGet(this, _proj).multiplyNew(_classPrivateFieldGet(this, _view)).multiply(_classPrivateFieldGet(this, _model)));

    _classPrivateFieldSet(this, _u_model, new Uniform(this.ctx, 'm_model', Uniform.TYPE_M4, _classPrivateFieldGet(this, _model).array));
    _classPrivateFieldSet(this, _u_view, new Uniform(this.ctx, 'm_view', Uniform.TYPE_M4, _classPrivateFieldGet(this, _view).array));
    _classPrivateFieldSet(this, _u_proj, new Uniform(this.ctx, 'm_proj', Uniform.TYPE_M4, _classPrivateFieldGet(this, _proj).array));
    _classPrivateFieldSet(this, _u_MVP, new Uniform(this.ctx, 'm_MVP', Uniform.TYPE_M4, _classPrivateFieldGet(this, _MVP).array));

    this.setup = true;
  }

  set name(value) {
    if (typeof value === 'string') _classPrivateFieldSet(this, _name2, value);
  }
  get name() {
    return _classPrivateFieldGet(this, _name2) || 'camera';
  }
  set fov(value) {
    if (!isNaN(value)) _classPrivateFieldSet(this, _fov, value);
  }
  get fov() {
    return _classPrivateFieldGet(this, _fov);
  }
  set aspect(value) {
    if (!isNaN(value)) _classPrivateFieldSet(this, _aspect, value);
  }
  get aspect() {
    return _classPrivateFieldGet(this, _aspect);
  }
  set near(value) {
    if (!isNaN(value)) _classPrivateFieldSet(this, _near, value);
  }
  get near() {
    return _classPrivateFieldGet(this, _near);
  }
  set far(value) {
    if (!isNaN(value)) _classPrivateFieldSet(this, _far, value);
  }
  get far() {
    return _classPrivateFieldGet(this, _far);
  }
  set pos(value) {
    if (value instanceof Vec3) _classPrivateFieldSet(this, _pos, value);
  }
  get pos() {
    return _classPrivateFieldGet(this, _pos);
  }
  set target(value) {
    if (value instanceof Vec3) _classPrivateFieldSet(this, _target, value);
  }
  get target() {
    return _classPrivateFieldGet(this, _target);
  }
  set up(value) {
    if (value instanceof Vec3) _classPrivateFieldSet(this, _up, value);
  }
  get up() {
    return _classPrivateFieldGet(this, _up);
  }
  get u_model() {
    return _classPrivateFieldGet(this, _u_model);
  }
  get u_view() {
    return _classPrivateFieldGet(this, _u_view);
  }
  get u_proj() {
    return _classPrivateFieldGet(this, _u_proj);
  }
  get u_MVP() {
    return _classPrivateFieldGet(this, _u_MVP);
  }
  get uniforms() {
    return [this.u_model, this.u_view, this.u_proj, this.u_MVP];
  }}var _defaultOptions5 = { writable: true, value: { fov: 30 * Math.PI / 180, aspect: window.innerWidth / window.innerHeight, near: .5, far: 100, pos: new Vec3(3, 1, -5), target: new Vec3(0, 0, 0), up: new Vec3(0, 1, 0) } };


const dimensions = [window.innerWidth, window.innerHeight];
const texturesize = 1024;
const particles = texturesize * texturesize;
const textureArraySize = texturesize * texturesize * 4.;

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const renderer = new Renderer(canvas, { width: dimensions[0], height: dimensions[1], alpha: true, premultipliedAlpha: true });
const ctx = renderer.ctx;

let drawing = new Float32Array([-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0]);
let triangles = new Float32Array([
.0, .5, -.4, .2, .5, .1,
-.5, -.5, -.4, .2, .5, .1,
.5, -.5, -.4, .2, .5, .1,

.5, .4, -.2, .5, .2, .1,
-.5, .4, -.2, .5, .2, .1,
.0, -.6, -.2, .5, .2, .1,

.0, .5, .0, .1, .2, .5,
-.5, -.5, .0, .1, .2, .5,
.5, -.5, .0, .1, .2, .5]);

let vertices = new Float32Array(particles * 3).fill(0);
let references = new Float32Array(particles * 2).fill(0);
for (let i = 0; i < references.length; i += 2) {
  let index = i / 2;

  references[i] = index % texturesize / texturesize;
  references[i + 1] = Math.floor(index / texturesize) / texturesize;
}

const drawBuffer = new Buffer(ctx, drawing);
const particleBuffer = new Buffer(ctx, vertices, {
  attributes: [{
    numComponents: 3 }] });


const referenceBuffer = new Buffer(ctx, references, {
  attributes: [{
    name: 'reference',
    numComponents: 2 }] });


const trianglesBuffer = new Buffer(ctx, triangles, {
  attributes: [{
    name: 'position',
    numComponents: 3,
    offset: 0,
    stride: 6 * 4 },
  {
    name: 'colour',
    numComponents: 3,
    offset: 3 * 4,
    stride: 6 * 4 }] });




const vertexShader_particle = document.getElementById('vertexShader_particle').innerText;
const vertexShader_buffer = document.getElementById('vertexShader_buffer').innerText;

const programPosition = new Program(ctx, vertexShader_buffer, document.getElementById('fragmentShader_position').innerText, {
  renderType: Program.RENDER_STRIP });
const programVelocity = new Program(ctx, vertexShader_buffer, document.getElementById('fragmentShader_velocity').innerText, {
  renderType: Program.RENDER_STRIP });
const programBuffer = new Program(ctx, vertexShader_buffer, document.getElementById('fragmentShader_buffer').innerText, {
  clearColour: [.1, .1, .15, 1],
  // blending: Renderer.BLENDING_ADDITIVE, 
  depthTesting: true,
  transparent: false,
  renderType: Program.RENDER_STRIP });
const programBlur = new Program(ctx, vertexShader_buffer, document.getElementById('fragmentShader_blur').innerText, {
  clearColour: [.1, .1, .15, 0],
  renderType: Program.RENDER_STRIP });
const programBloom = new Program(ctx, vertexShader_buffer, document.getElementById('fragmentShader_bloom').innerText, {
  clearColour: [.1, .1, .15, 0],
  renderType: Program.RENDER_STRIP });
const programMain = new Program(ctx, vertexShader_particle, document.getElementById('fragmentShader_particle').innerText, {
  clearColour: [.8, .8, .95, 1.],
  renderType: Program.RENDER_POINTS,
  blending: Renderer.BLENDING_MULTIPLY,
  depthTesting: false,
  transparent: false });


const time = new Uniform(ctx, 'time', Uniform.TYPE_FLOAT, 100);
const uDelta = new Uniform(ctx, 'delta', Uniform.TYPE_FLOAT, 100);
const mouse = new Uniform(ctx, 'mouse', Uniform.TYPE_V2, [0., 0.]);
const frame = new Uniform(ctx, 'frame', Uniform.TYPE_INT, 0);
const nsize = new Uniform(ctx, 'nsize', Uniform.TYPE_FLOAT, .1);
const nreset = new Uniform(ctx, 'nreset', Uniform.TYPE_BOOL, false);
const transition = new Uniform(ctx, 'transition', Uniform.TYPE_BOOL, false);
const transition_val = new Uniform(ctx, 'transition_val', Uniform.TYPE_FLOAT, 0);
const bloomstep = new Uniform(ctx, 'bloomstep', Uniform.TYPE_INT, 0);
const seed = new Uniform(ctx, 'seed', Uniform.TYPE_FLOAT, 0);

const originData = new Float32Array(particles * 4).fill(0);
const positionData = new Float32Array(particles * 4).fill(0);
const velocityData = new Float32Array(particles * 4).fill(0);
let bailout = 0.;
const create = i => {
  let radius = 5.;
  let minRadius = 1.;
  const rn = Math.random();
  let phi = Math.random() * Math.PI * 2.;
  let costheta = Math.random() * 2. - 1.;
  let u = Math.random();

  let theta = Math.acos(costheta);
  // let r = radius * Math.max(.8, Math.min(Math.cbrt( u ), .85));
  let r = radius * Math.cbrt(u);

  let x = r * Math.sin(theta) * Math.cos(phi);
  let y = r * Math.sin(theta) * Math.sin(phi);
  let z = r * Math.cos(theta);
  /*
  const posit = new Vec2(z, x);
  if(Math.abs(y) > .5) {
    bailout++;
    if(bailout >= 100.) return;
    else {
      create(i);
      return;
    }
  } else {
    bailout = 0.;
  }*/

  positionData[i] = x;
  positionData[i + 1] = y;
  positionData[i + 2] = z;
  positionData[i + 3] = 1;

  originData[i] = x;
  originData[i + 1] = y;
  originData[i + 2] = z;
  originData[i + 3] = 1;

  velocityData[i] = x * 5;
  velocityData[i + 1] = y * 5;
  velocityData[i + 2] = z * 5;
  velocityData[i + 3] = 1;
};
for (let i = 0; i < textureArraySize; i += 4) {
  create(i);
}

setTimeout(() => {
  requestAnimationFrame(run);
}, 10);

const primarybuffer = new FrameBuffer(renderer, 'prime', {
  width: window.innerWidth,
  height: window.innerHeight,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_REGULAR,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: Math.min(window.devicePixelRatio, 2),
  depthTesting: true });

const blurBuffer = new FrameBuffer(renderer, 'blur', {
  width: window.innerWidth,
  height: window.innerHeight,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_REGULAR,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: Math.min(window.devicePixelRatio, 2),
  depthTesting: true });

const bloomBuffer = new FrameBuffer(renderer, 'bloom', {
  width: window.innerWidth,
  height: window.innerHeight,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_REGULAR,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: Math.min(window.devicePixelRatio, 2) });

const positionBuffer = new FrameBuffer(renderer, 'position', {
  width: texturesize,
  height: texturesize,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_TILE,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: 1,
  data: positionData });

const velocityBuffer = new FrameBuffer(renderer, 'velocity', {
  width: texturesize,
  height: texturesize,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_TILE,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: 1,
  data: velocityData });

const originBuffer = new FrameBuffer(renderer, 'origin', {
  width: texturesize,
  height: texturesize,
  // tiling: Texture.IMAGETYPE_TILE,
  tiling: Texture.IMAGETYPE_TILE,
  texdepth: FrameBuffer.TEXTYPE_FLOAT,
  pxRatio: 1,
  data: originData });


const cp = new Vec3(-25, 75, 100);
cp.length = 100;

const compositions = [
{
  pos: new Vec3(0, 10, 20),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(0, 3, 5),
  endTarget: new Vec3(0, 0, 0),
  time: 20 },

{
  pos: new Vec3(30, -30, 30),
  target: new Vec3(0, 30, 0),
  endPos: new Vec3(30, -30, 30),
  endTarget: new Vec3(5, 30, 0),
  time: 15 },

{
  pos: new Vec3(30, 30, 30),
  target: new Vec3(0, 30, 0),
  endPos: new Vec3(30, 30, 30),
  endTarget: new Vec3(5, 30, 0),
  time: 10 },

{
  pos: new Vec3(0, 30, 30),
  target: new Vec3(0, 30, 0),
  endPos: new Vec3(0, -60, 0),
  endTarget: new Vec3(5, 30, 0),
  time: 40 },

{
  pos: new Vec3(0, 30, 30),
  target: new Vec3(0, 30, 0),
  endPos: new Vec3(30, 30, 30),
  endTarget: new Vec3(0, 30, 0),
  time: 30 },

{
  pos: new Vec3(0, 100, 0),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(0, 20, 40),
  endTarget: new Vec3(0, 20, -20),
  time: 40 },

{
  pos: new Vec3(0, 20, 40),
  target: new Vec3(15, 0, -20),
  endPos: new Vec3(0, 20, 40),
  endTarget: new Vec3(-15, 0, -20),
  time: 20 },

{
  pos: new Vec3(0, 20, -60),
  target: new Vec3(5, 0, 0),
  endPos: new Vec3(0, 30, 50),
  endTarget: new Vec3(5, 0, 0),
  time: 50 },

{
  pos: new Vec3(0, -20, 0),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(10, 80, 10),
  endTarget: new Vec3(0, 0, 0),
  time: 40 },

{
  pos: new Vec3(30, 0, 0),
  target: new Vec3(20, 0, 0),
  endPos: new Vec3(30, 0, 30),
  endTarget: new Vec3(0, 0, 0),
  time: 40 },

{
  pos: new Vec3(80, 0, 0),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(0, 0, 80),
  endTarget: new Vec3(0, 0, 0),
  time: 40 },

{
  pos: new Vec3(0, 10, 0),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(10, 10, 60),
  endTarget: new Vec3(0, 0, 0),
  time: 40 },

{
  pos: cp.clone().scaleNew(.2),
  target: new Vec3(0, 0, 0),
  endPos: cp.clone(),
  endTarget: new Vec3(0, 0, 0),
  time: 30 },

{
  pos: new Vec3(0, 2, 30),
  target: new Vec3(-5, 0, 0),
  endPos: new Vec3(0, 5, -20),
  endTarget: new Vec3(0, 0, 0),
  time: 30 },

{
  pos: new Vec3(0, 5, 0),
  target: new Vec3(0, 0, 0),
  endPos: new Vec3(0, 40, 5),
  endTarget: new Vec3(0, 0, 0),
  time: 30 }];



const cam = new Camera(renderer, 'main', { fov: .8, far: 500 });
console.log(cam.fov);
let camop = compositions[0];
let camtime = 0;
window.addEventListener('pointermove', e => {
});

let autoTransitionTimer = 0;
const setupValues = i => {
  transition.value = false;
  nsize.value = Math.random() * .5 + .1;
  nreset.value = true;
  dimensions[0] = window.innerWidth;
  dimensions[1] = window.innerHeight;
  cam.aspect = window.innerWidth / window.innerHeight;
  camop = compositions[i];
  cam.pos = camop.pos;
  cam.target = camop.target;
  cam.update(true);
  camtime = 0;
  renderer.resize(window.innerWidth, window.innerHeight);
  primarybuffer.resize(window.innerWidth, window.innerHeight);
  blurBuffer.resize(window.innerWidth, window.innerHeight);

  time.value = -10000;
  seed.value = Math.random() * -1000.;
  setTimeout(() => {
    seed.value += Math.random() * .5;
  }, 5000);

  autoTransitionTimer = setTimeout(setupTransition, camop.time * 1000);
};

const setupTransition = () => {
  if (transition.value === true) return;
  clearTimeout(autoTransitionTimer);
  transition.value = true;
  transition_val.value = 0;
  setTimeout(() => {
    setupValues(Math.floor(Math.random() * compositions.length));
  }, 2000);
};

setupValues(0);

let oldpos = 0;
window.addEventListener('click', e => {
  setupTransition();
});

let timeout;
window.addEventListener('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    dimensions[0] = window.innerWidth;
    dimensions[1] = window.innerHeight;
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.update(true);
    renderer.resize(window.innerWidth, window.innerHeight);
    primarybuffer.resize(window.innerWidth, window.innerHeight);
    blurBuffer.resize(window.innerWidth, window.innerHeight);
    bloomBuffer.resize(window.innerWidth, window.innerHeight);
  }, 100);
});


const cubeInOut = d => {
  if (d < 0.5) return 4 * d ** 3;
  return 1 - (-2 * d + 2) ** 3 * 0.5;
};

const opx = renderer.pxRatio;
let then = 0;
const run = delta => {

  bloomstep.value = 0;

  let now = Date.now() / 1000;
  let _delta = now - then;
  then = now;

  if (_delta > 1000) {
    requestAnimationFrame(run);
    return;
  }

  uDelta.value = Math.min(_delta, 0.5);
  time.value += _delta * .05;

  frame.value += 1;

  if (transition.value === true) {
    transition_val.value += _delta * .5;
  } else if (transition_val.value >= 0.) {
    transition_val.value -= _delta * .5;
    console.log(transition_val.value);
  }

  camtime += _delta;
  if (camtime <= camop.time && camop.endPos) {
    let ntime = Math.min(camtime / camop.time, 1.);
    let tween = cubeInOut(ntime);
    cam.pos = Vec3.lerp(camop.pos, camop.endPos, tween);
    cam.target = Vec3.lerp(camop.target, camop.endTarget, tween);
    cam.update(true);
  }

  renderer.setViewport([velocityBuffer.width, velocityBuffer.height]);
  renderer.setupProgram(programVelocity, [drawBuffer], [], [time, frame, mouse, velocityBuffer, positionBuffer, nsize, seed]);
  velocityBuffer.render(4);

  renderer.setupProgram(programPosition, [drawBuffer], [], [time, frame, mouse, velocityBuffer, positionBuffer, uDelta, originBuffer, nreset]);
  positionBuffer.render(4);

  renderer.setViewport();
  renderer.setupProgram(programMain, [referenceBuffer], [], [time, frame, mouse, velocityBuffer, primarybuffer, positionBuffer, ...cam.uniforms, transition, transition_val]);
  renderer.render(particles);

  nreset.value = false;

  requestAnimationFrame(run);
};
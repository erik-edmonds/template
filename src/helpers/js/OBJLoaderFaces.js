export const OBJLoader = ( function () {

  var vertex_pattern           = /^v\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;
  var normal_pattern           = /^vn\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;

  var uv_pattern               = /^vt\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;
  var face_vertex              = /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/;
  var face_vertex_uv           = /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/;
  var face_vertex_uv_normal    = /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/;
  var face_vertex_normal       = /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/;
  var object_pattern           = /^[og]\s*(.+)?/;
  var material_library_pattern = /^mtllib /;
  var material_use_pattern     = /^usemtl /;

  var adding_face_modes = {
    vertex: 1,
    vertex_uv: 2,
    vertex_uv_normal: 3,
    vertex_normal: 4
  }

  function ParserState() {

    var state = {
      objects  : [],
      object   : {},

      vertices : [],
      normals  : [],
      uvs      : [],

      materialLibraries : [],

      startObject: function ( name, fromDeclaration ) {

        if ( this.object && this.object.fromDeclaration === false ) {

          this.object.name = name;
          this.object.fromDeclaration = ( fromDeclaration !== false );
          return;

        }

        var previousMaterial = ( this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined );

        if ( this.object && typeof this.object._finalize === 'function' ) {

          this.object._finalize( true );

        }

        this.object = {
          name : name || '',
          fromDeclaration : ( fromDeclaration !== false ),

          geometry : {
            vertices : [],
            normals  : [],
            uvs      : []
          },
          materials : [],
          smooth : true,

          startMaterial : function( name, libraries ) {

            var previous = this._finalize( false );

            if ( previous && ( previous.inherited || previous.groupCount <= 0 ) ) {

              this.materials.splice( previous.index, 1 );

            }

            var material = {
              index      : this.materials.length,
              name       : name || '',
              mtllib     : ( Array.isArray( libraries ) && libraries.length > 0 ? libraries[ libraries.length - 1 ] : '' ),
              smooth     : ( previous !== undefined ? previous.smooth : this.smooth ),
              groupStart : ( previous !== undefined ? previous.groupEnd : 0 ),
              groupEnd   : -1,
              groupCount : -1,
              inherited  : false,

              clone : function( index ) {
                var cloned = {
                  index      : ( typeof index === 'number' ? index : this.index ),
                  name       : this.name,
                  mtllib     : this.mtllib,
                  smooth     : this.smooth,
                  groupStart : 0,
                  groupEnd   : -1,
                  groupCount : -1,
                  inherited  : false
                };
                cloned.clone = this.clone.bind(cloned);
                return cloned;
              }
            };

            this.materials.push( material );

            return material;

          },

          currentMaterial : function() {

            if ( this.materials.length > 0 ) {
              return this.materials[ this.materials.length - 1 ];
            }

            return undefined;

          },

          _finalize : function( end ) {

            var lastMultiMaterial = this.currentMaterial();
            if ( lastMultiMaterial && lastMultiMaterial.groupEnd === -1 ) {

              lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
              lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
              lastMultiMaterial.inherited = false;

            }

            if ( end && this.materials.length > 1 ) {

              for ( var mi = this.materials.length - 1; mi >= 0; mi-- ) {
                if ( this.materials[ mi ].groupCount <= 0 ) {
                  this.materials.splice( mi, 1 );
                }
              }

            }

            if ( end && this.materials.length === 0 ) {

              this.materials.push({
                name   : '',
                smooth : this.smooth
              });

            }

            return lastMultiMaterial;

          }
        };

        if ( previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function" ) {

          var declared = previousMaterial.clone( 0 );
          declared.inherited = true;
          this.object.materials.push( declared );

        }

        this.objects.push( this.object );

      },

      finalize : function() {

        if ( this.object && typeof this.object._finalize === 'function' ) {

          this.object._finalize( true );

        }

      },

      parseVertexIndex: function ( value, len ) {

        var index = parseInt( value, 10 );
        return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

      },

      parseNormalIndex: function ( value, len ) {

        var index = parseInt( value, 10 );
        return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

      },

      parseUVIndex: function ( value, len ) {

        var index = parseInt( value, 10 );
        return ( index >= 0 ? index - 1 : index + len / 2 ) * 2;

      },

      addVertex: function ( a, b, c ) {

        var src = this.vertices;
        var dst = this.object.geometry.vertices;

        dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
        dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
        dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

      },

      addVertexLine: function ( a ) {

        var src = this.vertices;
        var dst = this.object.geometry.vertices;

        dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );

      },

      addNormal : function ( a, b, c ) {

        var src = this.normals;
        var dst = this.object.geometry.normals;

        dst.push( src[ a + 0 ], src[ a + 1 ], src[ a + 2 ] );
        dst.push( src[ b + 0 ], src[ b + 1 ], src[ b + 2 ] );
        dst.push( src[ c + 0 ], src[ c + 1 ], src[ c + 2 ] );

      },

      addUV: function ( a, b, c ) {

        var src = this.uvs;
        var dst = this.object.geometry.uvs;

        dst.push( src[ a + 0 ], src[ a + 1 ] );
        dst.push( src[ b + 0 ], src[ b + 1 ] );
        dst.push( src[ c + 0 ], src[ c + 1 ] );

      },

      addUVLine: function ( a ) {

        var src = this.uvs;
        var dst = this.object.geometry.uvs;

        dst.push( src[ a + 0 ], src[ a + 1 ] );

      },

      addFace: function ( args ) {

        var vLen = this.vertices.length;
        var uvLen = this.uvs.length;
        var nLen = this.normals.length;

        var addingFaceMode = Array.prototype.pop.call( arguments );
        var ivs = [ ], ius = [ ], ins = [ ];

        if( addingFaceMode === adding_face_modes.vertex ) {

          for( var i = 0; i < arguments.length; i++ ) {

            if( !arguments[ i ] ) {

              break;

            }

            ivs.push( this.parseVertexIndex( arguments[ i ], vLen ) );

          }

        }

        if( addingFaceMode === adding_face_modes.vertex_uv ) {

          for( var i = 0; i < arguments.length - 1; i = i + 2 ) {

            if( !arguments[ i ] ) {

              break;

            }

            ivs.push( this.parseVertexIndex( arguments[ i ], vLen ) );
            ius.push( this.parseUVIndex( arguments[ i + 1 ], uvLen ) );
          }
        }

        if( addingFaceMode === adding_face_modes.vertex_uv_normal ) {

          for( var i = 0; i < arguments.length - 2; i = i + 3 ) {

            if( !arguments[ i ] ) {

              break;

            }

            ivs.push( this.parseVertexIndex( arguments[ i ], vLen ) );
            ius.push( this.parseUVIndex( arguments[ i + 1 ], uvLen ) );
            ins.push( this.parseNormalIndex( arguments[ i + 2 ], nLen ) );

          }

        }

        if( addingFaceMode === adding_face_modes.vertex_normal ) {

          for( var i = 0; i < arguments.length - 1; i = i + 2 ) {

            if( !arguments[ i ] ) {

              break;

            }

            ivs.push( this.parseVertexIndex( arguments[ i ], vLen ) );
            ins.push( this.parseNormalIndex( arguments[ i + 1 ], nLen ) );

          }

        }

        for ( var j = 2; j < ivs.length; j++ ) {

          this.addVertex( ivs[ 0 ], ivs[ j - 1 ], ivs[ j ] );

        }

        for ( var j = 2; j < ius.length; j++ ) {

          this.addUV( ius[ 0 ], ius[ j - 1 ], ius[ j ] );

        }

        for ( var j = 2; j < ins.length; j++ ) {

          this.addNormal( ins[ 0 ], ins[ j - 1 ], ins[ j ] );

        }

      },

      addLineGeometry: function ( vertices, uvs ) {

        this.object.geometry.type = 'Line';

        var vLen = this.vertices.length;
        var uvLen = this.uvs.length;

        for ( var vi = 0, l = vertices.length; vi < l; vi ++ ) {

          this.addVertexLine( this.parseVertexIndex( vertices[ vi ], vLen ) );

        }

        for ( var uvi = 0, l = uvs.length; uvi < l; uvi ++ ) {

          this.addUVLine( this.parseUVIndex( uvs[ uvi ], uvLen ) );

        }

      }

    };

    state.startObject( '', false );

    return state;

  }

  //

  function OBJLoader( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

    this.materials = null;

  };

  OBJLoader.prototype = {

    constructor: OBJLoader,

    load: function ( url, onLoad, onProgress, onError ) {

      var scope = this;

      var loader = new THREE.FileLoader( scope.manager );
      loader.setPath( this.path );
      loader.load( url, function ( text ) {

        onLoad( scope.parse( text ) );

      }, onProgress, onError );

    },

    setPath: function ( value ) {

      this.path = value;

    },

    setMaterials: function ( materials ) {

      this.materials = materials;

      return this;

    },

    parse: function ( text ) {

      console.time( 'OBJLoader' );

      var state = new ParserState();

      if ( text.indexOf( '\r\n' ) !== - 1 ) {

        text = text.replace( /\r\n/g, '\n' );

      }

      if ( text.indexOf( '\\\n' ) !== - 1) {

        text = text.replace( /\\\n/g, '' );

      }

      var lines = text.split( '\n' );
      var line = '', lineFirstChar = '', lineSecondChar = '';
      var lineLength = 0;
      var result = [];

      var trimLeft = ( typeof ''.trimLeft === 'function' );

      for ( var i = 0, l = lines.length; i < l; i ++ ) {

        line = lines[ i ];

        line = trimLeft ? line.trimLeft() : line.trim();

        lineLength = line.length;

        if ( lineLength === 0 ) continue;

        lineFirstChar = line.charAt( 0 );

        if ( lineFirstChar === '#' ) continue;

        if ( lineFirstChar === 'v' ) {

          lineSecondChar = line.charAt( 1 );

          if ( lineSecondChar === ' ' && ( result = vertex_pattern.exec( line ) ) !== null ) {

            state.vertices.push(
              parseFloat( result[ 1 ] ),
              parseFloat( result[ 2 ] ),
              parseFloat( result[ 3 ] )
            );

          } else if ( lineSecondChar === 'n' && ( result = normal_pattern.exec( line ) ) !== null ) {
            
            state.normals.push(
              parseFloat( result[ 1 ] ),
              parseFloat( result[ 2 ] ),
              parseFloat( result[ 3 ] )
            );

          } else if ( lineSecondChar === 't' && ( result = uv_pattern.exec( line ) ) !== null ) {

            state.uvs.push(
              parseFloat( result[ 1 ] ),
              parseFloat( result[ 2 ] )
            );

          } else {

            throw new Error( "Unexpected vertex/normal/uv line: '" + line  + "'" );

          }

        } else if ( lineFirstChar === "f" ) {

          var addingFaceMode;

          if ( ( result = face_vertex_uv_normal.exec( line ) ) !== null ) {

            addingFaceMode = adding_face_modes.vertex_uv_normal;

          } else if ( ( result = face_vertex_uv.exec( line ) ) !== null ) {

            addingFaceMode = adding_face_modes.vertex_uv;

          } else if ( ( result = face_vertex_normal.exec( line ) ) !== null ) {
            addingFaceMode = adding_face_modes.vertex_normal;

          } else if ( ( result = face_vertex.exec( line ) ) !== null ) {

            addingFaceMode = adding_face_modes.vertex;

          } else {

            throw new Error( "Unexpected face line: '" + line  + "'" );

          }

          if( result[ 0 ].length === result.input.length ) {

            result.shift();

          } else {

            result.push.apply( result, ( result.input.substring( result.shift().length ).match( /\d+/g ) ) );

          }

          result.push( addingFaceMode );
          state.addFace.apply( state, result );

        } else if ( lineFirstChar === "l" ) {

          var lineParts = line.substring( 1 ).trim().split( " " );
          var lineVertices = [], lineUVs = [];

          if ( line.indexOf( "/" ) === - 1 ) {

            lineVertices = lineParts;

          } else {

            for ( var li = 0, llen = lineParts.length; li < llen; li ++ ) {

              var parts = lineParts[ li ].split( "/" );

              if ( parts[ 0 ] !== "" ) lineVertices.push( parts[ 0 ] );
              if ( parts[ 1 ] !== "" ) lineUVs.push( parts[ 1 ] );

            }

          }
          state.addLineGeometry( lineVertices, lineUVs );

        } else if ( ( result = object_pattern.exec( line ) ) !== null ) {

          var name = ( " " + result[ 0 ].substr( 1 ).trim() ).substr( 1 );

          state.startObject( name );

        } else if ( material_use_pattern.test( line ) ) {

          state.object.startMaterial( line.substring( 7 ).trim(), state.materialLibraries );

        } else if ( material_library_pattern.test( line ) ) {

          state.materialLibraries.push( line.substring( 7 ).trim() );

        } else if ( lineFirstChar === "s" ) {

          result = line.split( ' ' );

          if ( result.length > 1 ) {

            var value = result[ 1 ].trim().toLowerCase();
            state.object.smooth = ( value !== '0' && value !== 'off' );

          } else {

            state.object.smooth = true;

          }
          var material = state.object.currentMaterial();
          if ( material ) material.smooth = state.object.smooth;

        } else {

          if ( line === '\0' ) continue;

          throw new Error( "Unexpected line: '" + line  + "'" );

        }

      }

      state.finalize();

      var container = new THREE.Group();
      container.materialLibraries = [].concat( state.materialLibraries );

      for ( var i = 0, l = state.objects.length; i < l; i ++ ) {

        var object = state.objects[ i ];
        var geometry = object.geometry;
        var materials = object.materials;
        var isLine = ( geometry.type === 'Line' );

        // Skip o/g line declarations that did not follow with any faces
        if ( geometry.vertices.length === 0 ) continue;

        var buffergeometry = new THREE.BufferGeometry();

        buffergeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );

        if ( geometry.normals.length > 0 ) {

          buffergeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( geometry.normals ), 3 ) );

        } else {

          buffergeometry.computeVertexNormals();

        }

        if ( geometry.uvs.length > 0 ) {

          buffergeometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( geometry.uvs ), 2 ) );

        }

        // Create materials

        var createdMaterials = [];

        for ( var mi = 0, miLen = materials.length; mi < miLen ; mi++ ) {

          var sourceMaterial = materials[ mi ];
          var material = undefined;

          if ( this.materials !== null ) {

            material = this.materials.create( sourceMaterial.name );

            // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
            if ( isLine && material && ! ( material instanceof THREE.LineBasicMaterial ) ) {

              var materialLine = new THREE.LineBasicMaterial();
              materialLine.copy( material );
              material = materialLine;

            }

          }

          if ( ! material ) {

            material = ( ! isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial() );
            material.name = sourceMaterial.name;

          }

          material.flatShading = sourceMaterial.smooth ? false : true;

          createdMaterials.push(material);

        }

        // Create mesh

        var mesh;

        if ( createdMaterials.length > 1 ) {

          for ( var mi = 0, miLen = materials.length; mi < miLen ; mi++ ) {

            var sourceMaterial = materials[ mi ];
            buffergeometry.addGroup( sourceMaterial.groupStart, sourceMaterial.groupCount, mi );

          }

          mesh = ( ! isLine ? new THREE.Mesh( buffergeometry, createdMaterials ) : new THREE.LineSegments( buffergeometry, createdMaterials ) );

        } else {

          mesh = ( ! isLine ? new THREE.Mesh( buffergeometry, createdMaterials[ 0 ] ) : new THREE.LineSegments( buffergeometry, createdMaterials[ 0 ] ) );
        }

        mesh.name = object.name;

        container.add( mesh );

      }

      console.timeEnd( 'OBJLoader' );

      return container;

    }

  };

  return OBJLoader;

} )();

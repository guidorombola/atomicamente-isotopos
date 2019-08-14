const THREE = require('three');

var colorProtones = 0x0000ff;
var colorNeutrones = 0xff0000;

export function generarNucleo(elemento, isotopo){
  
  var nucleo = new THREE.Group();
  nucleo.name = 'isotopo';
  
  var radio = 5,
      segmentos = 50,
      anillos = 50;

  var materialEsfera =
    new THREE.MeshLambertMaterial(
      {
        color: new THREE.Color(0xffffff),
        opacity: 0.3,
        transparent: true
      });

  var esfera = new THREE.Mesh(
    new THREE.SphereGeometry(
      radio,
      segmentos,
      anillos),

    materialEsfera);
    esfera.position.set(0,0,0);
    
  nucleo.add(esfera);
  
  var protones = generarProtones(elemento);
  var neutrones = generarNeutrones(isotopo);
  protones.name = 'protones';
  neutrones.name = 'neutrones';
  
  nucleo.add(protones);
  nucleo.add(neutrones);
  
  return nucleo;
}

function generarProtones(elemento){
  return generarParticulasDelNucleo(elemento.info.protons, colorProtones);
}

function generarNeutrones(isotopo){
  return generarParticulasDelNucleo(isotopo.positions, colorNeutrones);
}

function generarParticulasDelNucleo(position, particleColor){
  var particulas = new THREE.Group();
  for(var i = 0; i < position.length; i++) {
    var radio = 0.5,
        segmentos = 16,
        anillos = 16;
    
    var materialEsfera =
      new THREE.MeshPhysicalMaterial(
        {
          color: particleColor,
          roughness: 0.5,
          metalness: 0.5,
        });

    var esfera = new THREE.Mesh(

      new THREE.SphereGeometry(
        radio,
        segmentos,
        anillos),

      materialEsfera);
    esfera.transparent = true;
    var xPositionOffset = position[i].x;
    var yPositionOffset = position[i].y;
    var zPositionOffset = position[i].z;
    esfera.position.set(xPositionOffset,yPositionOffset,zPositionOffset);
    particulas.add(esfera);

  }
  return particulas;
}

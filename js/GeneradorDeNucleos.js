var colorProtones = 0x0000ff;
var colorNeutrones = 0xff0000;

function generarNucleo(elemento, isotopo){
  
  nucleo = new THREE.Group();
  
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
  
  var protones = generarProtones(elemento)
  var neutrones = generarNeutrones(isotopo)
    
  scene.add(nucleo);
  scene.add(protones);
  scene.add(neutrones);
  
  return [protones, neutrones];
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
      new THREE.MeshLambertMaterial(
        {
          color: particleColor,
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

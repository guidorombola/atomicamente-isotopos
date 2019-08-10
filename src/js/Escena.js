const THREE = require('three');
const WindowResize = require('three-window-resize');
const OrbitControls = require('three-orbitcontrols');

export var renderer = new THREE.WebGLRenderer({ alpha : true });
export var scene = new THREE.Scene();
export var camera = new THREE.PerspectiveCamera(100, document.getElementById('page-content-wrapper').offsetWidth/window.innerHeight, 0.1, 1000);

export function comenzarEscena(){
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(), INTERSECTED;
  // Here, the position of the camera is tilted
  camera.position.z = camera.position.z+5;
  camera.position.x = camera.position.x+5;
  camera.position.y = camera.position.y+0;

  renderer.setClearColor( 0xFFFFFF, 0 );
  $(document).ready(function() {
    camera.updateProjectionMatrix(40, document.getElementById('page-content-wrapper').offsetWidth/window.innerHeight, 0.1, 1000);
    renderer.setSize(document.getElementById('page-content-wrapper').offsetWidth, window.innerHeight);
  });

  document.getElementById('AtomicStage').appendChild(renderer.domElement);

  // Add light 
  var ambient = new THREE.AmbientLight(0x747474, 6);
  var pointLight = new THREE.DirectionalLight( 0xffffff, 8);
  pointLight.position.set( 1, 0, 0 ).normalize();
  scene.add( pointLight );
  var pointLight = new THREE.DirectionalLight( 0xffffff, 2);
  pointLight.position.set( -1, 0, 0 ).normalize();
  scene.add( pointLight );

  scene.add(ambient);

  var winresize = new WindowResize(renderer, camera);

  // Rotation around the center
  var controls;
  controls = new OrbitControls( camera, renderer.domElement);
  controls.enablePan = false;

  controls.addEventListener( 'change', render );
  controls.update();

  render();

}

export function render() {
  renderer.render(scene, camera);
}
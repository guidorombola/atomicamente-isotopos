import { permutateWithRepetitions } from './PermutateWithRepetitions';

function moduloVector(v) {
  var suma = 0
  for (let i = 0; i < v.length; i++) {
    suma += Math.pow(v[i], 2);
  }
  return Math.sqrt(suma);
}

function transformarAPosiciones(array) {
  var posiciones = []
  array.forEach(function (elemento) {
    posiciones.push({ x: elemento[0], y: elemento[1], z: elemento[2] });
  })
  return posiciones;
}

export function generarPosiciones() {
  var permutacionesDePosiciones = permutateWithRepetitions([0, -0.5, 0.5, 1, -1], 3);
  var permutacionesOrdenadas = permutacionesDePosiciones.sort(function (v1, v2) {
    return (moduloVector(v1) - moduloVector(v2));
  });
  return transformarAPosiciones(permutacionesOrdenadas);
}

export function generarPosicionesProtones() {
  var posicionesProtones = [];
  var posiciones = generarPosiciones();
  for (var i = 0; i < posiciones.length; i += 2) {
    posicionesProtones.push(posiciones[i]);
  }
  return posicionesProtones;
}

export function generarPosicionesNeutrones() {
  var posicionesNeutrones = [];
  var posiciones = generarPosiciones();
  for (var i = 1; i < posiciones.length; i += 2) {
    posicionesNeutrones.push(posiciones[i]);
  }
  return posicionesNeutrones;
}
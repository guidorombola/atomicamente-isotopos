import {generarNucleo} from './GeneradorDeNucleos';
import {elementsIncluded} from './TablaPeriodica';
import {comenzarEscena, render, scene} from './Escena';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/estilos.css';

var protons, neutrons;

comenzarEscena();
mostrarElementosSeleccionables();

$(document).on('click','.element, .periodic-element',function() {
  var elementoActual = this;
  graficarIsotopoMasAbundante(elementoActual);
});

function mostrarElementosSeleccionables(){
  var periodoActual = $('<div></div>').attr('class', 'periodic-period');
  
  elementsIncluded.forEach(function(element,index) {
    var elemento = $('<div></div>')
    .attr('class', 'periodic-element')
    .attr('id', element.name);

    elemento.append(element.symbol)
    periodoActual.append(elemento)

    var numPeriodoActual = element.info.period;
    if(index < elementsIncluded.length -1 && elementsIncluded[index+1].info.period!==numPeriodoActual) {
      periodoActual.append($('<div></div>').attr('class', 'clearfix'));
      $('.periodic-menu').append(periodoActual)
      periodoActual = $('<div></div>').attr('class', 'periodic-period');
    }
    
  });
  periodoActual.append($('<div></div>').attr('class', 'clearfix')); 
  $('.periodic-menu').append(periodoActual);
  $('.periodic-menu').append($('<div></div>').attr('class', 'clearfix'));
  
}

function graficarIsotopoMasAbundante(elementoActual){
  $(document).off('change','.isotopo');

  $('.lead').hide();

  limpiarElementosEnPantalla();
  var elementoClickeado = detectarElementoClickeado(elementoActual); 
  
  $('.element-name').html(elementoClickeado.name);
  $('.element-symbol').html(elementoClickeado.symbol);
  $('#bottom-legend').show();
  
  agregarChecksProtonesNeutrones();
  agregarSeleccionDeIsotopos(elementoClickeado);

  $('#bottom-legend .toggle').on('click', function(event){
    event.stopPropagation();
  });
  
  var nucleo = generarNucleo(elementoClickeado, elementoClickeado.info.isotopes[0]);
  scene.add(nucleo);
  protons = nucleo.children[1];
  neutrons = nucleo.children[2];
  render();

  //Revisar si incluir el listener aca
  $(document).on('change','.isotopo', function() {
    graficarIsotopoSeleccionado(elementoClickeado, $(this).attr('id'));
  });
}

function graficarIsotopoSeleccionado(elementoClickeado, idIsotopo){
  var isotopo = detectarIsotopoClickeado(elementoClickeado, idIsotopo);
  limpiarElementosEnPantalla();
  
  var nucleo = generarNucleo(elementoClickeado, isotopo);
  scene.add(nucleo);
  protons = nucleo.children[1];
  neutrons = nucleo.children[2];
  render();
  
}

function limpiarElementosEnPantalla(){
  scene.children = scene.children.filter(function f(elemento){return elemento.name !== "isotopo"});
}

function detectarIsotopoClickeado(elementoClickeado, idIsotopo){
  var isotopoSeleccionado = elementoClickeado.info.isotopes.find(
    function(isotopo){return isotopo.name.toLowerCase() === idIsotopo
    });
  return isotopoSeleccionado;
}

function detectarElementoClickeado(elementoActual){
  var elementoClickeado = elementsIncluded.find(
    function(elemento) {return elemento.name === $(elementoActual).attr('id')}
  );
  return elementoClickeado;
}

function agregarChecksProtonesNeutrones(){
  var button = $('<button></button>')
  .attr('class', 'btn btn-primary btn-sm dropdown-toggle')
  .attr('type', 'button')
  .attr('id', 'dropdownMenu1')
  .attr('data-toggle', 'dropdown')
  .attr('aria-haspopup', 'true')
  .attr('aria-expanded', 'false');
  button.append('Explorar Nucleo ');
  button.append($('<span></span>').attr('class', 'caret'));
  var infoToAdd = ['Protones','Neutrones'];
  var htmlToAdd = $('<ul></ul>')
  .attr('class', 'dropdown-menu')
  .attr('aria-labelledby', 'dropdownMenu1');
    infoToAdd.forEach(function(element) {
      var item = $('<li></li>');
      item.append($('<a></a>'));
      var checkbox = $('<input>')
      .attr('type', 'checkbox')
      .attr('checked', 'true')
      .attr('class', 'toggle toggle-'+ element.replace(/ /g,'-').toLowerCase());
      item.children().append(checkbox);    
      item.children().append(element);
      htmlToAdd.append(item) 
    });
    $('#dropup-nucleus').html(htmlToAdd);
    $('#dropup-nucleus').append(button);
}

function agregarSeleccionDeIsotopos(elementoClickeado){
  var button = $('<button></button>')
  .attr('class', 'btn btn-primary btn-sm dropdown-toggle')
  .attr('type', 'button')
  .attr('id', 'dropdownMenu0')
  .attr('data-toggle', 'dropdown')
  .attr('aria-haspopup', 'true')
  .attr('aria-expanded', 'false');
  button.append('Isotopos ');
  button.append($('<span></span>').attr('class', 'caret'));
  var infoToAdd = elementoClickeado.info.isotopes;
  var htmlToAdd = $('<ul></ul>')
  .attr('class', 'dropdown-menu')
  .attr('aria-labelledby', 'dropdownMenu0');
  var item;
  
  infoToAdd.forEach(function(element) {
    var nombre = element.name;
    item = $('<li></li>');
    item.append($('<a></a>'));
    var isotopo = $('<input>')
    .attr('type', 'radio')
    .attr('name', 'isotopo')
    .attr('class', 'isotopo')
    .attr('id', nombre.toLowerCase());    
    item.children().append(isotopo);
    item.children().append(nombre);
    htmlToAdd.append(item);
  });
  
  var elementoMasAbundante = htmlToAdd.children()[0];
  var radioButtonElementoMasAbundante = $($(elementoMasAbundante).children()[0]).children()[0];
  $(radioButtonElementoMasAbundante).attr('checked', 'true');
  
  $('#dropup-isotopes').html(htmlToAdd);
  $('#dropup-isotopes').append(button);
}

$(document).on('change','.toggle-protones',function() {
  protons.visible = $(this).is(':checked');
  render();
});
$(document).on('change','.toggle-neutrones',function() {
  neutrons.visible = $(this).is(':checked');
  render();
});


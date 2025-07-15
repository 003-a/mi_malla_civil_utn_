import { materias } from './data.js';

const contenedor = document.getElementById('malla');

const estado = JSON.parse(localStorage.getItem('estadoMaterias') || '{}');

const estadosPosibles = ['No cursada', 'En curso', 'Aprobada', 'Promocionada', 'Debe final', 'Reprobada'];

function estaAprobada(codigo) {
  const estadoMateria = estado[codigo];
  return estadoMateria && ['Aprobada', 'Promocionada'].includes(estadoMateria.estado);
}

function crearSelectEstado(materia) {
  const select = document.createElement('select');
  select.className = 'estado-select';

  estadosPosibles.forEach(opcion => {
    const opt = document.createElement('option');
    opt.value = opcion;
    opt.textContent = opcion;
    if (estado[materia.codigo]?.estado === opcion) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  select.addEventListener('change', () => {
    estado[materia.codigo] = estado[materia.codigo] || {};
    estado[materia.codigo].estado = se

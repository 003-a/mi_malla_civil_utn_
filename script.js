import { materias } from './data.js';

const contenedor = document.getElementById('malla');

const estado = JSON.parse(localStorage.getItem('estadoMaterias') || '{}');

const estadosPosibles = ['No cursada', 'En curso', 'Aprobada', 'Promocionada', 'Debe final', 'Reprobada'];

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
    estado[materia.codigo].estado = select.value;
    localStorage.setItem('estadoMaterias', JSON.stringify(estado));
    actualizarVista();
  });

  return select;
}

function crearInputNota(materia) {
  const input = document.createElement('input');
  input.type = 'number';
  input.min = 4;
  input.max = 10;
  input.placeholder = 'Nota';
  input.className = 'nota-input';
  input.value = estado[materia.codigo]?.nota || '';

  input.addEventListener('input', () => {
    estado[materia.codigo] = estado[materia.codigo] || {};
    estado[materia.codigo].nota = input.value;
    localStorage.setItem('estadoMaterias', JSON.stringify(estado));
  });

  return input;
}

function actualizarVista() {
  contenedor.innerHTML = '';

  const niveles = [...new Set(materias.map(m => m.nivel))].sort();

  niveles.forEach(nivel => {
    const col = document.createElement('div');
    col.className = 'nivel-col';
    col.innerHTML = `<h2>${nivel}° Año</h2>`;

    materias.filter(m => m.nivel === nivel).forEach(m => {
      const datos = estado[m.codigo] || {};
      const aprobadas = ['Aprobada', 'Promocionada'];
      const puedeCursar = m.correlativas.every(cor => aprobadas.includes(estado[cor]?.estado));
      const estaAprobada = aprobadas.includes(datos.estado);

      const card = document.createElement('div');
      card.className = 'materia';
      if (estaAprobada) card.classList.add('aprobada');
      else if (!puedeCursar) card.style.opacity = '0.5';

      const label = document.createElement('label');
      label.textContent = `${m.codigo} - ${m.nombre}`;
      card.appendChild(label);

      const selectEstado = crearSelectEstado(m);
      card.appendChild(selectEstado);

      if (estaAprobada) {
        const inputNota = crearInputNota(m);
        card.appendChild(inputNota);
      }

      col.appendChild(card);
    });

    contenedor.appendChild(col);
  });
}

actualizarVista();

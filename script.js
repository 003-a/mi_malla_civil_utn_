import { materias } from './data.js';

const contenedor = document.getElementById('malla');

const estado = {};

function actualizarVista() {
  contenedor.innerHTML = '';

  materias.forEach(m => {
    const puedeCursar = m.correlativas.every(cor => estado[cor]);
    const aprobada = estado[m.codigo] === true;

    const div = document.createElement('div');
    div.className = 'materia';
    div.style.margin = '8px 0';

    if (aprobada) {
      div.classList.add('aprobada');
    } else if (!puedeCursar) {
      div.style.opacity = '0.5';
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = m.codigo;
    checkbox.checked = aprobada;
    checkbox.disabled = !puedeCursar;
    checkbox.addEventListener('change', () => {
      estado[m.codigo] = checkbox.checked;
      localStorage.setItem('estadoMaterias', JSON.stringify(estado));
      actualizarVista();
    });

    const label = document.createElement('label');
    label.htmlFor = m.codigo;
    label.textContent = `${m.codigo} - ${m.nombre}`;

    div.appendChild(checkbox);
    div.appendChild(label);
    contenedor.appendChild(div);
  });
}

// Cargar estado guardado en localStorage
const guardado = localStorage.getItem('estadoMaterias');
if (guardado) {
  Object.assign(estado, JSON.parse(guardado));
}

actualizarVista();

import { materias } from './data.js';

const contenedor = document.getElementById('malla');
const estado = {};

function actualizarVista() {
  contenedor.innerHTML = '';
  
  const niveles = [...new Set(materias.map(m => m.nivel))].sort();

  niveles.forEach(nivel => {
    const col = document.createElement('div');
    col.className = 'nivel-col';
    col.innerHTML = `<h2>${nivel}° Año</h2>`;
    
    materias
      .filter(m => m.nivel === nivel)
      .forEach(m => {
        const puedeCursar = m.correlativas.every(cor => estado[cor]);
        const aprobada = estado[m.codigo] === true;
        const card = document.createElement('div');
        card.className = 'materia';
        if (aprobada) card.classList.add('aprobada');
        else if (!puedeCursar) card.style.opacity = '0.5';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = aprobada;
        checkbox.disabled = !puedeCursar;
        checkbox.addEventListener('change', () => {
          estado[m.codigo] = checkbox.checked;
          localStorage.setItem('estadoMaterias', JSON.stringify(estado));
          actualizarVista();
        });

        const label = document.createElement('label');
        label.textContent = `${m.codigo} - ${m.nombre}`;

        card.append(checkbox, label);
        col.appendChild(card);
      });
    contenedor.appendChild(col);
  });
}

Object.assign(estado, JSON.parse(localStorage.getItem('estadoMaterias') || '{}'));
actualizarVista();

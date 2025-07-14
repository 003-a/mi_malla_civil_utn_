export const materias = [
  // 1er año
  { codigo: 'AM1', nombre: 'Análisis Matemático I', nivel: 1, correlativas: [] },
  { codigo: 'AGGA', nombre: 'Álgebra y Geometría Analítica', nivel: 1, correlativas: [] },
  { codigo: 'IyS', nombre: 'Ingeniería y Sociedad', nivel: 1, correlativas: [] },
  { codigo: 'QG', nombre: 'Química General', nivel: 1, correlativas: [] },
  { codigo: 'IC1', nombre: 'Ingeniería Civil I', nivel: 1, correlativas: [] },
  { codigo: 'SR', nombre: 'Sistemas de Representación', nivel: 1, correlativas: [] },
  { codigo: 'F1', nombre: 'Física I', nivel: 1, correlativas: [] },
  { codigo: 'FI', nombre: 'Fundamentos de Informática', nivel: 1, correlativas: [] },

  // 2do año
  { codigo: 'AM2', nombre: 'Análisis Matemático II', nivel: 2, correlativas: ['AM1', 'AGGA'] },
  { codigo: 'E', nombre: 'Estabilidad', nivel: 2, correlativas: ['AM1', 'AGGA', 'SR', 'F1', 'FI'] },
  { codigo: 'IC2', nombre: 'Ingeniería Civil II', nivel: 2, correlativas: ['IyS', 'IC1', 'SR', 'FI'] },
  { codigo: 'TM', nombre: 'Tecnología de los Materiales', nivel: 2, correlativas: ['AM1', 'SR', 'QG', 'F1'] },
  { codigo: 'F2', nombre: 'Física II', nivel: 2, correlativas: ['AM1', 'F1'] },
  { codigo: 'PyE', nombre: 'Probabilidad y Estadística', nivel: 2, correlativas: ['AM1', 'AGGA'] },
  { codigo: 'I1', nombre: 'Inglés I', nivel: 2, correlativas: ['IyS'] },

  // 3er año
  { codigo: 'RM', nombre: 'Resistencia de los Materiales', nivel: 3, correlativas: ['E'] },
  { codigo: 'TH', nombre: 'Tecnología del Hormigón', nivel: 3, correlativas: ['TM', 'PyE', 'I1'] },
  { codigo: 'TC', nombre: 'Tecnología de la Construcción', nivel: 3, correlativas: ['E', 'IC2', 'TM', 'I1'] },
  { codigo: 'G', nombre: 'Geotopografía', nivel: 3, correlativas: ['AM2', 'IC2', 'F2', 'PyE'] },
  { codigo: 'HGA', nombre: 'Hidráulica General y Aplicada', nivel: 3, correlativas: ['AM2', 'E', 'IC2', 'F2', 'PyE'] },
  { codigo: 'CA', nombre: 'Cálculo Avanzado', nivel: 3, correlativas: ['AM2', 'E', 'TM', 'PyE'] },
  { codigo: 'IEA', nombre: 'Instalaciones Eléctricas y Acústicas', nivel: 3, correlativas: ['IC2', 'TM', 'F2'] },
  { codigo: 'IT', nombre: 'Instalaciones Termomecánicas', nivel: 3, correlativas: ['IC2', 'TM', 'F2'] },
  { codigo: 'EC', nombre: 'Economía', nivel: 3, correlativas: ['IC2', 'PyE', 'I1'] },
  { codigo: 'I2', nombre: 'Inglés II', nivel: 3, correlativas: ['I1'] },

  // 4to año
  { codigo: 'GEOTECNIA', nombre: 'Geotecnia', nivel: 4, correlativas: ['RM', 'TH', 'TC', 'G', 'HGA'] },
  { codigo: 'ISYG', nombre: 'Instalaciones Sanitarias y de Gas', nivel: 4, correlativas: ['TC', 'G', 'HGA', 'E'] },
  { codigo: 'DAPU1', nombre: 'Diseño Arquitectónico y Planeamiento 1', nivel: 4, correlativas: ['TC', 'G', 'IEA', 'IT', 'E', 'I2'] },
  { codigo: 'AE1', nombre: 'Análisis Estructural 1', nivel: 4, correlativas: ['RM', 'TH'] },
  { codigo: 'EH', nombre: 'Estructuras de Hormigón', nivel: 4, correlativas: ['RM', 'TH', 'TC', 'G', 'I2'] },
  { codigo: 'HOH', nombre: 'Hidrología y Obras Hidráulicas', nivel: 4, correlativas: ['RM', 'TC', 'G', 'HGA', 'E', 'I2'] },
  { codigo: 'IL', nombre: 'Ingeniería Legal', nivel: 4, correlativas: ['AM2', 'IC2', 'PyE', 'I1'] },

  // Electivas 4to año
  { codigo: 'FERRO1', nombre: 'Ferrocarriles I', nivel: 4, correlativas: ['TH', 'TC'] },
  { codigo: 'FERRO2', nombre: 'Ferrocarriles II', nivel: 4, correlativas: ['FERRO1', 'RM', 'GEOTECNIA'] },

  // 5to año
  { codigo: 'CMYM', nombre: 'Construcciones Metálicas y de Madera', nivel: 5, correlativas: ['CA', 'AE1'] },
  { codigo: 'C', nombre: 'Cimentaciones', nivel: 5, correlativas: ['CA', 'GEOTECNIA', 'AE1', 'EH', 'HOH'] },
  { codigo: 'IS', nombre: 'Ingeniería Sanitaria', nivel: 5, correlativas: ['GEOTECNIA', 'ISYG', 'HOH'] },
  { codigo: 'OCO', nombre: 'Organización y Conducción de Obras', nivel: 5, correlativas: ['GEOTECNIA', 'ISYG', 'DAPU1', 'EH', 'HOH'] },
  { codigo: 'VC1', nombre: 'Vías de Comunicación I', nivel: 5, correlativas: ['TH', 'TC', 'G'] },
  { codigo: 'AE2', nombre: 'Análisis Estructural II', nivel: 5, correlativas: ['CA', 'GEOTECNIA', 'AE1', 'EH', 'HOH'] },
  { codigo: 'VC2', nombre: 'Vías de Comunicación II', nivel: 5, correlativas: ['GEOTECNIA', 'EH', 'HOH', 'IL', 'VC1'] },
  { codigo: 'GAyDS', nombre: 'Gestión Ambiental y Desarrollo Sustentable', nivel: 5, correlativas: ['GEOTECNIA', 'DAPU1', 'HOH', 'IL'] },

  // Electivas 5to año
  { codigo: 'DAPU2', nombre: 'Diseño Arquitectónico y Planeamiento 2', nivel: 5, correlativas: ['DAPU1'] },
  { codigo: 'RS', nombre: 'Rocas y Suelos', nivel: 5, correlativas: ['C'] },
  { codigo: 'PP', nombre: 'Puentes y Prefabricaciones', nivel: 5, correlativas: ['GEOTECNIA', 'EH'] },
  { codigo: 'GCPII', nombre: 'Gestión de Competencias Profesionales en la Ingeniería', nivel: 5, correlativas: ['TC'] },

  // 6to año
  { codigo: 'PF', nombre: 'Proyecto Final', nivel: 6, correlativas: ['GEOTECNIA', 'ISYG', 'DAPU1', 'AE1', 'EH', 'HOH', 'IL'] },

  // Electivas 6to año
  { codigo: 'CMH', nombre: 'Centrales y Máquinas Hidráulicas', nivel: 6, correlativas: ['HOH'] },
  { codigo: 'EE', nombre: 'Estructuras Especiales', nivel: 6, correlativas: ['EH', 'CMYM', 'C', 'AE2'] },
  { codigo: 'PVN', nombre: 'Puertos y Vías Navegables', nivel: 6, correlativas: ['EH'] },
  { codigo: 'V3', nombre: 'Vías de Comunicación III', nivel: 6, correlativas: ['VC2'] }
];

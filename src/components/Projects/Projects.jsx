import React from 'react';

const projects = [
  {
    title: 'Sistema de Gestión de Tareas',
    description: 'Desarrollé un sistema web para la gestión de tareas utilizando React y Node.js. Permite a los usuarios crear, editar y eliminar tareas, así como asignar prioridades y fechas de vencimiento.',
    link: 'https://ejemplo.com/proyecto1',
  },
  {
    title: 'Aplicación de Notas',
    description: 'Creé una aplicación móvil de toma de notas con React Native. La aplicación incluye funcionalidades como la creación de notas, la categorización por etiquetas y la sincronización en la nube.',
    link: 'https://ejemplo.com/proyecto2',
  },
  {
    title: 'Sitio Web Personal',
    description: 'Diseñé y desarrollé mi propio sitio web personal utilizando HTML, CSS y JavaScript. Incluye secciones como "Sobre mí", "Habilidades" y "Contacto".',
    link: 'https://ejemplo.com/proyecto3',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-8 flex flex-col min-h-screen bg-gradient-to-r from-teal-500 to-teal-600">
      <h2 className="text-3xl font-semibold mb-4">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react'; 
import './Concepts.css';


const FrontendTable = () => {
  return (
    <div className=' flex flex-col min-h-screen bg-teal-700'>
      <h2>Conceptos de Frontend y Definiciones</h2>
      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Definición</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>HyperText Markup Language: Lenguaje de marcado utilizado para estructurar el contenido de una página web.</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Cascading Style Sheets: Hojas de estilo utilizadas para controlar el diseño y la presentación de una página web.</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Lenguaje de programación que permite la creación de contenido dinámico e interactivo en una página web.</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Librería de JavaScript para construir interfaces de usuario, desarrollada por Facebook.</td>
          </tr>
          <tr>
            <td>Componentes</td>
            <td>Unidades independientes y reutilizables de código en React que encapsulan la lógica y la interfaz de usuario.</td>
          </tr>
          <tr>
            <td>Responsive Design</td>
            <td>El front-end incluye la implementación de diseños responsivos, que se adaptan a diferentes tamaños de pantalla para mejorar la experiencia del usuario en dispositivos móviles y de escritorio.</td>
          </tr>
          <tr>
            <td>Tailwind CSS</td>
            <td>Marco de diseño CSS eficiente basado en clases de utilidad para construir estilos personalizados</td>
          </tr>
          <tr>
            <td>Vite</td>
            <td>Entorno de desarrollo rápido para aplicaciones web modernas, conocido por su velocidad en el desarrollo y eficiencia en la carga de módulos.</td>
          </tr>
          <tr>
            <td>Next.js</td>
            <td>Marco de desarrollo React que facilita la creación de aplicaciones web escalables y de alto rendimiento, con características como renderizado del lado del servidor, generación de páginas estáticas y enrutamiento automático.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FrontendTable;

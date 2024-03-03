import React from 'react';
import './ExercisesGit.css';

const FrontendTable = () => {
  return (
    <div className='flex flex-col min-h-screen bg-teal-800'>
      <h1>Ejercicios de front end</h1>

      <table id="customers">
        <thead>
          <tr>
            <th>Ejercicios</th>
            <th>Enlace de git</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contador</td>
            <td><a href="https://github.com/ktavilav/react_counter" target="_blank" rel="noopener noreferrer">https://github.com/ktavilav/react_counter</a></td>
          </tr>
          <tr>
            <td>Carrusel</td>
            <td><a href="https://github.com/ktavilav/ReactCarousel" target="_blank" rel="noopener noreferrer">https://github.com/ktavilav/ReactCarousel</a></td>
          </tr>
          <tr>
            <td>Gatos</td>
            <td><a href="https://github.com/ktavilav/reactUseEffect" target="_blank" rel="noopener noreferrer">https://github.com/ktavilav/reactUseEffect</a></td>
          </tr>
          <tr>
            <td>Primer reto Restaurante App</td>
            <td><a href="https://github.com/ktavilav/restaurante-react" target="_blank" rel="noopener noreferrer">https://github.com/ktavilav/restaurante-react</a></td>
          </tr>
          <tr>
            <td>Taller de programación #1</td>
            <td>xxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FrontendTable;

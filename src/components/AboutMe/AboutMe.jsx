import React from 'react';

const AboutMe = () => {
  return (
    <div className='flex flex-col min-h-screen bg-teal-600'>
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">

          {/* Left Column */}
          <div className="w3-third">

            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocJ_Dh3GISVN9lblLWgElKx5whaIVs_MjhRMM-uJNYnkJa0=s576-c-no" style={{ width: '100%' }} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                </div>
              </div>
              <div className="w3-container">

              <div className="w3-container w3-card w3-white">
  <h2 className="w3-text-grey w3-padding-16">
    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>FORMACION ACADEMICA
  </h2>
  <div className="w3-container">
    <p>Profesional Ingeniería de sistemas | Universidad Nacional abierta y a distancia</p>
    <hr />
  </div>
  <div className="w3-container">
    <p className="w3-left-align">
      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Ingeniera de Sistemas
    </p>
    <p className="w3-left-align">
      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Bogotá, Colombia
    </p>
    <p className="w3-left-align">
      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>katerineavila@hotmail.com
    </p>
    <p className="w3-left-align">
      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>313289883
    </p>
  </div>
</div>

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>APTITUDES</b></p>
                <div className="w3-container w3-left-align">
        <p>Alta capacidad resolutiva</p>
        <p>Creación de código</p>
        <p>Documentación de desarrollos</p>
        <p>Capacidad analítica</p>
        <p>Colaboración interdisciplinar</p>
        <p>Gestión de sitios web</p>
        <p>Resolución de problemas</p>
        <br />
      </div>
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>FORMACIÓN ADICIONAL</b></p>
                <div className="w3-container w3-left-align">
  <p>Certified Tech Developer | Digital House - 2024</p>
  <p>Curso profesional de Scrum platzi - 2022</p>
  <br />
</div>

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>LENGUAJES DE PROGRAMACIÓN</b></p>
        
                <ul className="w3-left-align">
  <li>HTML/CSS.     Automatización de prueba</li>
  <li>JavaScript.   Gestión en línea con Metodología Kanban</li>
  <li>SQL           React.js</li>
  <li>Git           Gestión en línea con Metodología Kanban</li>
</ul>

                <br />
              </div>
            </div><br />

          </div>

          {/* Right Column */}
          <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom w3-justify w3-center">
  <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Katherine Avila</h2>
  <p>Desarrolladora web innovadora con habilidades de organización y multitarea, especializada en la creación de soluciones web y diseños de aplicaciones para clientes exigentes. Además, tengo experiencia como Scrum Master, liderando equipos en la implementación efectiva de Scrum y destacándome en la gestión de historias de usuarios. Busco una posición en una compañía moderna donde pueda aplicar mi experiencia en desarrollo web y Scrum Master, contribuyendo al éxito de proyectos desafiantes.</p>
  <hr />
</div>


            

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>EXPERIENCIA PROFESIONAL</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Freelance como lider de gestion de proyecto | Porgrama de las naciones unidas</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2021 - Feb 2022 </h6>
                <p>
Coordiné el equipo de desarrollo
Desarrollé la migración de una aplicación móvil a una aplicación web
Utilicé el patrón de arquitectura MWC
Realicé la vistas del aplicativo de manera responsive Conecté la aplicación a un servidor asmx con SOAP Utilicé herramientas como framework de Bootstrap para obtener un diseño profesional</p>
                <hr />
              </div>
              {/* Agrega aquí más experiencias laborales según sea necesario */}
            </div>

            <div className="w3-container w3-card w3-white ">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>FORMACION ACADEMICA</h2>
              <div className="w3-container">
                <p>Profesional Ingeniería de sistemas | Universidad Nacional abierta y a distancia</p>
                <hr />
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="w3-container w3-teal w3-center w3-margin-top">
      </footer>
    </div>
  );
};

export default AboutMe;

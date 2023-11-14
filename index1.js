function cambiarContenido(opcion) {
  var imagen = document.getElementById("imagen-cambiante");
  var parrafo = document.getElementById("parrafo-cambiante");

  switch (opcion) {
      case 1:
          // Contenido para Nuestra Rectora
          imagen.style.display = "block";
          imagen.src = "images/rectora.png";
          parrafo.innerHTML = '<h1>Mensaje de Nuestra Rectora</h1><p>Es un gusto muy especial dirigirme a ti, apreciable aspirante.</p><p>En la Universidad Tecnológica de León, te abrimos las puertas para que formes parte de nuestra familia, ya que contamos con una gama muy amplia de carreras universitarias para preparar a los futuros profesionistas que requiere León y Guanajuato.</p> <p>Estamos seguros que nuestro modelo educativo puede ser de gran interés y utilidad para continuar tu trayecto de formación profesional y laboral.</p><center><b>Yoloxóchitl Bustamante Díez</b><p>Encargada del Despacho de Rectoría</p></center>';
          break;
          case 2:
  imagen.style.display = "block";
  // Contenido para Conoce La UTL
  imagen.src = "images/utl-aspirantes.png";
  parrafo.innerHTML = `
    <h1>¿Quiénes Somos?</h1>
    <br>
    <select id="utl-dropdown" onchange="mostrarContenidoSeleccionado()">
    <option value="#">Selecciona una opcion</option>
    <option value="historia">Historia</option>
      <option value="filosofia">Filosofia Institutiva</option>
    </select>
    <hr>
    <div id="contenido-quienes-somos"></div>
    <br>
    <style>
  /* Estilos para alinear el contenido a la izquierda y la imagen a la derecha */
  .content-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .text-left {
    flex: 1;
    text-align: justify;
  }

  .image-right {
    flex: 1;
    text-align: right;
  }

  /* Estilos para centrar los botones */
  .center-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* Estilos para los botones */
  .large-button {
    width: 200px;
    height: 60px;
    margin: 10px;
  }

  .large-button {
    width: auto; /* Permite que el ancho se ajuste al contenido del botón */
    height: 60px;
    margin: 10px;
    white-space: nowrap; /* Evita el salto de línea en el texto si es muy largo */
    overflow: hidden; /* Oculta el texto que desborde el botón */
    text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el texto desborda el botón */
  }

  .header-with-button {
    display: flex;
    align-items: center; /* Centrar verticalmente los elementos dentro del contenedor */
}

.header-with-button h1 {
    flex: 1; /* El título ocupará todo el espacio restante */
}
</style>

<div class="header-with-button">
    <h1>Modelo Educativo</h1>
    <button id="toggleButton" onclick="toggleContenido()">Mostrar/Ocultar Contenido</button>
</div>
<hr>
<div id="contenidoOculto" style="display: none;">
<div class="content-section">
  <div class="text-left">
    <!-- Texto del lado izquierdo -->
    <p>Estudiando en la UTL se pueden lograr 2 títulos profesionales en menos de 4 años. Debido a la formación intensiva cuatrimestral en los primeros 2 años se puede obtener el título como Técnico/a Superior Universitario/a (TSU) y continuando los estudios por 1 año 8 meses más, se consigue un segundo título como Ingeniería o Licenciatura.

    Brindamos formación 70% práctica y 30% teórica.</p>
  </div>
  <div class="image-right">
    <!-- Imagen del lado derecho -->
    <img src="images/modeloeducativo.jpg" alt="Imagen 1" width="400px" style="border-radius: 0 80px 0 80px;"/>
  </div>
</div>

<div class="content-section">
  <div class="image-left">
    <!-- Imagen del lado izquierdo -->
    <img src="images/Ventaja_estudiar_nosotros.jpg" alt="Imagen 2" width="400px" style="border-radius: 0 80px 0 80px;"/>
  </div>
  <div class="text-right">
    <!-- Texto del lado derecho -->
    <h1>Ventajas de Estudiar en UTL</h1>
    <p style="text-align: justify;">La Universidad Tecnológica de León (UTL) forma parte del Sistema Nacional de Universidades Tecnológicas, integrado por más de 122 planteles en la República Mexicana. Nuestro modelo ofrece planes de estudio funcionales, para formar a los profesionales que requieren los sectores productivos y sociales.</p>
    <p style="text-align: justify;">La UTL cuenta con mas de 27 años de experiencia y ha recibido importantes reconocimientos de calidad. Tenemos las certificaciones en la norma ISO 9001:2015 e ISO 14001:2015, NMX-R-025-SCFI-2015, además de todos nuestros programas educativos están acreditados en calidad por organismos reconocidos por el COPAES (Consejo para la Acreditación de la Educación Superior) y CIEES (Comités Interinstitucionales para la Evaluacion de la Educacion Superior).</p>
  </div>
</div>

<div class="center-buttons">
  <button class="large-button">Somos Diferentes</button>
  <button class="large-button">Servicios Universitarios y de Formación Integral</button>
</div>
</div>
<br>
<div class="header-with-button">
    <h1>Conoce Nuestras Becas</h1>
    <button id="toggleButton" onclick="becasContenido()">Mostrar/Ocultar Contenido</button>
</div>
<hr>
<div id="becasOculto" style="display: none;">
<div class="content-section">
  <div class="text-left">
    <!-- Texto en el lado izquierdo -->
    <p style="text-align: justify;">La Universidad Tecnológica de León, cuenta con un sistema de Becas Internas y Externas con el objetivo de brindar apoyo para que el alumnado pueda continuar con su preparación académica y aminorar los factores económicos.</p>
    <p style="text-align: justify;">¡Que las cuestiones financieras no sean una limitante para que puedas continuar con tus estudios!</p>
  </div>
  <div class="image-right">
    <!-- Imagen en el lado derecho -->
    <img src="images/2.3.1 Becas.jpg" alt="Imagen 2" width="400px" style="border-radius: 0 80px 0 80px;"/>
  </div>
</div>
<div style="width: 100%;"><div style="position: relative; padding-bottom: 200%; padding-top: 0; height: 0;"><iframe title="Sitio Becas_EA5" frameborder="0" width="800px" height="1600px" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/63ed23b4958690001992bfc8" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div></div>
<h1>Ubicacion</h1>
    <br>
    <select id="ubicacion-dropdown" onchange="mostrarContenidoSeleccionadoUbicacion()">
      <option value="#" onclick="cerrarContenido()">Selecciona una opcion</option>
      <option value="campus1">Campus 1</option>
      <option value="campus2">Campus 2</option>
    </select>
    <hr>
    <div id="contenido-ubicacion"></div>
  `;
  break;

      case 3:
          imagen.style.display = "block";
          // Contenido para Oferta Educativa
          imagen.src = "images/utl-aspirantes.png";
          parrafo.innerHTML = `<h1>Carreras De:</h1>
          <br>
          <select id="carreras-dropdown" onchange="mostrarContenidoSeleccionadoCarreras()">
            <option value="#" onclick="cerrarContenido()">Selecciona una opcion</option>
            <option value="tsu">TSU</option>
            <option value="ing">Ing/Lic</option>
          </select>
          <hr>
          <div id="contenido-carreras"></div>`;
          break;
      case 4:
          imagen.style.display = "block";
          // Contenido para ¿Cómo puedo estudiar en la UTL?
          imagen.src = "images/utl-aspirantes.png";
          parrafo.innerHTML = `
          <br>
          <select id="ingreso-dropdown" onchange="mostrarContenidoSeleccionadoIngreso()">
            <option value="#" onclick="cerrarContenido()">Selecciona una opcion</option>
            <option value="tsu">TSU</option>
            <option value="ing">Ing/Lic</option>
          </select>
          <hr>
          <div id="contenido-ingreso"></div>`;
          break;
      case 5:
          // Contenido para Contáctanos
          imagen.style.display = "none"; // Oculta la imagen solo en esta opción
          parrafo.innerHTML = `
              <form method="post" action="#">
                <div class="fields">
                  <div class="field half">
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div class="field half">
                    <label for="email">Correo Electronico</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div class="field">
                    <label for="message">Mensaje</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                  </div>
                </div>
                <ul class="actions">
                  <li>
                    <input type="submit" value="Enviar Mensaje"  />
                  </li>
                </ul>
              </form>`;
          break;
      default:
          imagen.style.display = "none";
          parrafo.textContent = "Selecciona una opción para ver su contenido.";
          break;
  }
}



  function restablecerContenido() {
    // Restablecer la imagen y el contenido del párrafo a su estado original
    imagen.style.display = "block";
    var imagen = document.getElementById("imagen-cambiante");
    var parrafo = document.getElementById("parrafo-cambiante");
    imagen.src = "images/utl-aspirantes.png";
    parrafo.innerHTML = "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href='#work'>awesome work</a>.";
  }
  function mostrarContenidoSeleccionado() {
    var dropdown = document.getElementById("utl-dropdown");
    var contenidoUtl = document.getElementById("contenido-quienes-somos");
    var selectedOption = dropdown.value;
  
    // Mostrar contenido correspondiente según la opción seleccionada en el dropdown
    if (selectedOption === "historia") {
      contenidoUtl.innerHTML = `<p>La Universidad Tecnológica de León inició su funcionamiento el 26 de Septiembre de 1995, con la inauguración de cursos efectuada por el C. Vicente Fox Quesada, Gobernador Constitucional del Estado de Guanajuato, ante la presencia de altas personalidades del Gobierno Federal, Estatal, Municipal y la Comunidad Universitaria.</p>
      <p>Desde el 25 de septiembre de 1995 y hasta la fecha, formamos ciudadanos y ciudadanas de bien, con pensamiento global y acción local, con innovación, profundos valores humanos y universales y sobre todo, brindando educación tecnológica y de calidad, orientada a la industria 4.0 y la mente-factura”.</p>
      <center><img id="imagen-cambiante" src="images/Historia1.jpg" alt="" height="400px"/></center>
          <center><img id="imagen-cambiante" src="images/Historia2.jpg" alt="" height="425px"/></center>
          <center><button onclick="cerrarContenido()">Cerrar ¿Quienes Somos?</button></center>`;
    } else if (selectedOption === "filosofia") {
      contenidoUtl.innerHTML = `
  <br>
  <center>
    <img id="imagen-cambiante" src="images/filosofia.png" style="border-radius: 0 80px 0 80px;" alt="" height="300px"/>
  </center>
  <h2>Mision</h2>
  <hr>
  <p>Formar ciudadanos/as del mundo con educación tecnológica de calidad a través de la docencia, la investigación aplicada, la difusión del conocimiento y la vinculación, que contribuyan a la innovación y al desarrollo sustentable.</p>
  <h2>Vision</h2>
  <hr>
  <p>Somos una Universidad reconocida por su calidad internacional, sus aportaciones al desarrollo de la tecnología y al bienestar de la sociedad.</p>
  <h2>Valores</h2>
  <hr>
  <h3>Dignidad:</h3><p>Es el valor intrínseco de las personas, así como de los objetos y situaciones en cuanto contribuyen a la realización personal.</p>
  <h3>Honestidad:</h3><p>Tener conciencia clara de lo que está bien en nuestra propia conducta y en nuestra relación con los demás</p>
  <h3>Libertad:</h3><p>Tomar decisiones propias y expresar ideales aceptando las diferencias con el resto de las personas</p>
  <h3>Busqueda de la Verdad:</h3><p>Cualidad de la inteligencia por la cual el ser humano se capacita y perfecciona para llegar a las causas de las cosas.</p>
  <h3>Responsabilidad:</h3><p>Cumplir con las obligaciones y trabajos asignados según las normas establecidas.</p>
  <h3>Justicia:</h3><p>Cumplir con las obligaciones y trabajos asignados según las normas establecidas.</p>
  <center><button onclick="cerrarContenido()">Cerrar ¿Quienes Somos?</button></center>
`;
    }
  }

  function cerrarContenido() {
    var contenidoUtl = document.getElementById("contenido-quienes-somos");
    contenidoUtl.innerHTML = ""; // Limpia el contenido
  }

  function toggleContenido() {
    var contenidoOculto = document.getElementById("contenidoOculto");

    if (contenidoOculto.style.display === "none" || contenidoOculto.style.display === "") {
        contenidoOculto.style.display = "block";
    } else {
        contenidoOculto.style.display = "none";
    }
}

function becasContenido() {
  var contenidoOculto = document.getElementById("becasOculto");

  if (contenidoOculto.style.display === "none" || contenidoOculto.style.display === "") {
      contenidoOculto.style.display = "block";
  } else {
      contenidoOculto.style.display = "none";
  }
}

function mostrarContenidoSeleccionadoUbicacion() {
  var dropdown = document.getElementById("ubicacion-dropdown");
  var contenidoUtl = document.getElementById("contenido-ubicacion");
  var selectedOption = dropdown.value;

  // Mostrar contenido correspondiente según la opción seleccionada en el dropdown
  if (selectedOption === "campus1") {
    contenidoUtl.innerHTML = `<center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.226296332192!2d-101.58422372553342!3d21.063622086581816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b963652f40f0d%3A0xa7d88da0ad8eff8a!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1698895572706!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
    <center><button onclick="cerrarContenidoUbicacion()">Cerrar Ubicacion</button></center>`;
  } else if (selectedOption === "campus2") {
    contenidoUtl.innerHTML = `<center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.067362683252!2d-101.57702732553321!3d21.06997158636336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b962c40501be9%3A0x6f8a0c54cf13cf56!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n%20Campus%20II!5e0!3m2!1ses-419!2smx!4v1698895612560!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
    <center><button onclick="cerrarContenidoUbicacion()">Cerrar Ubicacion</button></center>`;
  }
}

function cerrarContenidoUbicacion() {
  var contenidoUtl = document.getElementById("contenido-ubicacion");
  contenidoUtl.innerHTML = ""; // Limpia el contenido
}

function mostrarContenidoSeleccionadoCarreras() {
  var dropdown = document.getElementById("carreras-dropdown");
  var contenidoUtl = document.getElementById("contenido-carreras");
  var selectedOption = dropdown.value;

  // Mostrar contenido correspondiente según la opción seleccionada en el dropdown
  if (selectedOption === "tsu") {
    contenidoUtl.innerHTML = `<style>
    /* Estilos para alinear el contenido a la izquierda y la imagen a la derecha */
    .content-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
  
    .text-left {
      flex: 1;
      text-align: justify;
    }
  
    .image-right {
      flex: 1;
      text-align: right;
    }
  
    /* Estilos para centrar los botones */
    .center-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  
    /* Estilos para los botones */
    .large-button {
      width: 200px;
      height: 60px;
      margin: 10px;
    }

    .card-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }

  .card {
      width: calc(33.33% - 20px);
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
  }

  .card-image {
    width: 100%; /* Tamaño fijo para todas las imágenes */
    height: 200px;
      border-radius: 5px;
  }
  
  
    .large-button {
      width: auto; /* Permite que el ancho se ajuste al contenido del botón */
      height: 60px;
      margin: 10px;
      white-space: nowrap; /* Evita el salto de línea en el texto si es muy largo */
      overflow: hidden; /* Oculta el texto que desborde el botón */
      text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el texto desborda el botón */
    }
  
    .header-with-button {
      display: flex;
      align-items: center; /* Centrar verticalmente los elementos dentro del contenedor */
  }
  
  .header-with-button h1 {
      flex: 1; /* El título ocupará todo el espacio restante */
  }
  </style>
    <center>
    <div class="content-section">
  <div class="text-left">
    <!-- Texto en el lado izquierdo -->
    <h1 style="text-align: justify;">TSU</h1>
    <h3 style="text-align: justify;">Tecnico Superior Universitario</h3>
  </div>
  <div class="image-right">
    <!-- Imagen en el lado derecho -->
    <img src="images/tsu_oferta_general.JPG" alt="Imagen 2" width="400px" style="border-radius: 0 80px 0 80px;"/>
  </div>
</div></center><center>
<div class="card-container">
        <div class="card">
            <img src="images/Carreras/Entornos Virtuales y Negocios Digitales.JPG" alt="Entornos" class="card-image">
            <h4>TSU EN TI AREA ENTORNOS VIRTUALES Y NEGOCIOS DIGITALES</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Desarrollo de Software Multiplataforma.JPG" alt="desarrollo" class="card-image">
            <h4>TSU EN TI ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Redes y Telecomunicaciones.JPG" alt="redes" class="card-image">
            <h4>TSU EN TI ÁREA INFRAESTRUCTURA DE REDES DIGITALES</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/administracion.JPG" alt="administracion" class="card-image">
            <h4>TSU EN ADMINISTRACIÓN ÁREA CAPITAL HUMANO</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Desarrollo de Negocios Área Mercadotecnia.JPG" alt="mercadotecnia" class="card-image">
            <h4>TSU EN DESARROLLO DE NEGOCIOS ÁREA MERCADOTECNIA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Turismo.JPG" alt="turismo" class="card-image">
            <h4>TSU EN TURISMO ÁREA HOTELERÍA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Gastronomía.JPG" alt="gastronomia" class="card-image">
            <h4>TSU EN GASTRONOMÍA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Transporte Terrestre.JPG" alt="transporte" class="card-image">
            <h4>LOGÍSTICA ÁREA TRANSPORTE TERRESTRE</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Química.JPG" alt="quimica" class="card-image">
            <h4>TSU EN QUÍMICA ÁREA TECNOLOGÍA AMBIENTAL</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Mecatrónica.JPG" alt="mecatronica" class="card-image">
            <h4>TSU EN MECATRÓNICA ÁREA SISTEMAS DE MANUFACTURA FLEXIBLE</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Optomecatrónica.JPG" alt="optomecatronica" class="card-image">
            <h4>TSU EN MECATRÓNICA ÁREA OPTOMECATRÓNICA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Automotriz.JPG" alt="automotriz" class="card-image">
            <h4>TSU EN PROCESOS INDUSTRIALES ÁREA AUTOMOTRIZ</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Manufactura.JPG" alt="manufactura" class="card-image">
            <h4>TSU EN PROCESOS INDUSTRIALES ÁREA MANUFACTURA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Plásticos.JPG" alt="plasticos" class="card-image">
            <h4>TSU EN PROCESOS INDUSTRIALES ÁREA PLÁSTICOS</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Gestión y Productividad de Calzado.JPG" alt="calzado" class="card-image">
            <h4>TSU EN PROCESOS INDUSTRIALES ÁREA GESTIÓN Y PRODUCTIVIDAD DE CALZADO</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Mantenimiento Industrial.JPG" alt="mantenimiento" class="card-image">
            <h4>TSU EN MANTENIMIENTO ÁREA INDUSTRIAL</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

    </div>
    </center>
    <center><button onclick="cerrarContenidoCarreras()">Cerrar Carreras TSU</button></center>`;
  } else if (selectedOption === "ing") {
    contenidoUtl.innerHTML = `<style>
    /* Estilos para alinear el contenido a la izquierda y la imagen a la derecha */
    .content-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
  
    .text-left {
      flex: 1;
      text-align: justify;
    }
  
    .image-right {
      flex: 1;
      text-align: right;
    }
  
    /* Estilos para centrar los botones */
    .center-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  
    /* Estilos para los botones */
    .large-button {
      width: 200px;
      height: 60px;
      margin: 10px;
    }

    .card-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }

  .card {
      width: calc(33.33% - 20px);
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
  }

  .card-image {
    width: 100%; /* Tamaño fijo para todas las imágenes */
    height: 200px;
      border-radius: 5px;
  }
  
  
    .large-button {
      width: auto; /* Permite que el ancho se ajuste al contenido del botón */
      height: 60px;
      margin: 10px;
      white-space: nowrap; /* Evita el salto de línea en el texto si es muy largo */
      overflow: hidden; /* Oculta el texto que desborde el botón */
      text-overflow: ellipsis; /* Muestra puntos suspensivos (...) si el texto desborda el botón */
    }
  
    .header-with-button {
      display: flex;
      align-items: center; /* Centrar verticalmente los elementos dentro del contenedor */
  }
  
  .header-with-button h1 {
      flex: 1; /* El título ocupará todo el espacio restante */
  }
  </style>
    <center>
    <div class="content-section">
  <div class="text-left">
    <!-- Texto en el lado izquierdo -->
    <h1 style="text-align: justify;">LICENCIATURA E INGENIERÍA</h1>
    <h3 style="text-align: justify;">CONTINUIDAD PARA EGRESADOS DE TSU</h3>
  </div>
  <div class="image-right">
    <!-- Imagen en el lado derecho -->
    <img src="images/Carreras/ing_oferta_general.JPG" alt="Imagen 2" width="400px" style="border-radius: 0 80px 0 80px;"/>
  </div>
</div></center><center>
<div class="card-container">
        <div class="card">
            <img src="images/Carreras/Entornos Virtuales y Negocios Digitales.JPG" alt="Entornos" class="card-image">
            <h4>INGENIERÍA EN ENTORNOS VIRTUALES Y NEGOCIOS DIGITALES</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/gestión de software.JPG" alt="desarrollo" class="card-image">
            <h4>INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/redes inteligentes y ciberseguridad.JPG" alt="redes" class="card-image">
            <h4>INGENIERÍA EN REDES INTELIGENTES Y CIBERSEGURIDAD</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Capital Humano.JPG" alt="administracion" class="card-image">
            <h4>LICENCIATURA EN GESTIÓN DEL CAPITAL HUMANO</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Innovación de Negocios y Mercadotecnia.JPG" alt="mercadotecnia" class="card-image">
            <h4>LICENCIATURA EN INNOVACIÓN DE NEGOCIOS Y MERCADOTECNIA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Desarrollo Turístico.JPG" alt="turismo" class="card-image">
            <h4>LICENCIATURA EN GESTIÓN Y DESARROLLO TURÍSTICO</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/gastro.JPG" alt="gastronomia" class="card-image">
            <h4>LICENCIATURA EN GASTRONOMÍA</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Redes Logísticas.JPG" alt="transporte" class="card-image">
            <h4>LICENCIATURA EN DISEÑO Y GESTIÓN DE REDES LOGÍSTICAS</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Tecnología Ambiental.JPG" alt="quimica" class="card-image">
            <h4>INGENIERÍA EN TECNOLOGÍA AMBIENTAL</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/meca.JPG" alt="mecatronica" class="card-image">
            <h4>INGENIERÍA EN MECATRÓNICATEMAS DE MANUFACTURA FLEXIBLE</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/industrial.JPG" alt="optomecatronica" class="card-image">
            <h4>INGENIERÍA EN MANTENIMIENTO INDUSTRIAL</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

        <div class="card">
            <img src="images/Carreras/Sistemas Productivos.JPG" alt="automotriz" class="card-image">
            <h4>INGENIERÍA EN SISTEMAS PRODUCTIVOS</h4>
            <a href="#" class="button">LEER MAS...</a>
        </div>

    </div>
    <center><button onclick="cerrarContenidoCarreras()">Cerrar Carreras Ing/Lic</button></center>`;
  }
}

function cerrarContenidoCarreras() {
  var contenidoUtl = document.getElementById("contenido-carreras");
  contenidoUtl.innerHTML = ""; // Limpia el contenido
}

function mostrarContenidoSeleccionadoIngreso() {
  var dropdown = document.getElementById("ingreso-dropdown");
  var contenidoUtl = document.getElementById("contenido-ingreso");
  var selectedOption = dropdown.value;

  // Mostrar contenido correspondiente según la opción seleccionada en el dropdown
  if (selectedOption === "tsu") {
    contenidoUtl.innerHTML = `<h1>Admisiones TSU</h1>
    <center><div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe title="Proceso de admisión TSU 2023" frameborder="0" width="1200px" height="675px" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/61ddab3ca31fbb0d87451c9b" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div></center>
    <br>
    <center><button onclick="cerrarContenidoIngreso()">Cerrar Ingresos TSU</button></center>`;
  } else if (selectedOption === "ing") {
    contenidoUtl.innerHTML = `<h1>Admisiones Ingenierías y Licenciaturas</h1>
    <center><div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe title="DIAGRAMA NÚMEROS" frameborder="0" width="1200px" height="675px" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/6470f08a4ee68f0019b5b74f" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div></center>
    <br>
    <center><button onclick="cerrarContenidoIngreso()">Cerrar Ingresos Ing/Lic</button></center>`;
  }
}

function cerrarContenidoIngreso() {
  var contenidoUtl = document.getElementById("contenido-ingreso");
  contenidoUtl.innerHTML = ""; // Limpia el contenido
}
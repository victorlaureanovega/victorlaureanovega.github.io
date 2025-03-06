//Escribe un comentario explicando para qué sirve http
import http from 'http';
// http es un protocolo que permite que clientes web se comuniquen con servidores web, mediante el uso de archivos HTML.

//Escribe un comentario explicando para qué sirve fs
import fs from 'fs';
// fs es un módulo de JavaScript que permite leer, escribir, abrir, cerrar y cambiar permisos de archivos.

    //Esta función deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
          if (error) {
            //Escribe qué significa el 500 
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            // Indica un error interno en el servidor, es decir, cuando la solicitud del cliente no puede procesarse correctamente.
            
            res.end('Oh no!!!!');
            return;
          }
          //Escribe qué significa el 200
          res.writeHead(200, { 'Content-Type': 'text/html' });
          // Indica que la solicitud pudo procesarse correctamente.

          res.end(data);
      });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        const escuelas = [
          {
              "nombre": "Escuela Benito Juárez",
              "direccion": "Av. Principal 123, Ciudad de México"
          },
          {
              "nombre": "Escuela Sor Juana Inés de la Cruz",
              "direccion": "Av. México 724, Zapopan, Jalisco"
          }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });

      //Escribe qué hace la función stringify y por qué la tenemos que usar
      res.end(JSON.stringify(escuelas));
      // Convierte un objeto de JavaScript en un objeto JSON, que es fácilmente interpretable por los navegadores.
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
      const donantes = [
        {
            "nombre": "Comercial Mexicana SA de CV",
            "donativos": "Material de construcción"
        },
        {
            "nombre": "Raquel Soto",
            "donativos": "Material de construcción"
        }
      ];
      //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('.adartnocne on anigàP')
    }






    function mostrarEquipo(req, res) {
      fs.readFile('equipo.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

  function getEquipo(req, res) {
    const donantes = [
      {
          "nombre": "Octavio Sebastián Hernández Galindo",
          "cualidad": "Es hábil para investigar y también para analizar código."
      },
      {
          "nombre": "Sebastián Alejandro Soria Piñuela",
          "cualidad": "A él no lo conozco tanto, pero siempre muestra disposición para trabajar en equipo."
      },
      {
        "nombre": "José Yael Varela García",
        "cualidad": "Es muy hábil para programar y resolver problemas relacionados con el código."
      },
      {
        "nombre": "Paulina Méndez López",
        "cualidad": "También es muy hábil con el código, pero además le gusta profundizar en los temas que vemos en clase."
      }
    ];
    //Tienes que corregir varias cosas en esta sección
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(donantes));
  }







  function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
  }






    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      }
      else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      }
      else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      }
      else if (url === '/api/equipo') {
        getEquipo(req, res);
      }
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      }

      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html
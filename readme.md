# Challange API CSV

Proyecto creado para consumir archivos .csv de un api externa, procesar su data y presentar los datos válidos en una tabla.

## Requisitos

Asegurarse de tener los siguientes requisitos instalados en tu sistema:

- Docker (para ejecutar el proyecto con `docker-compose up`)
- Node.js y npm (para ejecutar el proyecto localmente)
  - API express requiere Node V14.0.0
  - Cliente React requiere Node V16.20.0

## Descarga

Clona este repositorio: `https://github.com/manupaiva/csv-api-challange.git`

## Uso

Se puede ejecutar la aplicación de diferentes maneras:

1. Usando Docker Compose
   Si tienes Docker instalado, puedes utilizar el siguiente comando para levantar la aplicación completa:

   ```shell
   docker-compose up
   ```

   Esto iniciará el API en Node.js con Express y la aplicación Vite React.

2. Ejecutando localmente
   Si prefieres ejecutar la aplicación localmente, sigue estos pasos:

   Seguir estos pasos para instalar y configurar el proyecto en entorno local:

   - Navega a la carpeta raíz del proyecto: `cd challange`

   - Instala las dependencias del API:

     ```shell
     npm install
     ```

   - Inicia el API :
     En una terminal, inicia el API en el directorio raiz de la aplicación

     ```shell
     npm start
     ```

   - En otra ventana de terminal navega a la carpeta raíz del cliente: `cd client`
   - Instala las dependencias del API:

     ```shell
     npm install
     ```

   - Inicia la aplicación cliente en el directorio ./client:
     shell

     ```shell
     npm start
     ```

3. Ejecutando los tests
   Para ejecutar los tests, asegúrate de estar en la raíz del proyecto y utiliza el siguiente comando:

   ```shell
   npm test
   ```

## Notas importantes

1. Elijo levantar el proyecto cliente con Vite, ya que trae preconfigurado los siguientes requerimientos:

   - Webpack: herramienta que prepara nuestra app para produccion, es decir, se encarga de comprimir y ordenar nuestros archivos.
   - Babel: Transpilador de código JavaScript. Convierte el codigo ES6 a código tradicional de JavaScript para que el navegador lo pueda interpretar.

2. Elijo no utilizar Redux ya que Vite se encargará de manejar los estados por mi.

3. En el API uso la libreria https para hacer peticiones al API externa porque https viene incluido con next 14. Tanto axios como fetch son librerias out of the box para node 16 en adelante. A su vez la peticion GET de https la envuelvo en una promesa.

4. OPCIONALES FALTANTES:
   - Usar StandardJS en el API: no lo he usado porque tengo una configuración global en mi visual studio code que necesito mantener activa.
   - Usar Redux en el cliente: Elijo dejar que Vite se encargue de los estados de React.
   - Usar jestjs.io en el cliente: no he podido implementar unit test en el cliente por falta de tiempo (debido a mucho trabajo)

## Autor

[Manuel Paiva](https://www.linkedin.com/in/manupaiva73/)

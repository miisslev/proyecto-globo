# Estación meteorológica en globo 

Sistema web y API REST para almacenar, visualizar en tiempo real y generar reportes de vuelos (enlace de radio nRF24L01+).

## Tecnologías utilizadas
* **Base de datos:** PostgreSQL (tablas `vuelo`, `lectura` y vista `v_reporte_vuelo`).
* **Backend / API:** Node.js con Express (`server.js`).
* **Frontend:** HTML, CSS y JavaScript puro (`index.html`) con generación de reportes imprimibles en PDF.

## Estructura del proyecto
* `tablas_sql` y `vista_sql`: Scripts SQL para crear la estructura de la base de datos.
* `server.js`: Servidor puente entre PostgreSQL y la interfaz web.
* `index.html`: Panel de monitoreo en vivo y generador de reportes.
* `iniciar.bat`: Script de arranque rápido para Windows, instala dependencias y enciende el servidor.

## Instalación y uso rápido
1. Tener instalados **PostgreSQL** y **Node.js**.
2. En **pgAdmin 4**, ejecutar el contenido de `tablas_sql` y después `vista_sql` dentro de la base de datos `postgres`.
3. Abrir `server.js` y colocar la contraseña local de PostgreSQL en la línea 14 (`password`).
4. Ejecutar **`iniciar.bat`** con doble clic para encender el servidor y abrir `http://localhost:3000`.

@echo off
title Estacion Globo Cautivo - Servidor
echo Verificando librerias...
if not exist "node_modules" (
    call npm install
)
echo Abriendo panel en el navegador...
start http://localhost:3000
echo Encendiendo servidor (no cierres esta ventana mientras uses la pagina)...
node server.js
pause
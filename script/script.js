function mostrarSeccion(seccion) {
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = ''; // Limpia el contenido previo

    if (seccion === 'hospitalizacion') {
        // Añadir los tres cuadros solo para 'hospitalizacion'
        contenido.innerHTML = `
            <div class="cuadro">
                <h3>INGRESOS - EGRESOS - DEFUNCIONES</h3>
                <a href="#"><img src="img/powerbi.png" alt="Visualizar Reporte BI"> VISUALIZAR REPORTE BI</a>
                <a href="#"><img src="img/pdf.png" alt="Descargar Reporte"> DESCARGAR REPORTE</a>
            </div>
            <div class="cuadro">
                <h3>ESTANCIA HOSPITALARIA</h3>
                <a href="#"><img src="img/powerbi.png" alt="Visualizar Reporte BI"> VISUALIZAR REPORTE BI</a>
                <a href="#"><img src="img/pdf.png" alt="Descargar Reporte"> DESCARGAR REPORTE</a>
            </div>
            <div class="cuadro">
                <h3>INDICADORES</h3>
                <a href="#"><img src="img/powerbi.png" alt="Visualizar Reporte BI"> VISUALIZAR REPORTE BI</a>
                <a href="#"><img src="img/pdf.png" alt="Descargar Reporte"> DESCARGAR REPORTE</a>
            </div>
        `;
    }
}

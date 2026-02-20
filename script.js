document.addEventListener('DOMContentLoaded', () => {
    const selectorRaciones = document.getElementById('servings');
    const filas = document.querySelectorAll('.fila-ingrediente');
    filas.forEach(fila => {
        const celdaCantidad = fila.querySelector('.cantidad');
        fila.dataset.base = celdaCantidad.textContent;
    });
    selectorRaciones.addEventListener('input', () => {
        const multiplicador = parseFloat(selectorRaciones.value);
        if (multiplicador > 0) {
            filas.forEach(fila => {
                const base = parseFloat(fila.dataset.base);
                const celdaCantidad = fila.querySelector('.cantidad');
                const nuevoValor = base * multiplicador;              
                celdaCantidad.textContent = nuevoValor;
            });
        }
    });
    filas.forEach(fila => {
        fila.addEventListener('dblclick', () => {
            fila.style.backgroundColor = "#ffdd99";
            fila.style.transition = "0.3s";

            setTimeout(() => {
                fila.style.backgroundColor = "";
            }, 1000);
        });
    });
});

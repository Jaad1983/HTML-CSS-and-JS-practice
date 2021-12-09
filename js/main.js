// Guardar el estado (columna activa)
let activeColumn = 0


// Seleccionar las columnas
const columnas = document.querySelectorAll(".column")

// Escuchar los "clicks" en cada una de ellas
columnas.forEach((column, indice) => {
    column.addEventListener("click", function() {
        cambiarColumna(indice)
    })

})

// Cambiar el estado de las columnas
function cambiarColumna(indice) {
    columnas[activeColumn].classList.remove("active")
    columnas[indice].classList.add("active")
    activeColumn = indice
}
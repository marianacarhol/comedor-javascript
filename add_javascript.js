/* Obtenga los datos desde los componentes y guárdelos en un objeto javascript.
Utilizando fetch envíe la información al sitio de datos de prueba mediante la API correspondiente. 
Muestre una alerta en caso de que la operación se ejecute correctamente y regrese a la página del listado.
Muestre un mensaje de error en caso de que la operación no se ejecute correctamente y que se mantenga en la página. */

const apiUrl = 'https://67db1a611fd9e43fe47396f3.mockapi.io/apiprueba/productos';

function addElement(){
    const nombreInput = document.getElementById('nombreProducto');
    const cantidadInput = document.getElementById('cantidadProducto');

    const nombre = nombreInput.value;
    const cantidad = cantidadInput.value;

    const objeto = {
        nombre : nombre,
        cantidad : cantidad
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud --> ${response.status}`); // Si la respuesta no es exitosa, lanza un error con el código de estado
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta de la API -->', data);
        alert("Producto agregado correctamente.");                             
        window.location.href = 'index_bootstrap.html';  
    })
    .catch(error => { // Cacha errores ocurridos en el `fetch` o en `throw new Error()`
        console.error("Error en la operación:", error);
        alert("Error al agregar el producto.");
    });
}

const form = document.getElementById('productoForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addElement();
});
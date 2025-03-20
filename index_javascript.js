
// Variable en donde se almacena nuestra API URL
const apiUrl = 'https://67db1a611fd9e43fe47396f3.mockapi.io/apiprueba/productos';

// Función para cargar los datos en la tabla
function loadData() {
    fetch(apiUrl) //Realiza una solicitud a nuestro API para obtener datos
        .then(response => response.json()) //Convierte el contenido json de response en un objeto javascript
        .then(data => { //Recibe el objeto javascript y lo almacena en data
            const tableBody = document.querySelector("#bottomsection tbody");
            tableBody.innerHTML = ''; // Limpiar tabla
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${item.id}</td><td>${item.nombre}</td><td>${item.cantidad}</td>
                <td><button class="modify"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg></button></td>
                <td><button class = "delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></button></td>`;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
}

// Cargar la lista de datos en la tabla después de que toda la página haya sido cargada
window.onload = () => {
    loadData();   
};
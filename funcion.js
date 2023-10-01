var Productoencarrito =0;
var cantidad = document.getElementById("cantidadProducto")

function addCart() {
    Productoencarrito++;
    cantidad.textContent = Productoencarrito;
    
}
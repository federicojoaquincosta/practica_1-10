const ORDEN_PIZZA = 1;
const ORDEN_MILA = 2;
const ORDEN_CAFE = 3;

const IMG_PIZZA = "https://fotos.perfil.com/2022/02/09/trim/900/900/pizza-1310709.jpg"
const IMG_MILA = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg"
const IMG_CAFE = "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"

function mandarOrden(id) {
    switch(Number(id)){
        case ORDEN_PIZZA:
        document.querySelector('#ordenPedida').innerHTML = 
        `
        <h2> Orden de pizza </h2>
        <img width="400px" height="400px" src="${IMG_PIZZA}" alt="">
        `
        break;
    
        case ORDEN_MILA:
            document.querySelector('#ordenPedida').innerHTML = 
            `
            <h2> Orden de mila </h2>
            <img width="400px" height="400px" src="${IMG_MILA}" alt="">
            `
        break;

        case ORDEN_CAFE:
            document.querySelector('#ordenPedida').innerHTML = 
            `
            <h2> Orden de Café </h2>
            <img width="400px" height="400px" src="${IMG_CAFE}" alt="">
            `
        break;

        default:
            document.querySelector('#ordenPedida').innerHTML = 
            `
            <h2> Orden no válida </h2>
            <h4> Por favor seleccione una opción válida </h4>
            `
    }
}
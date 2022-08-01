/*Fusión navbar-menú desktop*/
const menuDesktopEmail = document.querySelector('.navbar-email'); //el navbar-email que estamos seleccionando es el del right
const desktopMenu = document.querySelector('.desktop-menu');


menuDesktopEmail.addEventListener('click', toggleDesktopMenu);//toggle significa intercambiar(mostrar y retirar)

function toggleDesktopMenu(){
    const iscontenidoCarrtitoNavbarClosed = contenidoCarrtitoNavbar.classList.contains('inactive'); /*estamos preguntando si el carrito está cerrado*/

    if(!iscontenidoCarrtitoNavbarClosed){
        contenidoCarrtitoNavbar.classList.add('inactive');//decimos que si el carrito está abierto debe cerrarlo y con la siguiente linea de código abrir el desktop menu
    }

    console.log('click');
    desktopMenu.classList.toggle('inactive'); //funcion que activa la clase inactive dependiendo de si la tiene activa o no
}

/*Fusión navbar-menú mobile*/
const mobileMenuImagen = document.querySelector('.menu');//para seleccionar el icono de menú
const mobileMenu = document.querySelector('.mobile-menu');//para selecconar el código del menú mobile que está en el html

mobileMenuImagen.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const iscontenidoCarrtitoNavbarClosed = contenidoCarrtitoNavbar.classList.contains('inactive') /*estamos preguntando si el carrito está cerrado*/
       
    if(!iscontenidoCarrtitoNavbarClosed){
        contenidoCarrtitoNavbar.classList.add('inactive');//decimos que si el carrito está abierto debe cerrarlo y con la siguiente linea de código abrir el mobile menu
    }

    console.log('click');
    mobileMenu.classList.toggle('inactive');//funcion que activa la clase inactive dependiendo de si la tiene activa o no
}

/*carrito de compra en navbar*/
const carritoNavbar = document.querySelector('.navbar-shopping-cart');
const contenidoCarrtitoNavbar = document.querySelector('#shoppingCartContainer');

carritoNavbar.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); /*estamos preguntando si el mobile menu está cerrado*/
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); /*estamos preguntando si el desktop menu está cerrado*/
       
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');//decimos que si el mobile menu está abierto debe cerrarlo y con la siguiente linea de código abrir al carrito
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');//decimos que si el desktop menu está abierto debe cerrarlo y con la siguiente linea de código abrir al carrito
    }

    console.log('click');
    contenidoCarrtitoNavbar.classList.toggle('inactive');

}
          
//lista de productos
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Televisor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'//https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?cs=srgb&dl=pexels-lisa-1444416.jpg&fm=jpg
});

productList.push({
    name: 'Laptop',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'//https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg
});

productList.push({
    name: 'Celular',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'//https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?cs=srgb&dl=pexels-mateusz-dach-1294886.jpg&fm=jpg
});

productList.push({
    name: 'Guitarra',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'//https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?cs=srgb&dl=pexels-m%C3%A9line-waxx-165971.jpg&fm=jpg
});

//  <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div> 

function renderProducts(array){
for(product of array){
    const productCard = document.createElement('div');//crea un elemento de tipo div en el html
    productCard.classList.add('product-card');//le asigna al nuevo elemento div creado la clase "product-cart"
    
    
    const productImg = document.createElement('img');//crea un elemento de tipo imagen en el html
    productImg.setAttribute('src', product.image);//asigna al src el valor de url que esté en el producto del array en este caso de nombre image:https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

    const productInfo = document.createElement('div');//crea un elemento de tipo div en el html
    productInfo.classList.add('product-info');//le asigna al nuevo elemento div creado la clase "product-info"
    
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' +  product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    
    const cartIcon = document.createElement('img');
    cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(cartIcon);//agregamos el icono del carrito a la etiqueta <figure>
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);

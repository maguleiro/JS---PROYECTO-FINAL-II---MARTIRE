class Usuario{
	constructor(nombre, apellido, pwd)
	{
		this.nombre=nombre;
		this.apellido=apellido;
		this.pwd=pwd;

	}
}

function crearUsuario()
{
	let nombre = prompt("Ingrese su nombre");
	let apellido = prompt("Ingrese su apelido");
	let pwd = prompt("Ingrese su contraseña");
	const usuario = new Usuario(nombre, apellido, pwd);
	alert("Bienvenido " + nombre + "!");

	localStorage.setItem("NOMBREUSUARIO", nombre);
	const h1 = document.createElement("h1");
	h1.innerHTML=`Logueado como: ${nombre}`;   // No se como poner esto en la nav 
	document.body.appendChild(h1);


	return usuario;
}


const plata = 1000;
let fernet = 500;
let jagger = 850;
let gin = 450;
let birra = 250;
let vodka = 1500;


class Producto{
	constructor(id,nombre,precio)
	{
		this.id=id;
		this.nombre=nombre;
		this.precio=precio;
	}
}

const producto1 = new Producto(1, "Fernet", "$500");
const producto2 = new Producto(2, "Jaggermeister", "$850");
const producto3 = new Producto(3, "Gin","$450");
const producto4 = new Producto(4, "Birra","$250");
const producto5 = new Producto(5, "Vodka","$1500");

let productos = [];

if(localStorage.getItem("productos"))
{
	productos = localStorage.getItem("productos");
}
else
{
	productos = [producto1,producto2,producto3,producto4,producto5];
}


console.log("INICIAL:", productos);

function crearTitulo()
{
	const titulo = document.createElement("h1");
	titulo.innerHTML="PRODUCTOS";
	document.body.appendChild(titulo);
}

crearTitulo();
crearMenu();

function crearMenu()
{
	let opciones = ["Lista de Productos", "Agregar Producto", "Buscar Producto", "Modificar Producto", "Eliminar Producto", "Hacer Pedido"]

	opciones.forEach((opcion)=>{

	const boton = document.createElement("button");

	if(opcion === "Lista de Productos")
	{
		boton.addEventListener("click", ()=>{
			listarProductos();
		})
	}
	else if(opcion === "Agregar Producto")
	{
		boton.addEventListener("click", ()=>{
			agregarProducto();
			console.log(productos);
			listarProductos();
		})
	}
	else if(opcion === "Buscar Producto")
	{
		boton.addEventListener("click", ()=>{
			buscarProducto();
		})
	}
	else if(opcion === "Modificar Producto")
	{
		boton.addEventListener("click", ()=>{
			modificarProducto();
			console.log(productos);
			listarProductos();
		})
	}
	else if(opcion === "Eliminar Producto")
	{
		boton.addEventListener("click", ()=>{
			eliminarProducto();
			console.log(productos);
			listarProductos();
		})
	}
	else if(opcion === "Hacer Pedido")
	{
		boton.addEventListener("click", ()=>{
			bebida();
		})
	}

	boton.innerHTML=opcion;
	document.body.appendChild(boton);
});

}

function listarProductos()
{
	let miLista = document.querySelector("#listaProductos");
	if(!miLista)
		{
			miLista = document.createElement("ul");
			miLista.setAttribute("id","listaProductos");
		}
		miLista.innerHTML="";

		productos.forEach((producto)=>{
			const nodoLi= document.createElement("li");
			nodoLi.innerHTML=`${producto.nombre} ${producto.precio}`;
			miLista.appendChild(nodoLi);
		});
		document.body.appendChild(miLista);
}

function agregarProducto()
{
	let id=1;
	if(productos.lenght>0)
	{
		id=productos[productos.lenght-1].id+1;
	}

let nombre=prompt("Que producto desea añadir?");
let precio=prompt("Ingrese valor:")
let producto = new Producto(id, nombre, precio);

productos.push(producto);
console.log("ALMACENADO");
localStorage.setItem("productos", productos);

}

function buscarProducto()
{
	let nombre = prompt("Ingresa el nombre del producto:");

	let buscados = productos.filter((producto)=>producto.nombre.indexOf(nombre.toLocaleLowerCase)!==-1);

	console.log("BUSCAR PRODUCTOS", buscados);
}

function modificarProducto()
{
	let id = Number(prompt("Ingrese el ID del producto a modificar"));

	let existe = productos.some((producto)=>producto.id===id);

	if(existe)
	{
		let encontrado = productos.find((producto)=>producto.id===id); 
		let nuevoNombre = prompt("Ingrese el nuevo nombre:");
		let nuevoPrecio = prompt("Ingrese el nuevo precio:");

		encontrado.nombre = nuevoNombre;
		encontrado.precio = nuevoPrecio;

		console.log("MODIFICACION");
		console.log(productos);
	}
	else
	{
		alert("Producto no encontrado");
	}
}

function eliminarProducto()
{
	let id = Number(prompt("Ingrese el ID del producto a eliminar:"));

	let encontrado = productos.find((producto)=>producto.id===id);

	console.log("PRODUCTO A BORRAR", encontrado);

	if(!encontrado)
	{
		alert("Producto no Encontrado.");
	}
	else{
		let index = productos.indexOf(encontrado);
		console.log("Indice Encontrado");

		productos.splice(index,1);

		console.log("Producto Eliminado.");

		console.log(productos);

		alert("Producto Eliminado.");
	}

}

function bebida (){

	respuesta = prompt (`¿Que te gustaria tomar?
						-Fernet $500
						-Jaggermeister $850
						-Gin Tonic $450
						-Birra $250
						-Vodka $1500`)

	localStorage.setItem("DATOSPEDIDO", respuesta);
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	
	if (respuesta == "fernet"){
		let resta = plata - fernet;
		alert ("Muchas gracias, tu vuelto es $" + resta);
		console.log ("El vuelto es $" + resta);
		h2.innerHTML=`Datos del pedido: ${respuesta}`;
		h3.innerHTML=`Muchas gracias, tu vuelto es $` + resta;
		document.body.appendChild(h2);
		document.body.appendChild(h3);
	}
	if (respuesta == "jaggermeister"){
		let resta = plata - jagger;
		alert ("Muchas gracias, tu vuelto es $" + resta);
		console.log ("El vuelto es $" + resta);
		h2.innerHTML=`Datos del pedido: ${respuesta}`;
		h3.innerHTML=`Muchas gracias, tu vuelto es $` + resta;
		document.body.appendChild(h2);
		document.body.appendChild(h3);
	}
	if (respuesta == "gin"){
		let resta = plata - gin;
		alert ("Muchas gracias, tu vuelto es $" + resta);
		console.log ("El vuelto es $" + resta);
		h2.innerHTML=`Datos del pedido: ${respuesta}`;
		h3.innerHTML=`Muchas gracias, tu vuelto es $` + resta;
		document.body.appendChild(h2);
		document.body.appendChild(h3);
	}
	if (respuesta == "birra"){
		let resta = plata - birra;
		alert ("Muchas gracias, tu vuelto es $" + resta);
		console.log ("El vuelto es $" + resta);
		h2.innerHTML=`Datos del pedido: ${respuesta}`;
		h3.innerHTML=`Muchas gracias, tu vuelto es $` + resta;
		document.body.appendChild(h2);
		document.body.appendChild(h3);
	}
	if (respuesta == "vodka"){
		let resta = vodka - plata;
		alert ("No te alcanza te faltan $" + resta);
		console.log ("El vuelto es $" + resta);
		h2.innerHTML=`Datos del pedido: ${respuesta}`;
		console.log ("El vuelto es $" + resta);
		document.body.appendChild(h2);
		document.body.appendChild(h3);
	}

}


const boton1 = document.getElementById("boton1");
boton1.addEventListener("mousedown",()=>{
	crearUsuario();
	boton1.setAttribute("style", "display:none")

})







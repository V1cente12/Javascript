/*let numero = 5.3;
let palabra = 'hola josu';

let respuesta = false; 

//const pi = 3;


palabra ='asdsdsdsdsd'
*/


//OPERADORES
/*
  let a =5; 
let b = 2;

let usuario = 'qwer';
console.log('hola' + usuario);
*/

//operadores 
/*
 let a = 5;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);

 */

//operadores de asignacion
/*let a=15;

a += 3;
console.log(a);
*/ 
/* let cadena ='hola josu';
let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);
console.log(cadena.length);
console.log(cadena.toUpperCase());*/
/*let cadena = 'hoola mi rey'; */


/* console.log(cadena.indexOf('o'));*/

/*console.log(cadena.replace('rey','king')); */

/* console.log(cadena.substring(3,5))*/

/*console.log(cadena.slice(-3)); */
/*console.log(cadena.trim()); */
/*console.log(cadena.endsWith('y')) */
/* console.log(cadena.includes('n'));
 console.log(cadena.includes(''));
 console.log(cadena.includes('n')); */
/* let nombre = 'vicente';
 let apellido ='calderon';
 let edad = 20;

 console.log('hola '+nombre+' '+apellido+'. Tiene '+edad); */


/*const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('introducce el primer numero');
let b = prompt('introducce el segundo numero');
let c = prompt('introducce el tecer numero');

numbers.textContent = `los numeros introducidos son ${a}, ${b}, ${c}`;

if(a>=b && a>=c){

} */

/*let q = 5;

switch(q)
{
    case 1: console.log("numer tiene valor de 1");
    break;
    case 5: console.log("numer tiene valor de 5");
    break;
}



 */



/*let names = ['paco','jose','paula','maria'];
for (namme of names){
    console.log(namme);
}

for (namme in names){
    console.log(namme);
}
 */



/* const person ={
    name : 'vicente',
    age : '24',
    sons : ['errt','qwert']
}

console.log(person.name);
console.log(person.age);
console.log(person.sons);
console.log(person.sons[0]);
console.log(person.sons[1]);*/

/* class Persona{
    constructor(nombre, apellido,edad){
        this.nombre = nombre 
        this.apellido = apellido
        this.edad = edad

       
    }
}*/

class Libro{
    constructor(title, author,year,gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    getAuthor(){
        return this.author
    }
    bookInfo(){
       return `${this.title} es un libro de ${this.gender} escrito por ${this.author}
       en el año ${this.year}`
    }
    getGender(){
      
        return this.gender
    }
}

let libros = []
while(libros.length<2){
    let title = prompt('dame titulo')
    let author = prompt('dame autor')
    let year = prompt('dame yeaer')
    let gender = prompt('dame gender').toLowerCase()

    if(title != '' && author!='' && !isNaN(year) && year.length==4 && (gender== 'aventura'|| gender=='terror' || gender=='fantasia'))
    {
        libros.push(new Libro(title,author,year,gender))
    }
 }  
 
   
const showAllBooks=()=>{
    console.log(libros)
 } 
 

 const showauthors=()=>{
    let autores =[]
    for(const Libro of libros){
        autores.push(Libro.getAuthor());
    }
    console.log(autores.sort());
 }
 const showGender =()=>{
    const gender = prompt("ingroduce gender")
    for(const Libro of libros){
       if(Libro.getGender() == gender){
        console.log(Libro.bookInfo())
       }
    }

 }

 //showAllBooks()
 //showauthors()
 showGender()


 //ITERACION 5 

 const number1 = 10 
 const number2 = 20 
 const number3 = 2 

 if (number2 / number1 == 2){
    console.log('number2 dividido entre number1 es igual a 2')
 } 
 if (number1 !== number2) { 
    console.log('number1 es estrictamente distinto a number2')
 } 
 if (number3 != number1){  
    console.log('number3 es distinto a number1')
 } 
 if(number3 * 5 == number1){ 
    console.log('number3 por 5 es igual a number1') 
 } 
 if(number3 * 5 == number1 & number1 * 2 == number2){ 
    console.log('number3 por 5 es igual a number 1 y number1 por 2 es igual a number2')
 } 
 if(number2 / 2 == number1 || number1 / 5 == number3)  {
    console.log('number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3')
 }

 //ITERACION 6
 
 // 1.1
 for(let i = 0; i <= 9; i++) { 
   console.log (i);
 } 

 // 1.2
 let numeros = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
 for(let i= 0; i <= 9; i++) 
   if (i % 2 == 0 ){ 
      console.log(i)
 } 

 // 1.3
 let listaNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for(let elemento = 0; elemento < listaNumeros.length; elemento++) {
 if (listaNumeros[elemento]<=9) { 
   console.log(elemento, 'intentando dormir 🐑' ) 
 } else { 
   console.log(elemento, '¡Dormido!') 
 } 
   }
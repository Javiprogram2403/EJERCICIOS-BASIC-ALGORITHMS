 // Iteracion 2 

 //1.1
 const character = {name: "Jack Sparrow" , age: 10}
  
 delete character.age; 
 character.age = 25
 console.log(character);

 //1.2

 const usuario = {firstName: "Jon" , lastName: "Snow" , age: 24} 
 console.log(usuario);
 
 let pren = function () { 
   console.log(`Soy ${usuario.firstName} ${usuario.lastName} , tengo ${usuario.age} años y me gustan los lobos`);
 }
 console.log(pren)
 pren () 

 //1.3 

 const toy1 = { 
   name: 'Bus myYear', 
   price: 19
 }; 
 const toy2 = {
   name: 'Rallo mcKing',
   price: 29
 }; 
 let firstToy = 19 
 let secondToy = 29 
 console.log (firstToy + secondToy);

 //1.4 

 let globalBasePrice = 10000 
 const car1 = {
   name: 'Bmw m&m' , 
   basePrice: 50000, 
   finalPrice: 60000
 }

 console.log(car1) 


 const car2 = {
   name: 'Chevrolet Corbina' ,
   basePrice: 70000 ,
   finalPrice: 80000 , 
 };
 
 console.log (car2);

 globalBasePrice = 25000
 console.log(globalBasePrice) 

 car1.finalPrice = 75000 
 car2.finalPrice = 95000 

 console.log(car1)
 console.log(car2)


 

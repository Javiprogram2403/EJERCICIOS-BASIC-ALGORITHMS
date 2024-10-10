// ITERACION 1

function sum (a, b) {
    if(a > b) { 
        return console.log(a)
    }else 
      return console.log(b)
}

sum (25 , 10)


// ITERACION 2 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A', 'Spiderman', 'Captain M']; 
function findLongestWord (e) {
    return e.reduce ((acc, valorActual) => { 
        return valorActual.length > acc.length ? valorActual : acc; 
    }, '');
}
    
console.log (findLongestWord(avengers)); 

// ITERACION 3 

const numbers = [1, 2, 3, 5, 45, 37, 58]; 

const initialValue = 0; 
const sumWithInitial = numbers.reduce( 
    (acc, currentValue) => acc + currentValue, initialValue, 
) 

console.log (sumWithInitial); 

// ITERACION 4 

const numbers2 = [12, 21, 38, 5, 45, 37, 6]; 
function average(e) {
    const sum = e.reduce ((total, num) => total + num, 0); 
    const pro = sum / e.length; 
    return pro.toFixed(1);
} 

console.log(average(numbers2)); 

// ITERACION 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function sumaMix(array) { 
const total = array.reduce((acc, valorActual)  => { 
        if (typeof valorActual === 'number') { 
            return acc + valorActual;
        }else if (typeof valorActual === 'string'){
            return acc + valorActual.length
        } else {
        return acc;
        } 
        },0);
        return total 
    } 
        console.log(sumaMix(mixedElements))

 // ITERACION 6

 const duplicates = [ 
    'sushi', 
    'pizza', 
    'burguer', 
    'potatoe', 
    'pasta', 
    'ice cream', 
    'pizza', 
    'chicken', 
    'onion rings', 
    'pasta', 
    'soda'
 ] 

 let duplicados = [] 
 const tempArray = [...duplicates].sort(); 

 for (let i= 0; i < tempArray.length; i++) { 
    if (tempArray[i + 1] === tempArray[i]){ 
        duplicados.push(tempArray[i]);
    }
 } 
 console.log(duplicados)

 const eliminaDuplicados = (array) => { 
    const unicos = []

    for(i = 0; i < array.length; i++) { 
        const elemento = array[i]
        if (!unicos.includes(array[i])) { 
            unicos.push(elemento)
        }
    }
    return unicos; 
 } 

 console.log(eliminaDuplicados(duplicates))

 // ITERACION 7 

 const nameFinder = [
    'peter', 
    'Steve', 
    'Tony', 
    'Natasha', 
    'Clint', 
    'Logan', 
    'Xabier', 
    'Bruce', 
    'Peggy', 
    'Jessica', 
    'Marc'
 ]; 
 function finderName(e, name) { 
    for(let i = 0; i < e.length; i++){ 
        if (e[i] === name) { 
            return {inArray: true, position: i}; 
        }
    }
    return {inArray: false}
 }
 console.log(finderName(nameFinder, 'Uma')); 
 console.log(finderName(nameFinder, 'Marc')); 

 // ITERACION 8 
  const counterWords = [ 
    'code', 
    'repeat', 
    'eat', 
    'sleep', 
    'code', 
    'enjoy', 
    'upgrade', 
    'code'
  ]; 

 const contador = {} 


 let nombre = counterWords  
 console.log(nombre) 

 function cadaPalabra (e) { 
    e.forEach (nombre => { 

        contador[nombre] = (contador[nombre] || 0) +1
    })
  return contador
 } 

 const palabrasRepetidas = cadaPalabra(counterWords); 
 console.log(palabrasRepetidas)
 
 

     
  

  
  
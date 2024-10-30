// ITERACION 1 

const products = ['Camiseta de Pokemon', 'Pantalon coquinero', 'Gorra de gansta', 'Camiseta de basket', 'Cituron de orion', 'AC/DC Camiseta']

console.log(products); 

for(const product of products){ 
    if(product.includes("Camiseta")=== true){ 
        console.log(product)
    }
}

// ITERACION 2 

const alumns = [ 
    {name: "Pepe viruela" ,T1:false, T2: false, T3: true}, 
    {name: "Lucia Aranda" , T1: true , T2: false, T3: true},
    {name: "Juan Miranda", T1: false, T2: true , T3: true},
    {name: "Alfredo Blanco" , T1: false , T2: false , T3: false} ,
    {name: "Raquel Benito" , T1: true , T2: true , T3: true}
]

alumns.forEach(alumn => { 
    let approvedCount = 0 
    if (alumn.T1) approvedCount++; 
    if (alumn.T2) approvedCount++; 
    if (alumn.T3) approvedCount++;  

    alumn.isApproved = approvedCount >= 2
}) 

console.log(alumns); 

// ITERACION 3 

const placesToTravel = ["Japon" , "Venecia" , "Murcia" , "Santander" , "Filipinas" , "Madagascar"]

for (const placeToTravel of placesToTravel) { 
    
    console.log(placeToTravel)
}

// ITERACION 4 

const alien = { 
    name: "Wormuck" , 
    race: "Cucusumusu" , 
    planet: "Eden" , 
    weight: "259kg"
}


for(let property in alien){ 
    console.log(`${property}: ${alien[property]}`)
}

// ITERACION 5 

const travelDestinations = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i = travelDestinations.length -1; i >= 0; i--){  
 if (travelDestinations[i].id === 11 || travelDestinations[i].id === 40) { 
    travelDestinations.splice(i, 1)
 }

}
    console.log(travelDestinations) 

// ITERACION 6 

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ] 

 const filteredToys = []

    for (let toy of toys) { 
        if (!toy.name.includes("gato")) { 
            filteredToys.push(toy)
        }
    }

    console.log(filteredToys)

// ITERACION 7 

const popularToys = [];
const juguetes = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (const juguete of juguetes) { 
 if (juguete.sellCount > 15) { 
    popularToys.push(juguete);
 }

}

console.log(popularToys)
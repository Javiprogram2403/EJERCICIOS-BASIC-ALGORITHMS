function formatName (firstName , lastName) { 
    let fullName = `${firstName} ${lastName}` 
    let upperName = fullName.toUpperCase() 

    if (upperName.includes("SKYWALKER")) { 
        console.log("¡Es un Skywalker!") 

} else { 
    console.log("No es un Skywalker") 
   }  
 }
 formatName("Luke", "Skywalker") 
 formatName("Anakin", "Solo")

 
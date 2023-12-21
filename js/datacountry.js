async function traerInfoDePais() {
    const countryElement = document.getElementById('country');
    
    try {
        const respuesta = await fetch("https://restcountries.com/v3.1/name/United%20States%20of%20America");
        
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la información del país');
        }

        const respuestaJSON = await respuesta.json();
        
        // Accede al primer país en el arreglo
        const primerPais = respuestaJSON[0];
        
        // Obtiene la URL de la bandera si está disponible
        const banderaUrl = primerPais.flags ? primerPais.flags.png : '';

        // Actualiza el contenido de la caja1 en el HTML
        countryElement.innerHTML = `
        <h1 id="nombrepais" >${primerPais.name.common}</h1>
        <img id="bandera" src="${banderaUrl}" alt="Bandera del país">
    `;
    
    } catch (error) {
        console.error(error);
    }
}

traerInfoDePais();
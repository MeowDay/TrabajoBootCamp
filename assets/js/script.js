var url = "https://digimon-api.vercel.app/api/digimon" 
var listado = document.querySelector("#listado")

fetch(url)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            listado.innerHTML +=  `
            <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" alt="poster">
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>
          `
            
        }
    
})

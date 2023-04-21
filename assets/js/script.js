
let fresh =document.querySelector("#fresh")
let training =document.querySelector("#training")
let rookie =document.querySelector("#rookie")
let champion =document.querySelector("#champion")
let mega =document.querySelector("#mega")
let ultimate =document.querySelector("#ultimate")
let bttnFresh =document.querySelector("#bttnFresh")
let bttnTraining =document.querySelector("#bttnTraining")
let bttnRookie =document.querySelector("#bttnRookie")
let bttnChampion =document.querySelector("#bttnChampion")
let bttnMega =document.querySelector("#bttnMega")
let bttnUltimate =document.querySelector("#bttnUltimate")
let logo = document.querySelector("#logoDig")
let sonido= new Audio("./assets/audio/braveHearth.ogg")
function anillo(megustanlosgatos){
  megustanlosgatos.classList.add("anillo")
}
function noanillo(megustanlosgatos){
  megustanlosgatos.classList.remove("anillo")
}
function filtros(panconpalta){
  panconpalta.classList.add("brillitofiltro")
}
function nofiltros(panconchancho){
  panconchancho.classList.remove("brillitofiltro")
}
function bravehearth(){
  sonido.play();
}
function nobravehearth(){
  sonido.pause();
}
function escondelogo(){
  logo.classList.toggle("hidden")
}
function mostrarFresh(){
  fresh.classList.toggle("hidden")
  bttnTraining.classList.toggle("hidden")
  bttnRookie.classList.toggle("hidden")
  bttnChampion.classList.toggle("hidden")
  bttnMega.classList.toggle("hidden")
  bttnUltimate.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}
function mostrarTraining(){
  training.classList.toggle("hidden")
  bttnFresh.classList.toggle("hidden")
  bttnRookie.classList.toggle("hidden")
  bttnChampion.classList.toggle("hidden")
  bttnMega.classList.toggle("hidden")
  bttnUltimate.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}
function mostrarRookie(){
  rookie.classList.toggle("hidden")
  bttnFresh.classList.toggle("hidden")
  bttnTraining.classList.toggle("hidden")
  bttnChampion.classList.toggle("hidden")
  bttnMega.classList.toggle("hidden")
  bttnUltimate.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}
function mostrarChampion(){
  champion.classList.toggle("hidden")
  bttnFresh.classList.toggle("hidden")
  bttnTraining.classList.toggle("hidden")
  bttnRookie.classList.toggle("hidden")
  bttnMega.classList.toggle("hidden")
  bttnUltimate.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}
function mostrarMega(){
  mega.classList.toggle("hidden")
  bttnFresh.classList.toggle("hidden")
  bttnTraining.classList.toggle("hidden")
  bttnRookie.classList.toggle("hidden")
  bttnChampion.classList.toggle("hidden")
  bttnUltimate.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}
function mostrarUltimate(){
  ultimate.classList.toggle("hidden")
  bttnFresh.classList.toggle("hidden")
  bttnTraining.classList.toggle("hidden")
  bttnRookie.classList.toggle("hidden")
  bttnChampion.classList.toggle("hidden")
  bttnMega.classList.toggle("hidden")
  let sonido = new Audio("./assets/audio/boton.ogg")
  sonido.play();
}

//-----Digimon nvl in fresh-----
var url1 = "https://digimon-api.vercel.app/api/digimon/level/fresh" 
var listado1 = document.querySelector("#fresh")
fetch(url1)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            fresh.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container" onmouseover= filtros(this) onmouseout=nofiltros(this)>
                <img src="${temp.img}" alt="poster">
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`
          }
})
//-----Digimon nvl in training-----
var url2 = "https://digimon-api.vercel.app/api/digimon/level/in%20training" 
var listado2 = document.querySelector("#training")
fetch(url2)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            training.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" onmouseover= filtros(this) onmouseout=nofiltros(this) alt="poster">
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`
          }
})
//----------Digimon nvl rookie-----------
var url3 = "https://digimon-api.vercel.app/api/digimon/level/rookie" 
var listado3 = document.querySelector("#rookie")
fetch(url3)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            rookie.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" alt="poster" onmouseover= filtros(this) onmouseout=nofiltros(this)>
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`
          }
})
//---------Digimon nvl Champion------------
var url4 = "https://digimon-api.vercel.app/api/digimon/level/champion" 
var listado4 = document.querySelector("#champion")

fetch(url4)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            champion.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" alt="poster" onmouseover= filtros(this) onmouseout=nofiltros(this)>
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`    
          }
})
//---------Digimon nvl Mega------------
var url5 = "https://digimon-api.vercel.app/api/digimon/level/mega" 
var listado5 = document.querySelector("#mega")

fetch(url5)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            mega.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" alt="poster" onmouseover= filtros(this) onmouseout=nofiltros(this)>
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`    
          }
})
//---------Digimon nvl Ultimate------------
var url6 = "https://digimon-api.vercel.app/api/digimon/level/ultimate" 
var listado6= document.querySelector("#ultimate")

fetch(url6)
.then(response => response.json())
.then(datos => {
    for (temp of datos) {
            ultimate.innerHTML +=  `
          <div class="tarjeta col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <div class="img info-container">
                <img src="${temp.img}" alt="poster" onmouseover= filtros(this) onmouseout=nofiltros(this)>
            </div>
            <div class="info-container name-container">
                <h3>${temp.name}</h3>
            </div>
            <div class="info-container level-container">
              <p>NVL: ${temp.level}</p>
            </div>
          </div>`    
          }
})

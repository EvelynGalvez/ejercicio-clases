window.onload = () => {
const btncats = document.getElementById('cats');
const btndogs = document.getElementById('dogs');
const btnbirds = document.getElementById('birds');



btncats.addEventListener('click', () => {
  document.getElementById('waiting').style.display = 'block';
  document.getElementById('espera').style.display = 'block';
  obtenerGatos();
})

btndogs.addEventListener('click', () => {
  document.getElementById('waiting').style.display = 'block';
  document.getElementById('espera').style.display = 'block';
  obtenerDoges();
})

btnbirds.addEventListener('click', () => {
  document.getElementById('waiting').style.display = 'block';
  document.getElementById('espera').style.display = 'block';
  obtenerBirds();
}) 

}


function obtenerGatos() {
    // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=20&urls=true&httpsUrls=true`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("No hay respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
        //Este then es de la promesa de response.json()
      document.getElementById('waiting').style.display = 'none';
      document.getElementById('espera').style.display = 'none';
      const cateReceptorDiv = document.getElementById("contenedor-cats");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
      })
      .catch(error => {
        console.error("Error" + error);
      });
}

function obtenerDoges() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("No hay respuesta de perritos");
      }
    }).then((dogesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      document.getElementById('waiting').style.display = 'none';
      document.getElementById('espera').style.display = 'none';
      const dogeReceptorDiv = document.getElementById("contenedor-dogs");
      for (let dogeIndex = 0; dogeIndex < dogesJson.length; dogeIndex++) {
        const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        dogeImg.src = dogesJson[dogeIndex];
        dogeReceptorDiv.appendChild(dogeImg);
      }
    })
    .catch((error) => {
      console.error("Error" + error);
    });
}


function obtenerBirds() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=3&urls=true&httpsUrls=true`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("No hay pajaritos");
      }
    }).then((birdsJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const birdReceptorDiv = document.getElementById("contenedor-birds");
      for (let birdIndex = 0; birdIndex < birdsJson.length; birdIndex++) {
        const birdImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        birdImg.src = birdsJson[birdIndex];
        birdReceptorDiv.appendChild(birdImg);
      }
    })
    .catch((error) => {
      console.error("Error" + error);
    });
}


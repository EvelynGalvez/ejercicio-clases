window.onload = () => {
document.getElementById('espera').style.display = 'none';
const btncats = document.getElementById('cats');
const btndogs = document.getElementById('dogs');
const btnbirds = document.getElementById('birds');

btncats.addEventListener('click', () => {
  /*document.getElementById('espera').style.display = 'block';*/
  function obtenerGatos() {
    // Fetch retorna una promesa
    document.getElementById('espera').style.display = 'block';
    fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=3&urls=true&httpsUrls=true`)
      .then((response) => { 
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Mala respuesta de gatitos");
        }
      }).then((catesJson) => { //recibimos el JSON en este punto
        //Este then es de la promesa de response.json()
        document.getElementById('espera').style.display = 'none';
        const cateReceptorDiv = document.getElementById("cats");
        for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
          const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
          cateImg.src = catesJson[cateIndex];
          cateReceptorDiv.appendChild(cateImg);
          /*document.getElementById('espera').style.display = 'none';*/
        }
      })
      .catch((error) => {
        console.error("Holi soy un error " + error);
      });
  
  }
  
});
}

/*window.onload = () => {

  obtenerGatos();
  obtenerDoges();
  obtenerBirds();
};*/

/*

btndogs.addEventListener('click', () => {
  obtenerDoges();
});

btnbirds.addEventListener('click', () => {
  obtenerBirds();
});



function obtenerDoges() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=3&urls=true&httpsUrls=true`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de perritos");
      }
    }).then((dogesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const dogeReceptorDiv = document.getElementById("dogs");
      for (let dogeIndex = 0; dogeIndex < dogesJson.length; dogeIndex++) {
        const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        dogeImg.src = dogesJson[dogeIndex];
        dogeReceptorDiv.appendChild(dogeImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}

function obtenerBirds() {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=3&urls=true&httpsUrls=true`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de pajaritos");
      }
    }).then((birdsJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const birdReceptorDiv = document.getElementById("birds");
      for (let birdIndex = 0; birdIndex < birdsJson.length; birdIndex++) {
        const birdImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        birdImg.src = birdsJson[birdIndex];
        birdReceptorDiv.appendChild(birdImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}
*/

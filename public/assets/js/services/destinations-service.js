console.log("assets/js/destinations-service.js chargé ✅");

/**
 * Affichage des informations de la destination dans la page destinations.html
 * @param {Array} destinations
 * @param {Number} destinationId
 * Permet de récupérer les informations de la destination depuis son ID dans un tableau de destinations
 * Affiche les informations de la destination dans la page destinations.html ou
 * redirige vers une page d'erreur 404 si l'id de la destination n'existe pas
 */

function getDestination(destinations, destinationId) {


  let result = "";
  let error = "";

  for (let i = 0; i < destinations.length; i++) {
    if (destinationId === destinations[i].id) {
      result = destinations[i];
    } else {
      error = 404;
    }
  }

  if (result === "") {
    window.location.href = "error.html?error=" + error;
  } else {
    let title = document.getElementById("destination-name");
    title.innerHTML = result.name;

    let para = document.getElementById("destination-location");
    para.innerHTML = result.location;
  }
}
// TODO:
// Initialisation des variables result et error
// Boucle sur le tableau des destinations pour trouver la destination correspondante à l'id
// Debug
//console.log(destinations[i].id);
// si l'id de la destination correspond à destinationId
// on stocke la destination dans la variable result
// fin de la boucle
// Si la variable result est vide (undefined) X
// cela signifie que l'id de la destination n'existe pas X
// on stocke le code erreur 404 dans la variable error X
// on redirige vers la page d'erreur en passant le code erreur dans l'URL
// en paramètre à la clé error
// Indice : window.location.href = "error.html?error=" + error;
// Si la variable error est égale à false
// cela signifie que l'id de la destination existe
// on affiche les informations de la destination dans la page destinations.html
// Affichage du nom de la destination dans le titre de la page
// Affichage du contenu supplémentaire de la destination dans la page
// Debug du résultat de la recherche si la destination existe

/**
 * Affichage des destinations dans la page d'accueil
 * @param {Array} destinations
 */
function getDestinations(destinations) {
  // TODO:
  // Initialisation de la variable linkToDestination pour créer un lien vers la page destinations.html
  // Elle contient le début du lien vers la page destinations.html et doit être concaténée avec l'id de la destination
  
  // Création d'une boucle pour afficher les destinations dans la page à partir du tableau destinations
  // et de la constante destinationContainer
  for (let i = 0; i < destinations.length; i++) {
    let linkToDestination = "destinations.html?destination=" + destinations[i].id
    let destinationContainer = document.createElement('div');
    destinationContainer.classList.add("destination");
    destinationContainer.innerHTML=`
    <div class="destination">
        <img src="${destinations[i].img}" alt="une image de présentatation" />
        <h3>${destinations[i].name}</h3>
        <hr />
        <p>${destinations[i].location}</p>
        <a href=${linkToDestination}>En savoir plus</a>
      </div>
      `;
      document.getElementById("list-destination").appendChild(destinationContainer);
    }
  }
    // Debug
    // console.log(destinations[i].name);
    // console.log(destinations[i].location);
    // console.log(destinations[i].id);
    // Création d'un élément HTML avec la classe destination
    // et stockage dans la variable destinationContainer
    // Indice : document.createElement('div');
    // Ajout du contenu HTML dans la variable destinationContainer
    // Indice : destinationContainer.innerHTML = ``;
    // Ajout de destinationContainer dans la page HTML
    // Indice : document.getElementById('list-destination').appendChild(destinationContainer);


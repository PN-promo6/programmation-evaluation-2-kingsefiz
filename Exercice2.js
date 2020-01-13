let movies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DESIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]


function displayMovies() {
  let i = 0;
  let cinemaName = document.createElement("h1");
  document.body.appendChild(cinemaName);
  cinemaName.textContent = "Cinema Le Dauphin"
  let description = document.createElement("p");
  document.body.appendChild(description)
  description.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières des rencontres, des ciné-gôuters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)."
  description.style.width = "20%"
  let details = document.createElement("input");
  document.body.appendChild(details)
  details.type = "button";
  details.value = "Voir les films à l'affiche cette semaine"

  details.addEventListener("click", displayArray)

  function displayArray(array) {
    cinemaName.style.display = "none";
    description.style.display = "none";
    details.style.display = "none";
    let i = 0;
    let j = 0;
    let currentElement1;
    let currentElement2;
    let header = array[0];
    let table = document.createElement("table");
    document.body.appendChild(table);
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    let tableHeader = document.createElement("thead")
    table.appendChild(tableHeader)

    while (i < header.length) {
      currentElement1 = header[i];
      let currentValue = document.createElement("th");
      tableHeader.appendChild(currentValue);
      currentValue.textContent = currentElement1;
      i++;
    }

    i = 1

    while (i < array.length) {
      currentElement1 = array[i];
      let tableContent = document.createElement("tr")
      tableBody.appendChild(tableContent);
      while (j < currentElement1.length) {
        currentElement2 = currentElement1[j];
        let value = document.createElement("td")
        tableContent.appendChild(value);
        value.textContent = currentElement2;
        j++;
      }
      j = 0
      i++
    }
  }
}

displayMovies()

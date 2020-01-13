let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

function displayTab(array) {
  let i = 0;
  let j = 0;
  let currentElement1;
  let currentElement2;
  let header = ["Ordre", "Famille", "Non vernaculaire", "Nom binomial"];
  let newTab = [header,
    array[0],array[1],array[2],array[3]
  ]
  let table = document.createElement("table");
  document.body.appendChild(table);
  let tableHeader = document.createElement("thead")
  table.appendChild(tableHeader);
  let tableHeaderContent = document.createElement("tr");
  tableHeader.appendChild(tableHeaderContent);
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  tableHeader.style.color = 'red';
  while (i < header.length) {
    currentElement1 = header[i];
    let currentValue = document.createElement("th");
    tableHeader.appendChild(currentValue);
    currentValue.textContent = currentElement1;
    currentValue.style.border = "solid 1px black"
  i++;
  }

  i = 1

  while (i < newTab.length) {
    currentElement1 = newTab[i];
    let tableContent = document.createElement("tr")
    tableBody.appendChild(tableContent);
    while (j < currentElement1.length) {
      currentElement2 = currentElement1[j];
      let value = document.createElement("td")
      tableContent.appendChild(value);
      value.textContent = currentElement2;
      value.style.border = "solid black 1px"
      j++;
      if (j == 4) {
        value.style.fontStyle = "italic"
      }
    }
    j = 0
    i++
  }
}

displayTab(fishList);

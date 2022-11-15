let cards = document.querySelectorAll(".card");
let homeSection = document.querySelector("#content");
let favSection = document.querySelector("#favs");
let menu = document.querySelector("#menu");
//console.log(cards);

let cleanPage = () => {
  let cleanPage = document.querySelectorAll(".page");
  cleanPage.forEach((eachView) => {
    eachView.classList.add("hide");
  });
};

let favSelector = () => {
  cards.forEach((eachCard) => {
    let favButtons = eachCard.querySelector(".fav");
    favButtons.addEventListener("click", () => {
      favButtons.classList.toggle("fav");
      favButtons.classList.toggle("fav-clicked");

      eachCard.classList.toggle("selected");
      //console.log(eachCard);
      //console.log(document.querySelectorAll(".selected"));
    });
  });
};
favSelector();

menu.addEventListener("click", (selectedArea) => {
  cleanPage();
  let selected = selectedArea.target;

  if (selected.className != undefined && selected.className != "") {
    switch (selected.className) {
      case "homeSection":
        homeSection.classList.remove("hide");
        break;
      case "favSection":
        favSection.classList.remove("hide");
        break;
    }
  }
  /* 
  
    switch (selected.className) {
      case "homeSection":
        homeSection.remove("hide");
        break;
      case "favSection":
        favSection.remove("hide");
        break;
      default:
        break;
    }
  */
  //console.log(selected);
});

/* 
favButton.addEventListener("click", (e) => {
  favButton.classList.toggle("fav");
  favButton.classList.toggle("fav-clicked");
  console.log("fav");
});
*/

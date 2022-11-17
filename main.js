const getData = async (searchData) => {
  searchData != undefined
    ? (API_URL = "http://localhost:3000/data?q=" + searchData)
    : (API_URL = "http://localhost:3000/data");
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {}
};
const cleanField = (field) => {
  const cardField = document.querySelector(`#${field}`);
  cardField.innerHTML = "";
};

const createBasicCards = async (search) => {
  cleanField("cardField");
  const data = await getData(search);
  data.forEach((eachInfo) => {
    const {
      img,
      id,
      propertyType,
      businessType,
      price,
      location,
      owner,
      totalArea,
      parking,
      bathRoom,
      rooms,
    } = eachInfo;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
    <div class="card-img">
        <p class="hide hideId">${id}</p>
        <img
        src="${img}"
        alt=""
        srcset=""
        />
        <p class="propertyType">${propertyType}</p>
        <p class="businessType">${businessType}</p>
        <button class="fav" id="favButton">fav</button>
        <p class="price">${price} M</p>
    </div>
    <div class="card-info">
        <p class="location">${location}</p>
        <p class="owner">Propietario: ${owner.ownerName}</p>
        <p class="total-area">${totalArea} sq ft</p>
        <p class="parking">parking:${parking}</p>
        <p class="bathRoom">bathroom:${bathRoom}</p>
        <p class="rooms">rooms:${rooms}</p>
    </div>
    `;
    cardField.appendChild(card);
  });
};

const createFavCards = async (favImg) => {
  // cleanField("favField");
  const favSelected = document.querySelectorAll(".selected");
  favSelected.forEach((favInfo) => {
    console.log(favInfo);
    const imgDir = favInfo.querySelector(".hideId").textContent;
    const data = getData("./images/2 featured properties/apartamento1.jpg");
    console.log(data);
  });
};
createFavCards();

let favSelector = async () => {
  await createBasicCards();
  let cards = document.querySelectorAll(".card");
  cards.forEach((eachCard) => {
    let favButtons = eachCard.querySelector(".fav");
    favButtons.addEventListener("click", () => {
      favButtons.classList.toggle("fav-clicked");
      eachCard.classList.toggle("selected");
    });
  });
};
const form = document.querySelector(".form");
form.addEventListener("submit", (search) => {
  search.preventDefault();
  const searchData = search.target.search.value;
  createBasicCards(searchData);
  console.log(searchData);
});
// favSelector();

/*
let menu = document.querySelector("#menu");


let homeSection = document.querySelector("#content");
let favSection = document.querySelector("#favs");

const getData = async () => {
  const API_URL = "http://localhost:3000/data";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return await data;
  } catch (error) {}
};
console.log(getData());



const createBasicCards = async (search) => {
  const cardField = document.querySelector("#cardField");
  cardField.innerHTML = "";
  const data = await getData();
  data.forEach((eachInfo) => {
    const {
      img,
      propertyType,
      businessType,
      price,
      location,
      owner,
      totalArea,
      parking,
      bathRoom,
      rooms,
    } = eachInfo;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
  <div class="card-img">
    <img
      src="${img}"
      alt=""
      srcset=""
    />
    <p class="propertyType">${propertyType}</p>
    <p class="businessType">${businessType}</p>
    <button class="fav">fav</button>
    <p class="price">${price}</p>
  </div>
  <div class="card-info">
    <p class="location">${location}</p>
    <p class="owner">${owner.ownerName}</p>
    <p class="total-area">${totalArea} ft</p>
    <p class="parking">${parking}</p>
    <p class="bathRoom">${bathRoom}</p>
    <p class="rooms">${rooms}</p>
  </div>
  `;
  });
};

const createBasicCards = async () => {
  const cardField = document.querySelector("#cardField");
  cardField.innerHTML = "";
  const data = await getData();
  data.forEach((eachInfo) => {
    const {
      img,
      propertyType,
      businessType,
      price,
      location,
      owner,
      totalArea,
      parking,
      bathRoom,
      rooms,
    } = eachInfo;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
  <div class="card-img">
    <img
      src="${img}"
      alt=""
      srcset=""
    />
    <p class="propertyType">${propertyType}</p>
    <p class="businessType">${businessType}</p>
    <button class="fav">fav</button>
    <p class="price">${price}</p>
  </div>
  <div class="card-info">
    <p class="location">${location}</p>
    <p class="owner">${owner.ownerName}</p>
    <p class="total-area">${totalArea} ft</p>
    <p class="parking">${parking}</p>
    <p class="bathRoom">${bathRoom}</p>
    <p class="rooms">${rooms}</p>
  </div>
  `;
  });
};
createBasicCards();


let favSelector = () => {
  let cards = document.querySelectorAll(".card");
  cards.forEach((eachCard) => {
    let favButtons = eachCard.querySelector(".fav");
    favButtons.addEventListener("click", () => {
      favButtons.classList.toggle("fav-clicked");
      eachCard.classList.toggle("selected");
    });
  });
};

let cleanPage = () => {
  let cleanPage = document.querySelectorAll(".page");
  cleanPage.forEach((eachView) => {
    eachView.classList.add("hide");
  });
};

// favSelector();

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
});


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



favButton.addEventListener("click", (e) => {
  favButton.classList.toggle("fav");
  favButton.classList.toggle("fav-clicked");
  console.log("fav");
});
*/

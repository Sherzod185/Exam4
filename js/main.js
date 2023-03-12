let mens1 = document.querySelector(".products-item4");
let mens2 = document.querySelector(".item4");
let all = document.querySelector(".products-item1");
let electr1 = document.querySelector(".item2");
let electr2 = document.querySelector(".products-item2");
let jewe1 = document.querySelector(".products-item3");
let jewe2 = document.querySelector(".item3");
let women1 = document.querySelector(".item5");
let women2 = document.querySelector(".products-item5");
let more = document.querySelector(".btnmore");
let iconBlock = document.querySelector(".iconblock");
let counts = document.querySelector(".count");
let addCart = document.querySelector(".add-cart");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let bady = document.querySelector(".bady");

iconBlock.onclick = () => {
  cart.classList.add("active");
  bady.classList.add("body-fake");
  y();
};

//cartni yopish

closeCart.onclick = () => {
  cart.classList.remove("active");
  bady.classList.remove("body-fake");
};
// corusl qismi

$(".corusel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
});

let shopcontent = document.querySelector(".shop-content");

// kop yozuvga chegara
function titles(tit) {
  let str = "";
  for (let i = 0; i < tit.title.length; i++) {
    str = str + tit.title[i];
    if (i > 25) {
      break;
    }
  }
  return str;
}

// reting
function rating(el) {
  if (el.rating.rate < 2.4) {
    el.rating.rate =
      "<i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx bxs-star iconcha bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bx-star '></i><i class='bx iconcha bx-star '></i><i class='bx iconcha bx-star '></i>";
  } else if (el.rating.rate < 3.4) {
    el.rating.rate =
      "<i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bx-star '></i><i class='bx iconcha bx-star '></i>";
  } else if (el.rating.rate < 4.4) {
    el.rating.rate =
      "<i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bx-star '></i>";
  } else {
    el.rating.rate =
      "<i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i><i class='bx iconcha bxs-star bx-tada' style='color:#e3ee0e' ></i>";
  }
  return el.rating.rate;
}

function apiMore() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
      <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
          product.price * 0.76
        ).toFixed(2)}🤩 </span>
  <i class='bx  bx-shopping-bag add-cart' id="${product.id}"></i>
      `;
        shopcontent.appendChild(div);
      });
    });
}

function apiMens() {
  fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
      <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
          product.price * 0.76
        ).toFixed(2)}🤩 </span>
  <i class='bx bx-shopping-bag add-cart' id="${product.id}" ></i>
      `;
        shopcontent.appendChild(div);
      });
    });
}

function apiElectronic() {
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
      <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
          product.price * 0.76
        ).toFixed(2)}🤩 </span>
  <i class='bx bx-shopping-bag add-cart' id="${product.id}"></i>
      `;
        shopcontent.appendChild(div);
      });
    });
}

function apiJeve() {
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
      <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
          product.price * 0.76
        ).toFixed(2)}🤩 </span>
  <i class='bx bx-shopping-bag add-cart' id="${product.id}"></i>
      `;
        shopcontent.appendChild(div);
      });
    });
}

function apiWomen() {
  fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
      <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
          product.price * 0.76
        ).toFixed(2)}🤩 </span>
  <i class='bx bx-shopping-bag add-cart' id="${product.id}"></i>
      `;
        shopcontent.appendChild(div);
      });
    });
}

women1.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiWomen();
});

women2.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiWomen();
});

jewe1.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiJeve();
});

jewe2.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiJeve();
});

electr1.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiElectronic();
});
electr2.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiElectronic();
});

mens1.addEventListener("click", () => {
  shopcontent.textContent = "";
  apiMens();
});
mens2.addEventListener("click", () => {
  shopcontent.textContent = "";
  apiMens();
});
all.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiProduct();
});
more.addEventListener("click", () => {
  shopcontent.innerHTML = "";
  apiMore();
});

function renderAdd(arr) {
  cartcont.innerHTML = "";
  for (let i of arr) {
    cartcont.innerHTML += `
    <div class="addBox">
      <p class="ca">X</p>
      <div class="product-im1">
        <img src="${i.image}" alt="watch1" class="product-im">
        <h3 class="product-tit">
          ${titles(i)}
        </h3>
      </div>
      <span class="pric">${(i.price * 0.76).toFixed(2)}$</span>
      <div class="hisobk">
        <button class="b1"> - </button>
        <strong class="sum"> 1 </strong>
        <button class="b2"> + </button>
      </div>
      <span class="umumiy_h">${(i.price * 0.76).toFixed(2)}$</span>
    </div>
    `;
  }
}

let cartcont = document.querySelector(".cart-context");
let sum = document.querySelector(".sum");

// Hisob kitob
let countPrice = 0;

function y() {
  countPrice = 0;
  let elPrice = document.querySelectorAll(".umumiy_h");
  elPrice.forEach((el) => {
    let a = el.textContent.split("");
    let b = a.splice(0, a.length - 1).join("");
    countPrice = Number(countPrice);
    countPrice += Number(b);
  });
}
y();

cartcont.addEventListener("click", (e) => {
  if (e.target.className == "b2") {
    sum = Number(e.target.previousElementSibling.innerHTML);
    // console.log(e.target.previousElementSibling);
    sum++;
    e.target.previousElementSibling.innerHTML = sum;

    let innerEl =
      e.target.parentElement.previousElementSibling.innerHTML.split("");
    let secArr = innerEl.splice(0, innerEl.length - 1).join("");
    e.target.parentElement.nextElementSibling.innerHTML =
      (sum * Number(secArr)).toFixed(2) + "$";

    y();
  } else if (e.target.className == "b1" && sum > 1) {
    sum = Number(e.target.nextElementSibling.innerHTML);
    sum--;
    e.target.nextElementSibling.innerHTML = sum;

    let innerEl =
      e.target.parentElement.previousElementSibling.innerHTML.split("");
    let secArr = innerEl.splice(0, innerEl.length - 1).join("");
    e.target.parentElement.nextElementSibling.innerHTML =
      (sum * Number(secArr)).toFixed(2) + "$";
    y();
  } else if (e.target.className == "ca") {
    let newArr = JSON.parse(localStorage.getItem("product")) || [];
    let arr2 = [];
    for (let k of newArr) {
      if (newArr[0].id == k.id) {
        continue;
      }

      arr2.push(k);
    }
    localStorage.setItem("product", JSON.stringify(arr2));
    newArr = JSON.parse(localStorage.getItem("product")) || [];
    y();
    renderAdd(newArr);
  }
});

shopcontent.addEventListener("click", (e) => {
  function apiLocStr() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          console.log(data.item);
          if (e.target.id == item.id) {
            let arr = JSON.parse(localStorage.getItem("product")) || [];
            if (!arr.find((el) => el.id == item.id)) {
              arr.push(item);
              renderAdd(arr);
              counts.innerHTML = arr.length;
              y();
            } else {
              alert("Karzinkaga qo'shilgan!!!");
            }
            localStorage.setItem("product", JSON.stringify(arr));
          }
        });
      });
  }
  apiLocStr();
});
let arr = JSON.parse(localStorage.getItem("product")) || [];
counts.innerHTML = arr.length;

function apiProduct() {
  renderAdd(arr);
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product-box";
        div.innerHTML = `
        <div class="product-img">
      <img src="${product.image}" alt="watch1" class="product-img">
    </div>
    <h3 class="product-title">
    ${titles(product)}
    </h3>
    <span class="reting">${rating(product)}</span>
    <span class="price">$ ${
      product.price
    }🤔 <p class="sale">24% SALE OF</p> $ ${(product.price * 0.76).toFixed(
          2
        )}🤩 </span>
    <i class='bx  bx-shopping-bag add-cart' id="${product.id}"></i>
        `;
        if (
          product.id == 1 ||
          product.id == 2 ||
          product.id == 3 ||
          product.id == 4 ||
          product.id == 5 ||
          product.id == 6 ||
          product.id == 7 ||
          product.id == 8
        ) {
          shopcontent.appendChild(div);
        }
      });
    });
}
apiProduct();

// search

import fns from "../js/utils.js";
const { $a, $$ } = fns;
let tovar = [];
async function fetchData(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      tovar = data;
      renderCards(data);
    });
}

function renderCards(data) {
  $a(".shop-content").innerHTML = "";
  data.forEach((product) => {
    let card = $$(
      "div",
      "card d-inline-block product-box",
      `
    <div class="product-img">
    <img src="${product.image}" alt="watch1" class="product-img">
  </div>
  <h3 class="product-title">
  ${titles(product)}
  </h3>
  <span class="reting">${rating(product)}</span>
  <span class="price">$ ${product.price}🤔 <p class="sale">24% SALE OF</p> $ ${(
        product.price * 0.76
      ).toFixed(2)}🤩 </span>
  <i class='bx bx-shopping-bag add-cart'></i>
       `
    );

    shopcontent.appendChild(card);
  });
}

$a(".searchProduct").addEventListener("input", function (e) {
  let searchData = tovar.filter(
    (el) =>
      el.title
        .toLowerCase()
        .includes($a(".searchProduct").value.toLowerCase()) ||
      (el.title &&
        el.title[0]
          .toLowerCase()
          .includes($a(".searchProduct").value.toLowerCase()))
  );

  renderCards(searchData);
});

$a(".searchProduct").addEventListener("click", () =>
  fetchData("https://fakestoreapi.com/products")
);

// login
function loginadd() {
  if (!localStorage.getItem("user")) {
    window.location.replace("/login.html");
  }
}
loginadd();

let logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  loginadd();
});

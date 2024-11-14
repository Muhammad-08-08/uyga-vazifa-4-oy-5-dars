let tosh = document.querySelector(".tosh");
let qaychi = document.querySelector(".qaychi");
let qogoz = document.querySelector(".qogoz");
let oyinYutish = document.querySelector(".oyin-text2");

let obj = {
  tosh: 0,
  qaychi: 1,
  qogoz: 2,
};

let objKeys = Object.values(obj);

tosh.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * objKeys.length);

  if (randomIndex === 1) {
    oyinYutish.textContent = `siz yutdingiz`;
  } else if (randomIndex === 0) {
    oyinYutish.textContent = `siz durrang o'ynadingiz`;
  } else {
    oyinYutish.textContent = `siz yutqazdingiz`;
  }
});

qaychi.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * objKeys.length);

  if (randomIndex === 2) {
    oyinYutish.textContent = `siz yutdingiz`;
  } else if (randomIndex === 1) {
    oyinYutish.textContent = `siz durrang o'ynadingiz`;
  } else {
    oyinYutish.textContent = `siz yutqazdingiz`;
  }
});

qogoz.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * objKeys.length);

  if (randomIndex === 0) {
    oyinYutish.textContent = `siz yutdingiz`;
  } else if (randomIndex === 2) {
    oyinYutish.textContent = `siz durrang o'ynadingiz`;
  } else {
    oyinYutish.textContent = `siz yutqazdingiz`;
  }
});

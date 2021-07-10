const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

//Randomly picks a color from colors array
button.addEventListener('click', function () {
  const randomColorsArr = randomNum();
  console.log(randomColorsArr)

  document.body.style.backgroundColor = colors[randomColorsArr];
  color.textContent = colors[randomColorsArr]
});

const randomNum = () => {
  return Math.floor(Math.random() * colors.length);
};
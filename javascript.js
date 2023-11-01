const generateARandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const generateARandomCharacter = () => {
  const characters = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const randomIndex = Math.floor(Math.random() * characters.length);
  const isLowerCase = Math.floor(Math.random() * 2);
  if (isLowerCase === 1) {
    return characters[randomIndex].toLowerCase();
  }
  return characters[randomIndex].toUpperCase();
};

const lengthOfPassword = 10;

for (let i = 0; i < lengthOfPassword; i++) {
  console.log(generateARandomCharacter());
}

let passwordLength = document.getElementById("passwordLength");
let rangeSlider = document.getElementById("rangeSlider");

rangeSlider.addEventListener("change",() =>
{
    passwordLength.value = rangeSlider.value;
})

passwordLength.addEventListener("input",() =>
{
  let passwordChg = document.getElementById("passwordLength").value;
  rangeSlider.value = passwordChg;
}
)
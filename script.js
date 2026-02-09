const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<>,.?/";
const extraSymbols = "'\"\\ ";

function genpass() {
  const ranpass1 = document.getElementById("passblocktext1");
  const ranpass2 = document.getElementById("passblocktext2");

  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  const useExtraSymbols = document.getElementById("extraSymbols").checked;

  let characterPool = [];

  if (useUppercase) characterPool = characterPool.concat(uppercase.split(""));
  if (useLowercase) characterPool = characterPool.concat(lowercase.split(""));
  if (useNumbers) characterPool = characterPool.concat(numbers.split(""));
  if (useSymbols) characterPool = characterPool.concat(symbols.split(""));
  if (useExtraSymbols) characterPool = characterPool.concat(extraSymbols.split(""));

  if (characterPool.length === 0) {
    alert("Select at least one character type!");
    return;
  }


  ranpass1.textContent = "";
  ranpass2.textContent = "";

  for (let i = 0; i < 16; ++i) {
    const ranIndex1 = Math.floor(Math.random() * characterPool.length);
    const ranIndex2 = Math.floor(Math.random() * characterPool.length);

    ranpass1.textContent += characterPool[ranIndex1];
    ranpass2.textContent += characterPool[ranIndex2];
  }
}

const customizeBtn = document.getElementById("customizebtn");
const checkboxes = document.getElementById("checkboxes");

customizeBtn.addEventListener("click", () => {
    checkboxes.classList.toggle("show");
})


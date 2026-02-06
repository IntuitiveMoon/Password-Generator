const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
  "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
  "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
  "]",",","|",":",";","<",">",".","?","/"
];

function genpass() {
  const ranpass1 = document.getElementById("passblocktext1");
  const ranpass2 = document.getElementById("passblocktext2");

  ranpass1.textContent = "";
  ranpass2.textContent = "";

  for (let i = 0; i < 16; ++i) {
    const ranIndex1 = Math.floor(Math.random() * characters.length);
    const ranIndex2 = Math.floor(Math.random() * characters.length);

    ranpass1.textContent += characters[ranIndex1];
    ranpass2.textContent += characters[ranIndex2];
  }
}
const prompt = require("prompt-sync")();


let name = "";

while (true) {
  try {
    name = prompt("Enter your name=> ");

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name) || name.trim() === "") {
      throw new Error("The name must contain letters only");
    }
    break; 

  } catch (error) {
    console.error("Error:", error.message);
  }
}

let age = NaN;

while (true) {
  try {
    const ageInput = prompt("Enter your age=> ");
    age = Number(ageInput);

    
    if (ageInput.trim() === "" || isNaN(age)) {
      throw new Error("Enter a valid number");
    }
    if (age < 0) {
      throw new Error("Age cannot be a negative number");
    }

    break; 

  } catch (error) {
    console.error("Error:", error.message);
  }
}


const message = age >= 18
  ? `Hi, ${name} enjoy the code`
  : `Hi, ${name} keep learning`;

console.log(message);
const batch = "#1900";

const message = `Hello ${batch}`;
console.log(message);

const numberInString = "1234";
console.log(numberInString);

const number = parseInt(numberInString, 10);
console.log(number);

const items = ["Hello", "Le", "Wagon", 42];

items[0]; // => 'Hello'

items.push("extra item");

console.log(items);

const person = {
  name: "Will",
  age: 24,
  occupation: "Software Developer",
};

if (person.age < 25) {
  console.log("will is not 25 yet");
} else if (person.age === 25) {
  console.log("will is 25");
} else {
  console.log("will is older ");
}

const greet = (name) => {
  console.log(`Hello ${name}`);
};

greet(person.name);

const capitalize = (word) => {
  // get the first letter
  // convert to uppercase
  // join the rest of the word onto that letter
  return word[0].toUpperCase() + word.substring(1);
};

console.log(capitalize("william"));

const container = document.querySelector("#theElement");
// console.dir(container);
container.insertAdjacentHTML("beforeend", "<strong>HELLOOOOOO</strong>");

const ul = document.querySelector("ul");
console.log(ul);

const luke = ul.querySelector("li.green");

luke.classList.remove("green");

console.log(luke.innerText);

const jedis = ul.querySelectorAll("li");
jedis[1].innerText = "Darth Vader";

ul.insertAdjacentHTML("beforeend", "<li class='blue'>France</li>");

const input = document.querySelector("#email");

console.log(input.value);
input.value = "john@gmail.com";

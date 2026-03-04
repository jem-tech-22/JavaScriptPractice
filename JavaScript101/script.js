// let math = 90;
// let english = 91;
// let mapeh = 93;
// let science = 82;
// let esp = 95;

// const sum = math + english + mapeh + science + esp;
// const average = sum / 5;

// console.log("Average: " + average); asdas

// let firstName = "Charles";
// let firstNameLength = firstName.length;

// document.getElementById("sample").innerHTML = (firstName[firstName.length-1]); 

// let num1 = 5;
// let num2 = 2;
// let sum = num1 + num2;

// alert(`${num1} + ${num2} = ${sum}`);

// let name1 = "Charles";
// let name2 = "Potchie";
// let pronoun = "he";
// let drink = "iced coffee";

// alert(
// `${name1}, the friendly neighbor, waved at ${name2} as ${pronoun} walked by ${name2}'s house. ${name2} smiled back and invited ${name1} in for a cup of ${drink}.`
// );
    
// let names = ["Charles", "Jem", "Zeus", "Potchie"];

// alert(names[names.length -1]);

// let numbers = [10, 22, 20, 25];
// numbers[1] = 21;

// alert(numbers[1]);

// let mlHeroes = ["Lancelot", "Gusion", "Ling", "Claude",];
// mlHeroes.unshift("Chou", "Saber");

// alert(mlHeroes);

// let mlHeroes = ["Lancelot", "Gusion", "Ling", "Claude"];
// mlHeroes = mlHeroes.slice(0,2);

// alert(mlHeroes);

// let firstName = ["Charles ", "Juan", "Pedro", "Jose"];
// let lastName = ["Salac", "Dela Cruz", "Penduko", "Manalo"];
// let age = [20, 15, 18, 30];

// let index = 1;

// alert(`
// ID Number: ${index}
// First Name:  ${firstName[index]}
// Last Name: ${lastName[index]}
// Age: ${age[index]}
// `);

// let age = 18;

// if (age >= 18) {
//     console.log("Legal Age");
// } else if (age <= 0) {
//     console.log("Invalid!");
// } else {
//     console.log("Minor Age");
// }

// let studentGrade = 74;

// if (studentGrade > 100) {
//     console.log("Invalid Grade");
// } else if (studentGrade >= 98) {
//     console.log("With Highest Honor");
// } else if (studentGrade >= 95) {
//     console.log("With High Honor");
// } else if (studentGrade >= 90) {
//     console.log("With Honor"); 
// } else if (studentGrade >= 75) {
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

// let age = 18;
// let workExperience = 2;

// console.log("==Information==")
// document.getElementById("age").innerHTML = `Age: ${age}`;
// document.getElementById("work-experience").innerHTML = `Work Experience: ${workExperience}`;

// if(age >= 18) {
//     if (workExperience >= 2) {
//         document.getElementById("status").innerHTML = "Status: Congrats, you are qualified!";

//     } else {
//         document.getElementById("status").innerHTML = "Status: Work experience didn't met, not qualified!";
//     }
// } else {
//     document.getElementById("status").innerHTML = "Status: You are minor, not qualified!";
// }

// let age = 18;
// let isRegistered = false;

// if (age >= 18 && isRegistered) {
//     document.getElementById("sample").innerHTML = `Valid voter`;
// } else if (age >= 18 || !isRegistered) {
//     document.getElementById("sample").innerHTML = `Register first`;
// } else if (age < 18 || isRegistered) {
//     document.getElementById("sample").innerHTML = `Invalid voter`;
// } else if (age < 18 && !isRegistered) {
//     document.getElementById("sample").innerHTML = `Non-voter`;
// }

// function showMessage() {
//     alert("Clicked!");
// }

// let days = 41;

// switch(days){
//     case 1:
//         document.getElementById("sample").innerHTML = `Monday`;
//         break;
//     case 2:
//         document.getElementById("sample").innerHTML = `Tuesday`;
//         break;
//     case 3:
//         document.getElementById("sample").innerHTML = `Wednesday`;
//         break;
//     case 4:
//         document.getElementById("sample").innerHTML = `Thursday`;
//         break;
//     case 5:
//         document.getElementById("sample").innerHTML = `Friday`;
//         break;
//     case 6:
//         document.getElementById("sample").innerHTML = `Saturday`;
//         break;
//     case 7:
//         document.getElementById("sample").innerHTML = `Sunday`;
//         break;
//     default:
//         document.getElementById("sample").innerHTML = `Invalid day`;
// }

// function showMessage() {
//     alert("Clicked!");
// }

// let word = "Hello World";
// let reverse = "";

// for(let i = word.length -1; i >= 0; i--) {
//     reverse += word[i];
// }

// console.log(reverse);

// let names = ["Charles", "James", "Potchie", "Jem", "Tensionado"];
// let nameSearch = "JsEm";

// let isNameExist = false;

// for(let i = 0; i <= names.length -1; i++) {
//     if(nameSearch.toLowerCase() === names[i].toLowerCase()) {
//         isNameExist = true;
//         console.log(`Found ${names[i]}`);
//         break;
//     } 
// }

// if (isNameExist === false) {
//     console.log(`${nameSearch} not exist`)
// }

// console.log("Hello World");


const givenUsername = "jem123";
const givenPassword = "123"; //asdadsadasdasd 

const form = document.getElementById("inputField");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if(usernameInput === givenUsername && passwordInput === givenPassword){
        message.textContent = "Log in success!";
        message.style.color = "green";
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Log in failed!";
        message.style.color = "red";
    }
});

// let person = {
//     personUsername: "jempotchie",
//     personPassword: 1234,
//     mainHeroes: {
//         hero1: {
//             heroName: "Ling",
//             heroType: "Assasin"
//         },
//         hero2: {
//             heroName: "Layla",
//             heroType: "Marksman"
//         }
//     }
// };

// console.log(person.mainHeroes.hero1.heroName);
// console.log(person.mainHeroes["hero2"].heroType);

// person.personUsername = "potpot";
// person.personEmail = "pot@gmail.com";
// console.log(person);

let people = [
    {
        firstname: "Charles James",
        lastname: "Salac",
        age: 20
    },
    {
        firstname: "Juan",
        lastname: "dela Cruz",
        age: 28  
    },
    {
        firstname: "Pedro",
        lastname: "Penduko",
        age: 18
    }
];

let strPeople = JSON.stringify(people);

console.log(people);
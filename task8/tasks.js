const firstName = "Султан";
const lastName = "Амангельдиев";
const age = 30;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);



const city = "Астана";
console.log("Я родом из города " + city);




const password = "mySecret123";
const hasAccess = password.length > 0;

console.log("Password:", password);
console.log("Has access:", hasAccess);




let isMember = false;
isMember = isMember.toString();

console.log("Значение:", isMember);
console.log("Тип данных:", typeof isMember);




let cartItems = 0;
const isCartEmpty = Boolean(cartItems);

console.log("Корзина пуста:", isCartEmpty);




let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);

console.log("Средний балл:", averageScore);




let greetingMessage = "      Приветствуем вас в мире программирования!        ";

const trimmedMessage = greetingMessage.trim();
console.log("Без пробелов:", trimmedMessage);


const upperCaseMessage = trimmedMessage.toUpperCase();
console.log("Верхний регистр:", upperCaseMessage);


const hasProgramming = trimmedMessage.includes("программирования");
console.log("Содержит 'программирования':", hasProgramming);




const userAge = prompt("Введите ваш возраст:");

if (userAge === null || userAge.trim() === "") {
  alert("Пожалуйста, введите ваш возраст");
} else if (isNaN(userAge)) {
  alert("Недопустимый формат. Введите число");
} else if (parseInt(userAge) < 18) {
  alert("Доступ ограничен. Вам должно быть 18 лет или больше");
} else {
  alert("Добро пожаловать!");
}



const secretNumber = 7;
const userGuess = prompt("Угадайте число от 1 до 10:");

if (userGuess === null || userGuess.trim() === "") {
  alert("Пожалуйста, введите число");
} else if (isNaN(userGuess)) {
  alert("Недопустимый формат. Введите число");
} else {
  const guess = parseInt(userGuess);
  
  if (guess === secretNumber) {
    alert("Поздравляем! Вы угадали!");
  } else if (guess > secretNumber) {
    alert("Число слишком велико");
  } else {
    alert("Число слишком мало");
  }
}




const timeOfDay = prompt("Введите время суток (утро, день, вечер):").toLowerCase();

if (typeof timeOfDay !== "string" || timeOfDay.trim() === "") {
  alert("Ошибка: Пожалуйста, введите корректное время суток");
} else {
  let drink;
  
  switch(timeOfDay) {
    case "утро":
      drink = "кофе";
      break;
    case "день":
      drink = "чай";
      break;
    case "вечер":
      drink = "горячий шоколад";
      break;
    default:
      alert("Ошибка: Введите одно из значений: утро, день или вечер");
      break;
  }
  
  if (drink) {
    alert(`Рекомендуем вам выпить ${drink}`);
  }
}


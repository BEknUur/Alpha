const student = {
  name: prompt("Введите ваше имя:"),
  age: parseInt(prompt("Введите ваш возраст:")),
  subject: prompt("Введите ваш предмет:"),
  grade: prompt("Введите вашу оценку:")
};

console.log("Исходные данные:", student);


student.age += 5;
console.log("После увеличения возраста на 5:", student);




const movies = [
  { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
  { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
  { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
  { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
  { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];


console.log("Режиссёр второго фильма:", movies[1].director);

console.log("Жанр четвёртого фильма:", movies[3].genre);





let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];


shoppingList.unshift("апельсины");
console.log("После добавления в начало:", shoppingList);


shoppingList.pop();
console.log("После удаления последнего:", shoppingList);


shoppingList.splice(2, 1, "йогурт", "творог");
console.log("После замены третьего элемента:", shoppingList);





const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); 




const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(`Название: ${book.title}`);
  console.log(`Автор: ${book.author}`);
  console.log(`Количество страниц: ${book.numberOfPages}`);
  console.log(`Жанр: ${book.genre}`);
  console.log("Награды:");
  
  for (let j = 0; j < book.awards.length; j++) {
    console.log(`- ${book.awards[j]}`);
  }
  
  console.log("");
}



function compareAges(age1, age2) {
  if (age1 > age2) {
    return "Первый человек старше";
  } else if (age2 > age1) {
    return "Второй человек старше";
  } else {
    return "Оба человека одного возраста";
  }
}



function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}


function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}



function pickEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
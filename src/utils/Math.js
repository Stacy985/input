// 1. Оба передаются и оба числа +
// 2. Оба передаются и какое-либо из них не число +
// 3. Передается только одно числовое значение +
// 4. Передается только одно не числовое значение +
// 5. Значения не передаются вообще +


function add(a = 0, b = 0) {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }else{
    throw new TypeError('Invalid type for sum active!')
  }
}
 










function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function expon(a, b) {
  return a ** b;
}


//1. Что число и передается. 
//2. Не передаем вообще
//3. Не число и передается



function squart(a = 0){
  if (typeof a === "number"){
    return Math.sqrt(Math.abs(a));
  } else {
    throw new TypeError("Data is not transmitted")
  }

}
/* function squart(a) {
  return Math.sqrt(a);
}

 */




module.exports = {
  add,
  sub,
  mult,
  div,
  expon,
  squart,
};


/* const add = (a, b) => a + b;

const sub = (a, b) => a - b;
const mult = (a, b) => a * b;

const div = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

// Функция для возведения числа в степень
const expon = (a, b) => a ** b;

// Функция для извлечения квадратного корня из числа
const squart = (a) => {
  if (a < 0) {
    throw new Error('Square root of a negative number is not defined');
  }
  return Math.sqrt(a);
};

// Экспортируем функции для использования в других модулях
module.exports = {
  add,
  sub,
  mult,
  div,
  expon,
  squart,
}; */
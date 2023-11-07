function add(a, b) {
  return a + b;
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

function squart(a) {
  return Math.sqrt(a);
}

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
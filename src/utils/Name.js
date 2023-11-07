// 1. Составить тесты и функцию в utils для проверки корректно введенного ФИО.
// Условвия:
// 1. И, Ф, О должны начинаться с заглавной буквы
// 2. ФИО передается одной строкой
// 3. Длина ф, и, о должна быть больше 4
// 4. В фио нет лишних элементов (Иванов Иван Иван Иванович - false)

function checkName(nameArg) {
  if (
    typeof nameArg !== "string" ||
    (typeof nameArg === "string" && nameArg.trim().split(" ").length !== 3)
  ) {
    return false;
  }

  const nameParts = nameArg.trim().split(" ");

  for (let part of nameParts) {
    if (!/^[А-ЯA-Z][а-яa-z]{3,25}$/u.test(part)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkName,
};

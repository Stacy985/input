/* 
Написать компоненту которая является инпут range с двумя пределами. Под этим этим range реализовать 2 инпута в левом прописывается lower, в правом apper. 

Если в инпуте поменяем значение на другое то это значение соотвестующе подвинет кружочек. 

Расстояние между ними меняется. 

Если в инпуте впишем значение то кружочек - двигается. 

- реализовать смещение кружочков через шаг.

описывать события и коллбэки

на css

залить на гит!!
*/


// функция обнавления диапазона
function updateRangeDisplay(sliderSection) {
  // Поиск всех нужные элементы в разделе
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._input-lower");
  const upperInput = sliderSection.querySelector("input._input-upper");
  const displayElement = sliderSection.querySelector("._range-values");

  // Значение инпутоп === значения числам
  const lowerValue = parseFloat(lowerInput.value);
  const upperValue = parseFloat(upperInput.value);

  // Input range соотвествует инпутам
  rangeInputs[0].value = lowerValue;
  rangeInputs[1].value = upperValue;

  // Текст на странице === тестку текущими значениями
  displayElement.textContent = `${lowerValue} ₽ - ${upperValue} ₽`;
}

// Взаимодействие между ползунками и инпутами
function setupRangeSlider(sliderSection) {
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._input-lower");
  const upperInput = sliderSection.querySelector("input._input-upper");

  //Обработчики событий для всех ползунков 
  rangeInputs.forEach(function (rangeInput) {
    rangeInput.addEventListener("input", function () {
      //Значения инпутов ===  значению положения ползунков
      lowerInput.value = rangeInputs[0].value;
      upperInput.value = rangeInputs[1].value;
      updateRangeDisplay(sliderSection);
    });
  });


  lowerInput.addEventListener("input", function () {
    rangeInputs[0].value = lowerInput.value;
    updateRangeDisplay(sliderSection);
  });

  upperInput.addEventListener("input", function () {
    rangeInputs[1].value = upperInput.value;
    updateRangeDisplay(sliderSection);
  });
  updateRangeDisplay(sliderSection);
}


window.addEventListener("load", function () {
  const sliderSections = document.querySelectorAll("._range-slider");
  sliderSections.forEach(function (sliderSection) {
    setupRangeSlider(sliderSection);
  });
});

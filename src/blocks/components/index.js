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





function updateRangeDisplay(sliderSection) {
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._range-lower");
  const upperInput = sliderSection.querySelector("input._range-upper");
  const displayElement = sliderSection.querySelector("._rangeValues");

  const lowerValue = parseFloat(lowerInput.value);
  const upperValue = parseFloat(upperInput.value);

  rangeInputs[0].value = lowerValue;
  rangeInputs[1].value = upperValue;

  displayElement.textContent = `${lowerValue} ₽ - ${upperValue} ₽`;
}

function setupRangeSlider(sliderSection) {
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._range-lower");
  const upperInput = sliderSection.querySelector("input._range-upper");

  rangeInputs.forEach(function (rangeInput) {
    rangeInput.addEventListener("input", function () {
      updateRangeDisplay(sliderSection);
    });
  });

  lowerInput.addEventListener("input", function () {
    updateRangeDisplay(sliderSection);
  });

  upperInput.addEventListener("input", function () {
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

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


const MAX_INPUT = 50000;
const MIN_INPUT = 100;

// функция обнавления диапазона
function updateRangeDisplay(sliderSection) {
  // Поиск всех нужные элементы в разделе
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._input-lower");
  const upperInput = sliderSection.querySelector("input._input-upper");
  const displayElement = sliderSection.querySelector("._range-values");

  // Значение инпутоп === значения числам
  const lowerValue = parseInt(lowerInput.value);
  const upperValue = parseInt(upperInput.value);


  console.log(rangeInputs[0].getBoundingClientRect().left);
  console.log(rangeInputs[1].getBoundingClientRect().left);


  // Текст на странице === тестку текущими значениями
  displayElement.textContent = `${lowerValue} ₽ - ${upperValue} ₽`;
}

// Взаимодействие между ползунками и инпутами
function setupRangeSlider(sliderSection) {
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._input-lower");
  const upperInput = sliderSection.querySelector("input._input-upper");

  //Обработчики событий для всех ползунков 
  rangeInputs.forEach( (rangeInput, index) => {
    rangeInput.addEventListener("change", (e) => {

      if(index === 1) { // index = 1

        if(Number(e.target.value) <= MAX_INPUT && Number(e.target.value) >= +lowerInput.value + 5000){
          upperInput.value = +e.target.value;
        }else{
          e.target.value = +rangeInputs[0].value + 5000;
          upperInput.value = +lowerInput.value + 5000;
        }

      } else { // index == 0


        if(Number(e.target.value) >= MIN_INPUT && Number(e.target.value) <= +upperInput.value - 5000){
          lowerInput.value = +e.target.value;
        }else{
          e.target.value = +rangeInputs[1].value - 5000;
          lowerInput.value = +rangeInputs[1].value - 5000;
        }
      }

      updateRangeDisplay(sliderSection);
    });
  });


  lowerInput.addEventListener("input", (e) => {

    
    console.log('lower input')

    // console.log(Number(e.target.value) >= 0);  проверка на минусовое значение

    if(Number(e.target.value) >= MIN_INPUT && Number(e.target.value) <= +upperInput.value - 5000){
      rangeInputs[0].value = lowerInput.value;
      updateRangeDisplay(sliderSection);
    }else if(Number(e.target.value) < MIN_INPUT){
      rangeInputs[0].value = MIN_INPUT; 
      e.target.value = MIN_INPUT;
      updateRangeDisplay(sliderSection);
    }else{
      rangeInputs[0].value = upperInput.value - 5000; 
      e.target.value = upperInput.value - 5000;
      updateRangeDisplay(sliderSection);
    }
  });

  upperInput.addEventListener("input", (e) => {

    console.log('upper input')

    if(Number(e.target.value) <= MAX_INPUT && Number(e.target.value) >= +lowerInput.value + 5000){
      rangeInputs[1].value = lowerInput.value;
      updateRangeDisplay(sliderSection);
    }else if(Number(e.target.value) > MAX_INPUT){
      rangeInputs[1].value = MAX_INPUT; 
      e.target.value = MAX_INPUT;
      updateRangeDisplay(sliderSection);
    }else{
      rangeInputs[1].value = +lowerInput.value + 5000; //унарный + перед строкой озачает перевод в number
      e.target.value = +lowerInput.value + 5000;
      updateRangeDisplay(sliderSection);
    }
  });

  console.log('Load')
  // Input range соотвествует инпутам
  rangeInputs[0].value = +lowerInput.value;
  rangeInputs[1].value = +upperInput.value;
  updateRangeDisplay(sliderSection);
}

// 35000 - 42000

window.addEventListener("load", function () {
  const sliderSection = document.querySelector("._range-slider");
  setupRangeSlider(sliderSection);
});

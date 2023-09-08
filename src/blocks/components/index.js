/* 
Написать компоненту которая является инпут range с двумя пределами. Под этим этим range реализовать 2 инпута в левом прописывается lower, в правом apper. 

Если в инпуте поменяем значение на другое то это значение соотвестующе подвинет кружочек. 

Расстояние между ними меняется. 

Если в инпуте впишем значение то кружочек - двигается. 

- реализовать смещение кружочков через шаг.

описывать события и коллбэки

на css

залить на гит!!


сделать сдвиг в 10.000 (инимальный у зеленый 100 у красного 10000)
при движении кругляши сцепляны и сохраняют расстояние междуц собой



написать toggle 
https://codepen.io/nicolasjesenberger/pen/xxmbvxL
к воскревенью:
имеется n-колл-во radio button, все подсчет автоматически от их колличества.
Центральный элемент активный, при нажатии активный элемент и свайпе влево-вправо, активный элемент перебрасывается в соотсветвующую сторону. 
Если перемещение неозвожно - оставляем элемент в текущей ячейке и выводим в консоли сообщение 'Move direction in invalid!'


Promise
*/


const MAX_INPUT = 50000;
const MIN_INPUT = 100;

const SliderIndent = document.getElementById('slider_indent')


class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  static getLengthOfLine(point_1, point_2){
    return point_2.x - point_1.x; // 240 - 12 = 228
  }
}


const WidthOfSlider = 200;
const SliderPointsCoords = [new Point(0, 0), new Point(WidthOfSlider, 0)];
const prevState = [100, 50000];


// 25 000 (50%) - 50 000


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


  // Текст на странице === тестку текущими значениями
  displayElement.textContent = `${lowerValue} ₽ - ${upperValue} ₽`;
}


function updateCoord(newValue, index = 0){

  console.log(newValue < 40 && index == 1)

  if(newValue < 40 && index == 1){

    const rangeInputs = document.querySelector("._range-slider").querySelectorAll("input._range-input[type='range']");
    const lowerInput = document.querySelector("._range-slider").querySelector("input._input-lower");
    const upperInput = document.querySelector("._range-slider").querySelector("input._input-upper");

    lowerInput.value = MIN_INPUT;
    upperInput.value = MIN_INPUT + 10000;

    rangeInputs[0].value = lowerInput.value;
    rangeInputs[1].value = upperInput.value;

    newValue = 40;
  }


  if(index == 1 && SliderPointsCoords[1].x > newValue && Point.getLengthOfLine(SliderPointsCoords[0], SliderPointsCoords[1]) <= 40){
    let oldLeft = SliderPointsCoords[0].x,
        oldRight = SliderPointsCoords[1].x,
        newRight = newValue;

    SliderPointsCoords[0].x = oldLeft - (oldRight - newRight);
    SliderIndent.style.left = SliderPointsCoords[0].x + 'px';
  }

  SliderPointsCoords[index].x = newValue;

  if(index == 0){
    SliderIndent.style.left = SliderPointsCoords[0].x + 'px'; // left offset 
  }

  SliderIndent.style.width = Point.getLengthOfLine(SliderPointsCoords[0], SliderPointsCoords[1]) + 'px'; // width of slider 
}

// Взаимодействие между ползунками и инпутами
function setupRangeSlider(sliderSection) {
  const rangeInputs = sliderSection.querySelectorAll("input._range-input[type='range']");
  const lowerInput = sliderSection.querySelector("input._input-lower");
  const upperInput = sliderSection.querySelector("input._input-upper");

  //Обработчики событий для всех ползунков 
  rangeInputs.forEach( (rangeInput, index) => {
    rangeInput.addEventListener("input", (e) => {

      if(index === 1) { // index = 1

        if(Number(e.target.value) <= MAX_INPUT && Number(e.target.value) >= +lowerInput.value + 10000){
          upperInput.value = +e.target.value;
        }else{

          if(rangeInputs[0].value > MIN_INPUT){

            console.log('pair move')

            upperInput.value = +e.target.value;
            rangeInputs[0].value = +e.target.value - 10000;
            lowerInput.value = +e.target.value - 10000;
          }else{

            console.log('block left move')

            lowerInput.value = MIN_INPUT;
            rangeInputs[0].value = MIN_INPUT;
            e.target.value = MIN_INPUT + 10000;
            upperInput.value = MIN_INPUT + 10000;
          }
        }
      } else { // index == 0

        if(Number(e.target.value) >= MIN_INPUT && Number(e.target.value) <= +upperInput.value - 10000){
          lowerInput.value = +e.target.value;
        }else{
          e.target.value = +rangeInputs[1].value - 10000;
          lowerInput.value = +rangeInputs[1].value - 10000;
        }
      }

      
      updateRangeDisplay(sliderSection);
      updateCoord(Math.round(+e.target.value / 50000 * WidthOfSlider), index)
    });
  });

  lowerInput.addEventListener('focus', (e) => {
    prevState[0] = +e.target.value;
    e.target.value = '';
  })

  upperInput.addEventListener('focus', (e) => {
    prevState[1] = +e.target.value;
    e.target.value = '';
  })


  lowerInput.addEventListener('blur', (e) => {
    e.target.value = prevState[0];
  })

  upperInput.addEventListener('blur', (e) => {
    e.target.value = prevState[1];
  })

  lowerInput.addEventListener("change", (e) => {

    if(Number(e.target.value) >= MIN_INPUT && Number(e.target.value) <= +upperInput.value - 10000){
      rangeInputs[0].value = lowerInput.value;
    }else if(Number(e.target.value) < MIN_INPUT){
      rangeInputs[0].value = MIN_INPUT; 
      e.target.value = MIN_INPUT;
    }else{
      if(!+e.target.value){
        e.target.value = prevState[0];
      }else{
        rangeInputs[0].value = +upperInput.value - 10000; 
        e.target.value = +upperInput.value - 10000;
      }
    }

    updateRangeDisplay(sliderSection);
    updateCoord(Math.round(+e.target.value / 50000 * WidthOfSlider))
    prevState[0] = +e.target.value;
  });

  upperInput.addEventListener("change", (e) => {

    if(Number(e.target.value) <= MAX_INPUT && Number(e.target.value) >= +lowerInput.value + 10000){
      rangeInputs[1].value = lowerInput.value;
    }else if(Number(e.target.value) > MAX_INPUT){
      rangeInputs[1].value = MAX_INPUT; 
      e.target.value = MAX_INPUT;
    }else{
      if(!+e.target.value){
        e.target.value = prevState[1];
      }else{
        rangeInputs[1].value = +lowerInput.value + 10000; //унарный + перед строкой озачает перевод в number
        e.target.value = +lowerInput.value + 10000;
      } 
    }

    updateRangeDisplay(sliderSection);
    updateCoord(Math.round(+e.target.value / 50000 * WidthOfSlider), 1)
    prevState[1] = +e.target.value;
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


/* window.addEventListener("load", function () {
  const sliderSection = document.querySelector("._range-slider");
  setupRangeSlider(sliderSection);
  
  const sliderContainer = document.querySelector(".range_container");
  sliderContainer.addEventListener("mousemove", handleSliderMove);
  
  function handleSliderMove(e) {
    if (e.buttons !== 1) return; // Проверка на нажатую левую кнопку мыши
  
    const mouseX = e.clientX - sliderContainer.getBoundingClientRect().left;
    const newValue = (mouseX / WidthOfSlider) * (MAX_INPUT - MIN_INPUT) + MIN_INPUT;
    const lowerInput = document.querySelector("input._input-lower");
    const upperInput = document.querySelector("input._input-upper");
  
    if (newValue >= parseInt(lowerInput.value) && newValue <= parseInt(upperInput.value)) {
      updateCoord(mouseX);
      const rangeInput = document.querySelector("input._range-input[type='range']");
      rangeInput.value = newValue;
      rangeInput.dispatchEvent(new Event("input"));
    }
  }
  

}); */
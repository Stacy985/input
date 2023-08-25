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



function getVals() {
  const parent = this.parentNode;
  const slides = parent.querySelectorAll("input[type='range']");
  const slide1 = parseFloat(slides[0].value);
  const slide2 = parseFloat(slides[1].value);
  const displayElement = parent.querySelector("._rangeValues");
  displayElement.textContent = `${slide1} ₽ -  ${slide2} ₽`;
}

window.addEventListener("load", function() {
  const sliderSections = document.querySelectorAll("._range-slider");
  sliderSections.forEach(function(sliderSection) {
    const sliders = sliderSection.querySelectorAll("input[type='range']");
    sliders.forEach(function(slider) {
      slider.addEventListener("input", getVals);
      slider.dispatchEvent(new Event("input"));
    });
  });
});

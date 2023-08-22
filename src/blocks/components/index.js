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

const inputRange = document.querySelector("._rangeInput");
const lowerInput = document.querySelector("._lowerInput");
const apperInput = document.querySelector("._apperInput");

inputRange.addEventListener('input',()=> {
  let rangeValue = parseInt(rangeInput.value);
  inputRange.value = 100 - rangeValue;
  lowerInput.value = rangeValue;
})
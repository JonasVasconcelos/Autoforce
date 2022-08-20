/* Tive uma dificuldade nessa questão.
Eu consigo inserir os novos campos logo abaixo do input-radio,
mas eles são destruídos ao interagir com outros campos. */

// 1 - Encontrei o local (target) para inserir os novos campos
const Form = document.getElementsByTagName('form')[1];
const divForm = Form.childNodes[2];

// 2 - Criei e configurei os campos
// Fieldset
const newFieldSet = document.createElement('fieldset');
const newLegend = document.createElement('legend');
newLegend.classList.add('conversion-form__control-label');
newLegend.innerHTML = 'Qual o modelo?';
newFieldSet.appendChild(newLegend);

// Select
const Select = document.createElement('select');
const carOptions = ['SUV', 'Senda', 'Hatch', 'Pickup'];

carOptions.map((item, index) => {
  let carOptionsItem = document.createElement('option');
  carOptionsItem.key = index;
  carOptionsItem.value = item;
  carOptionsItem.innerHTML = item;
  Select.appendChild(carOptionsItem);
})

newFieldSet.appendChild(Select);

const nextFieldSet = divForm.childNodes[1];

// Text Area
const textArea = document.createElement('textarea');
textArea.placeholder = 'Mensagem';
textArea.style.marginTop = '10px';
divForm.insertBefore(textArea, nextFieldSet);

/* Devido a esse bug, eu resolvi fazer outra versão (Parte1-3-v2.js)
para tentar inserir os novos campos em outro local, onde não fossem destruídos e
o usuário pudesse interegir, apesar de ficar insatisfeito com a estética. */

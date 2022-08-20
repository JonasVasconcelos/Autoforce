// --- Versao 2 --- ///
// Similar a v1, mas adiciona os novos campos ao final do formulario.

const Form = document.getElementsByTagName('form')[1]
const divForm = Form.childNodes[2]

const newFieldSet = document.createElement('fieldset')
const newLegend = document.createElement('legend')
newLegend.classList.add('conversion-form__control-label')
newLegend.innerHTML = 'Qual o modelo?'
newFieldSet.appendChild(newLegend)

const Select = document.createElement('select')
const carOptions = ['SUV', 'Senda', 'Hatch', 'Pickup']

carOptions.map((item, index) => {
  let carOptionsItem = document.createElement('option')
  carOptionsItem.key = index
  carOptionsItem.value = item
  carOptionsItem.innerHTML = item
  Select.appendChild(carOptionsItem)
})

newFieldSet.appendChild(Select)

const nextFieldSet = divForm.childNodes[1]

// adicionar tudo dentro de um form-group após os campos de email etc

// divForm.insertBefore(newFieldSet, nextFieldSet);

const textArea = document.createElement('textarea')
textArea.placeholder = 'Mensagem'
textArea.style.marginTop = '10px'
divForm.insertBefore(textArea, nextFieldSet)


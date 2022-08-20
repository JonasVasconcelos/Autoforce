const popupWhats = document.getElementById('popup-whats')
popupWhats.removeAttribute('onclick')

const newDiv = document.createElement('div')
newDiv.setAttribute('id', 'modal')
newDiv.style.position = 'fixed'
newDiv.style.bottom = '-50px'
newDiv.style.left = '-50px'
newDiv.style.zIndex = '10000000'
newDiv.style.background = 'white'
newDiv.style.flexDirection = 'column'
newDiv.style.borderRadius = '5px'
newDiv.style.boxShadow = '0px 10px 15px -3px rgba(0,0,0,0.1)'
newDiv.style.cursor = 'auto'
newDiv.style.transition = '300ms ease-in-out'
newDiv.style.transform = 'translate(70px, -75px)'
newDiv.style.display = 'none'

const popupHeader = document.createElement('div')
popupHeader.style.background = '#4ec859'
popupHeader.style.height = '50px'
popupHeader.style.color = 'white'
popupHeader.style.display = 'flex'
popupHeader.style.flexDirection = 'row'
popupHeader.style.alignItems = 'center'
popupHeader.style.justifyContent = 'space-between'
popupHeader.style.paddingLeft = '10px'
popupHeader.style.borderRadius = '5px'
newDiv.appendChild(popupHeader)

const titlePopup = document.createElement('span')
titlePopup.style.fontWeight = '700'
titlePopup.innerHTML = 'Whatsapp'
popupHeader.appendChild(titlePopup)

const btnClosePopup = document.createElement('div')
btnClosePopup.setAttribute('id', 'btn-close')
btnClosePopup.style.cursor = 'pointer'
btnClosePopup.style.border = 'none'
btnClosePopup.style.outline = 'none'
btnClosePopup.style.background = 'none'
btnClosePopup.style.fontSize = '1.5rem'
btnClosePopup.style.paddingRight = '10px'
btnClosePopup.style.fontWeight = '700'
btnClosePopup.innerHTML = '&times'
popupHeader.appendChild(btnClosePopup)

const newUl = document.createElement('ul')
newUl.classList.add('list')
newUl.classList.add('list--header-phones')
newUl.classList.add('list--border-bottom')

const newLi1 = document.createElement('li')
const newLi2 = document.createElement('li')
const newLi3 = document.createElement('li')

newLi1.classList.add('header__card-whatsapp-item')
newLi2.classList.add('header__card-whatsapp-item')
newLi3.classList.add('header__card-whatsapp-item')

// ------------- Anchor 1
const anchor1 = document.createElement('a')
anchor1.classList.add('header-mobile__whatsapp-link')
anchor1.href = "https://api.whatsapp.com/send?phone=551199999999"
anchor1.target="_blank"

const newStrong1 = document.createElement('strong')
newStrong1.innerHTML = 'Seminovos: '

const newSpan1 = document.createElement('span')
newSpan1.innerHTML = '+55 (11) 9999-9999 '
newSpan1.classList.add('header-mobile__whatsapp-number')
newSpan1.classList.add('text-mask-phone')

const newIcon1 = document.createElement('i')
newIcon1.classList.add('icon')
newIcon1.classList.add('icon-whatsapp')

anchor1.appendChild(newStrong1)
anchor1.appendChild(newSpan1)
newLi1.appendChild(anchor1)
newLi1.appendChild(newIcon1)
newUl.appendChild(newLi1)

// ------------- Anchor 2
const anchor2 = document.createElement('a')
anchor2.classList.add('header-mobile__whatsapp-link')
anchor2.href = "https://api.whatsapp.com/send?phone=55111111111111"
anchor2.target="_blank"

const newStrong2 = document.createElement('strong')
newStrong2.innerHTML = 'Serviços: '

const newSpan2 = document.createElement('span')
newSpan2.innerHTML = '+55 (11) 11111-11111 '
newSpan2.classList.add('header-mobile__whatsapp-number')
newSpan2.classList.add('text-mask-phone')

const newIcon2 = document.createElement('i')
newIcon2.classList.add('icon')
newIcon2.classList.add('icon-whatsapp')

anchor2.appendChild(newStrong2)
anchor2.appendChild(newSpan2)
newLi2.appendChild(anchor2)
newLi2.appendChild(newIcon2)
newUl.appendChild(newLi2)


// ------------- Anchor 3
const anchor3 = document.createElement('a')
anchor3.classList.add('header-mobile__whatsapp-link')
anchor3.href = "https://api.whatsapp.com/send?phone=551188888888"
anchor3.target="_blank"

const newStrong3 = document.createElement('strong')
newStrong3.innerHTML = 'Central de Vendas: '

const newSpan3 = document.createElement('span')
newSpan3.innerHTML = '+55 (11) 88888-8888 '
newSpan3.classList.add('header-mobile__whatsapp-number')
newSpan3.classList.add('text-mask-phone')

const newIcon3 = document.createElement('i')
newIcon3.classList.add('icon')
newIcon3.classList.add('icon-whatsapp')

anchor3.appendChild(newStrong3)
anchor3.appendChild(newSpan3)
newLi3.appendChild(anchor3)
newLi3.appendChild(newIcon3)
newUl.appendChild(newLi3)

newDiv.appendChild(newUl)
popupWhats.appendChild(newDiv)

function closePopup(){
  // newDiv.style.transform = 'translate(70px, -75px) scale(0)'
  newDiv.style.display = 'none'
  console.log('aqui');
}

function openPopup(){
  // newDiv.style.transform = 'translate(70px, -75px) scale(1)'
  newDiv.style.display = 'flex'
}

popupWhats.addEventListener('click', openPopup)
btnClosePopup.addEventListener('click', closePopup)
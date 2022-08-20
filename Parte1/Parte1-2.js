// 1 - Encontrei a lista de itens para maanipular
const List = document.getElementsByTagName('ul')[6];

// 2 - Excluir os links de Novos e Seminovos
const Novos = List.childNodes[1];
List.removeChild(Novos);
const SemiNovos = List.childNodes[1];
List.removeChild(SemiNovos);

// 3 - Criei um novo elemento da lista e preferi por manter a estrutura e classes dos demais itens.
// Segue uma lista de blocos cujo intuito foi criar, configurar e inserir

// Item
const itemList = document.createElement('li');
itemList.style = "--animation-index: 1";
itemList.classList.add("nav-item");
itemList.classList.add("nav-simple__item");

// Anchor
const anchor = document.createElement('a');
anchor.href = "/autoforce-ford#";
anchor.classList.add("nav-link");
anchor.classList.add("nav-simple__link");
anchor.setAttribute('data-toggle','dropdown');
anchor.innerHTML = 'Veículos';

// Icon
const icon = document.createElement('i');
icon.classList.add("icon");
icon.classList.add("icon-dropdown");
icon.classList.add("icon-arrow-d");

anchor.appendChild(icon);
itemList.appendChild(anchor);

// Div
const devision = document.createElement('div');
devision.classList.add("nav-simple-sub");
devision.classList.add("card-collapse-deep");
devision.classList.add("dropdown-menu");

const newList = document.createElement('ul');
newList.classList.add("list");
newList.classList.add("list--border-bottom");

// Novo item 'Novos'
const newItemNovos = document.createElement('li');
const newAnchorNovos = document.createElement('a');
newAnchorNovos.href = "/autoforce-ford/novos";
newAnchorNovos.classList.add("card-collapse-deep__title");
newAnchorNovos.innerHTML = 'Novos';
newItemNovos.appendChild(newAnchorNovos);
newList.appendChild(newItemNovos);

// Novo item 'Seminovos'
const newItemSemiNovos = document.createElement('li');
const newAnchorSemiNovos = document.createElement('a');
newAnchorSemiNovos.href = "/autoforce-ford/seminovos";
newAnchorSemiNovos.classList.add("card-collapse-deep__title");
newAnchorSemiNovos.innerHTML = 'Seminovos';
newItemSemiNovos.appendChild(newAnchorSemiNovos);
newList.appendChild(newItemSemiNovos);

devision.appendChild(newList);
itemList.appendChild(devision);
List.prepend(itemList);

const homeIcon = List.childNodes[1];
List.prepend(homeIcon);

// Esta flag sinaliza se o dropdown está ativado ou não
let flagDropdown = false; 

/* Percebi que, com essa estrutura de código, a página permitia que mais de um dropdown estivesse ativo.
Então eu criei essa função para verificar se há outro dropdown ativo e, se sim, fechá-lo.
Assim, mantive as animações e o controle dos dropdowns. */
const clickFun = (event) => {
  const flagRightElement = event.target === anchor || event.target === icon;

  if(flagRightElement) {
    if (flagDropdown) {
      anchor.setAttribute('aria-expanded', 'false');
      devision.classList.remove("show");
      itemList.classList.remove("show");
      flagDropdown = false;
    } else {
      anchor.setAttribute('aria-expanded', 'true');
      devision.classList.add("show");
      itemList.classList.add("show");
      flagDropdown = true
    }
  } else {
    anchor.setAttribute('aria-expanded', 'false');
    devision.classList.remove("show");
    itemList.classList.remove("show");
    flagDropdown = false;
  }
}

addEventListener("click", clickFun);

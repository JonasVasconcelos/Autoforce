// 1 - Encontrei o local (target) para inserir os icones
const Header = document.getElementsByTagName('header')[0];
const target = Header.firstChild.children[1].firstChild.lastChild;

// 2 - Criei uma div (container) para comportar tudo
const task = document.createElement('div');

// 3 - Criei, configurei e inseri o titulo do container
const title = document.createElement('span');
title.innerHTML = 'Redes Sociais:';
title.classList.add('header__navbar-title');
title.classList.add('header__navbar-title--label');
title.classList.add('d-flex');
title.classList.add('align-items-center');
task.appendChild(title);
target.appendChild(task);

// 4 - Criei, configurei e inseri o icone do Youtube
const anchor = document.createElement('a');
anchor.href = 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ';
anchor.target = '_blank';
const yt = document.createElement('img');
yt.src = 'https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-6-2.png';
yt.style.width = '25px';
yt.style.height = '25px';
anchor.appendChild(yt);
target.appendChild(anchor);

// 5 - Criei, configurei e inseri o icone do Instagram
const anchorInsta = document.createElement('a');
anchorInsta.href = 'https://www.instagram.com/autoforcebr/';
anchorInsta.target = '_blank';
const insta = document.createElement('img');
insta.src = 'https://cdn-icons-png.flaticon.com/512/174/174855.png';
insta.style.width = '25px';
anchorInsta.appendChild(insta);
target.appendChild(anchorInsta);

// 6 - Criei, configurei e inseri o icone do LindedIn
const anchorLinkedIn = document.createElement('a');
anchorLinkedIn.href = 'https://www.linkedin.com/company/autoforcebrasil/';
anchorLinkedIn.target = '_blank';
const linkedin = document.createElement('img');
linkedin.src = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
linkedin.style.width = '25px';
anchorLinkedIn.appendChild(linkedin);
target.appendChild(anchorLinkedIn);

<p align="center">
  <a
    href="https://site.autoforce.com/"
    target="_blank"
  >
  <img
    src="https://lh3.googleusercontent.com/y9ZEebN4W1ShFywhSd6ARc6I7xsCNtWhq5MNvK-Hx5S09so8jC8UT0mOgKLwMVklHWEAip4s6nujS_zop1mcK04XV4pZ5uzI-D72xcypHMr_FNPMjbsoIinP1_2e0DcbxkbzlIegus5ridfGiQ"
    width="200">
  </a>
</p>

<h1 align="center">Desafio Genius</h1>

# Tópicos

1. [Descrição do projeto](#descrição-do-projeto)
2. [Requisitos](#requisitos)
3. [Como rodar a aplicação](#como-rodar-a-aplicação)
4. [Linguagens, dependencias e libs utilizadas](#linguagens-dependencias-e-libs-utilizadas)
5. [Principais dificuldades encontradas](#principais-dificuldades-encontradas)
6. [Extras](#extras)
7. [Próximos passos](#proximos-passos)

## Descrição do projeto <a name="descrição-do-projeto"></a>

<p align="justify">
  Este repositório foi desenvolvido para ser avaliado no processo seletivo da vaga Suport Front End Jr na AutoForce.
  Na primeira parte do projeto foram desenvolvidos programas que alteram a DOM de páginas específicas da empresa de acordo com requisitos pré-estabelecidos. Na segunda parte do projeto foi codificada uma interface disponibilizada pela AutoForce utilizando HTML, CSS e JavaScript.
</p>

## Requisitos <a name="requisitos"></a>

> Parte I - Manipulando o DOM
 
1. Adicionar um ícone para o YouTube no header apontando para https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ.

2. Crie um novo item dropdown para o menu e o intitule `Veículos`. Os itens `Novos` e `Seminovos` devem ser realocados para esse novo dropdown. O item `Veículos` deve ser o primeiro do menu.

3. Modifique o formulário de `Estou Interessado` disponível em https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022.
<br>
Adicione os seguintes campos:
- 1 Select com as opções: `SUV`, `Senda`, `Hatch` e `Pickup`;
- 1 Textarea com placeholder `Mensagem`.

4. Crie um botão flutuante de WhatsApp. Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela, ao clicar nesse botão três números devem aparecer:
- Seminovos: +55 (11) 99999-9999;
- Serviços +55 (11) 11111-11111 e 
- Central de Vendas: +55 (11) 88888-8888). <br>
Um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp.


> Parte II - Montando Layout

1. Codifica a seguinte <a href="https://www.figma.com/file/mEuuuja11kYw9M9swY69wl/Desafio-Genius?node-id=34%3A42
">interface</a>.

2. Não há necessidade de criar um dropdown nos botões do header. Crie um hyperlink para o telefone e um para o WhatsApp.

3. Link do vídeo para a área `Conheça o BMW`: 
https://www.youtube.com/watch?v=cFyrTEYyq64


## Como rodar a aplicação <a name="#como-rodar-a-aplicação"></a>

> Parte I

1. Para cada arquivo .js, copiar todo o código e colar no console da respectiva página.

> Parte II

1. Clonar o repositório na sua máquina:

```
git clone git@github.com:JonasVasconcelos/Autoforce.git
```

2. Rodar no plugin live server do VS Code
3. Ajustar a tela pra 1440 x 2358 px 

## Linguagens, dependencias e libs utilizadas <a name="#linguagens-dependencias-e-libs-utilizadas"></a>

- [HTML5]
- [CSS3]
- [JavaScript]

## Principais dificuldades encontradas <a name="#principais-dificuldades-encontradas"></a>

> Parte I

Os requisitos `3` e `4` apresentaram inconsistências não explicadas. Para maiores detalhes, veja os scripts.

> Parte II

Não entendi para onde os hyperlinks dos botões de `LIGUE AGORA` e `WHATSAPP` deveriam apontar, pois não foi passado nenhum link e não encontrei essa informação na página ou no modelo do Figma.

Portanto, eu direcionei o hyperlink de `LIGUE AGORA` a página real de contatos da <a href = 'https://blog.autoforce.com/contato/'> Autoforce</a>. Já o hyperlink do `WHATSAPP`, eu preferi apontar para o `footer`, onde é possível encontrar outras informações.

## Extras <a name=#extras></a>

> Parte I

No requisito `1` pedia apenas o ícone do Youtube e eu adicionei os ícones das redes Instagram e LinkedIn, além de manter a estilização da página.

No requisito `2` eu consegui manter todas as animações dos dropdowns e implementei a função de checagem e validação dos dropdowns ativos.

> Parte II

Na segunda parte, era solicitado a codificação do modelo do figma e os hyperlinks de `LIGUE AGORA` e `WHATSAPP`. Eu consegui manter a estilização da página, implementei a animação do botão do `play`, criei os hyperlink para as redes sociais e para o mapa informando a localidação da matriz.

## Próximos passos <a name=#proximos-passos></a>

1. Reescrever o código usando <a href='https://pt-br.reactjs.org/'>React</a> e <a href='https://redux.js.org/'>Redux</a>.

2. Desenvolver os testes unitários para garantir a renderização e o funcionamento da página.

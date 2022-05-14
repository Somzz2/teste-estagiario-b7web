<h1 align="center">Spotify Front-End Clone</h1>


<p align="center">
    Projeto desenvolvido com a intenção de realizar um simulado de teste de emprego para a plataforma B7Web.<br/>
    Foi utilizado ReactJS e Styled-Components.
</p>
<br/><br/>
<h2 align="center"> 
	Projeto Concluído
</h2>
<br/><br/>
<h1 align="center">Questões Teóricas</h1>
<br/>
<h3>1. Qual a função do "head" no HTML?</h3>
<p>R: Referencia o cabeçalho do HTML com dados que não aparecerão no corpo da página.
</p>
<h3>2. Quando uma página é criada, ela automaticamente se adapta a todos os tipos de tela? Por que?</h3>
<p>R: Sim e não. Sim, se estivermos a utilizar o auto-complete básico do HTML5 onde o cabeçalho vem preenchido com "meta name="viewport" content="width=device-width"". Não se estivermos fazendo a mão e não incuirmos esta opção. Também podemos considerar que mesmo com o viewport pode se adaptar ao tamanho do dispositivo mas não necessariamente ficará responsivo naturalmente. O ideal é a utilização de media query para tornar responsivo de acordo com a largura.
</p>
<h3>3. O código HTML e CSS é renderizado no servidor e repassado para o navegador em forma de imagem?</h3>
<p>R: Não, ele é renderizado no próprio navegador.
</p>
<h3>4. Qual a função das tags H (h1, h2, h3, etc) no HTML?</h3>
<p>R: São as heading tags. São utilizadas, em ordem de importância, para dar destaques a determinados elementos, onde o h1 é o mais importante, muito utilizado como título, e os restantes são utilizadas normalmente como sub-títulos. São tags importantes para o SEO pois é repassada para os motores de busca como palavras-chaves.
</p>
<h3>5. O que é SEO e como funciona?</h3>
<p>R: SEO é a sigla para Search Engine Optimization ou Otimização de Motores de Busca. São diversas técnicas utilizadas para otimizar e ter um bom destaque em sites de buscadores, como por exemplo o Google e o Bing, de forma que o seu site fique entre os melhores posicionados. De acordo com as técnicas empregadas, ele induz os motores de busca o seu site como um dos resultados mais semelhantes ao pesquisado.
</p>
<h3>6. O uso de media query é obrigatório em todas as páginas?</h3>
<p>R: Não. Se o layout for pensado com a técnica de mobile-first e a página ficar responsiva naturalmente sem a utilização de media querys, não será necessário o uso do próprio.
</p>
<h3>7. Qual a diferença entre CSS Inline e CSS em um arquivo?</h3>
<p>
O CSS inline é utilizado dentro do arquivo HTML e na própria tag que quer utilizar.
O CSS em arquivo é montado um arquivo .css separado, estilizando todas as tags que queira dentro deste arquivo e depois é importado dentro da tag head do html.
</p>
<h3>8. Como criar animações no CSS? Dê um exemplo.</h3>
<p>
Para criar animações é utilizado o keyframes. Primeiro é necessário criar o estilo na classe do css. Você divide de acordo com a quantidade de keyframes que queira. Por exemplo:<br/><br/>

@keyframes classe {<br/>
    0% {<br/>
        height: 20px;<br/>
        background-color: #123;<br/>
    }<br/>
        50% {<br/>
        height: 50px;<br/>
        background-color: #456;<br/>
    }<br/>
        100% {<br/>
        height: 100px;<br/>
        background-color: #789;<br/>
    }<br/>
}
</p>
<h3>9. Qual a diferença entre class e ID no CSS?</h3>
<p>
A classe é utilizada para poder manipular um grupo de elementos enquanto a função do ID é apenas um indivíduo.
</p>
<h3>10. Quais os diferentes tipos de seletores CSS?</h3>
<p>
Temos os seletores por tag, por exemplo: h1 {}<br/>
Classe: .classe<br/>
ID: #id<br/>
Universal: *<br/>
Atributo: [atributo]
</p>
<br/><br/><br/>



## Instalação

- `npm install`

## Para rodar

- `npm start`
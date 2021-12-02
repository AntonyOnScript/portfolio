<template>
    <div class="lista projetos main">
        <h1>Aqui estão alguns dos meus <span style="text-decoration: underline var(--cor-primaria);">projetos</span>&nbsp;&nbsp;;)</h1>
        <container urlImg="https://antonyonscript.github.io/restaurant-landing-page/assets/img/teste.webp">
            <p>Um modelo de <a href="https://antonyonscript.github.io/restaurant-landing-page/" target="blank">landing page para restaurante</a> feito com HTML, CSS e Javascript</p>
        </container>
        <container urlImg="static/imgs/if.png">
            <p><a href="https://antonyonscript.github.io/instafonts/" target="blank">Instafonts.me</a> foi um site que fiz com o intuito de reuniar as principais fontes usadas no instagram, e conseguir transformar qualquer texto para elas.</p>
        </container>
        <container urlImg="static/imgs/dakhia.svg">
            <p>Participei do desenvolvimento geral, mas principalmente do frontend do site <a href="https://www.dakhia.com.br/">Dakhia</a></p>
        </container>
        <container urlImg="https://antonyonscript.github.io/Projetar.me/assets/img/logo-projetar.svg">
            <p>Landing page feita com HTML, CSS, JS, Bootstrap 5 e Ui Kit.<a href="https://antonyonscript.github.io/Projetar.me/">Link</a></p>
        </container>
        <container urlImg="static/imgs/phishing.png">
            <p>Um modelo de phishing iframe do facebook com HTML, CSS, Javascript e PHP. Aqui o <a href="https://github.com/AntonyOnScript/facebook-phishing-iframe-model" target="blank">link</a>.</p>
        </container>
        <container urlImg="static/imgs/pong.png">
            <p>Ping Pong usando o Canvas. Aqui o <a href="https://antonyonscript.github.io/ping-pong-onlyJS/" target="blank">link</a>... Cuidado com o rage :)</p>
        </container>
        <container urlImg="static/imgs/mark.jpg">
            <p>Um layout de página de homenagem. Aqui o <a href="https://antonyonscript.github.io/tribute-template/" target="blank">link</a>.</p>
        </container>
        <container urlImg="static/imgs/pp.jpg">
            <p>Essa página é um template para portfólio e foi feita inteiramente com HTML, CSS e Javascript por mim, <a href="https://antonyonscript.github.io/portfolio/" target="blank">link</a>.</p>
        </container>
        <container urlImg="static/imgs/trator.jpg">
            <p>Uma simples página com um mini blog onde você posta a imagem que quiser com a descrição que quiser <a href="https://just-a-page.000webhostapp.com/" target="blank">link</a>. Feito com intuito de exercitar PHP e SQL.</p>
        </container>
        <container urlImg="static/imgs/github.svg">
            <p>Também tenho outros projetos, templates e estudos em meu <a href="https://github.com/AntonyOnScript/" target="blank">Github</a>.</p>
        </container>
    </div>
</template>

<script>
import containerList from "../Components/containerList.vue"

export default {
    components: {
        container: containerList
    }
}
</script>

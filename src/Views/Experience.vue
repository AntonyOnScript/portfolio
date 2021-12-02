<template>
    <div class="lista projetos main">
        <h1>Here are some of my <span style="text-decoration: underline var(--cor-primaria);">projects</span>&nbsp;&nbsp;;)</h1>
        <container urlImg="https://antonyonscript.github.io/restaurant-landing-page/assets/img/teste.webp">
            <p>A <a href="https://antonyonscript.github.io/restaurant-landing-page/" target="blank">restaurant landing page</a> made with HTML, CSS and Javascript</p>
        </container>
        <container urlImg="imgs/if.png">
            <p><a href="https://antonyonscript.github.io/instafonts/" target="blank">Instafonts.me</a> was made to nest all best instagram fonts. HTML, CSS, JS and BOOTSTRAP 5.</p>
        </container>
        <container urlImg="imgs/dakhia.svg">
            <p>I've been participed the general devlopment of <a href="https://www.dakhia.com.br/">Dakhia</a>, but mainly the frontend with HTML, CSS and JS.</p>
        </container>
        <container urlImg="https://antonyonscript.github.io/Projetar.me/assets/img/logo-projetar.svg">
            <p>Landing page made with HTML, CSS, JS, Bootstrap 5 and Ui Kit.<a href="https://antonyonscript.github.io/Projetar.me/">Link</a></p>
        </container>
        <container urlImg="imgs/phishing.png">
            <p>A facebook phishing model made with HTML, CSS, Javascript and PHP. here is the <a href="https://github.com/AntonyOnScript/facebook-phishing-iframe-model" target="blank">link</a>.</p>
        </container>
        <container urlImg="imgs/pong.png">
            <p>Ping Pong with Canvas. here is the <a href="https://antonyonscript.github.io/ping-pong-onlyJS/" target="blank">link</a>... Please be caution when rage :)</p>
        </container>
        <container urlImg="imgs/mark.jpg">
            <p>A tribute page layout. Here is the <a href="https://antonyonscript.github.io/tribute-template/" target="blank">link</a>.</p>
        </container>
        <container urlImg="imgs/pp.jpg">
            <p>It was a template page for portfolios made fully by me with HTML, CSS and JS, <a href="https://antonyonscript.github.io/portfolio/" target="blank">link here</a>.</p>
        </container>
        <container urlImg="imgs/trator.jpg">
            <p>A simple page where you can post some image with a description, <a href="https://just-a-page.000webhostapp.com/" target="blank">link</a>. It was not made focusing ofrontend, but the backend with PHP and SQL.</p>
        </container>
        <container urlImg="imgs/github.svg">
            <p>I also have a <a href="https://github.com/AntonyOnScript/" target="blank">Github</a>, it has all my studies, projects and templates/boilerplates.</p>
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

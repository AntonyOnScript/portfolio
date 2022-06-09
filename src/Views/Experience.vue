<template>
    <div class="lista projetos main">
        <h1><span style="text-decoration: underline var(--cor-primaria);">Companies</span> that i've worked for!</h1>
        <container urlImg="imgs/pandaMark.svg">
            <p><a href="https://pandavideo.com.br/" target="blank">Panda Video</a> (2022 - Today) - A Vimeo concurrent, here i've worked with Vue.js, Vuetify, Docker and Node.js with AWS Api Gateway.</p>
        </container>
        <container urlImg="imgs/evolker.png">
            <p><a href="https://evolker.com.br/" target="blank">Evolker</a> (2021 - 2022) - Is a brazilian web agency where i've worked with a lot of technologies, such as Vue.js, PHP (with and without Laravel), Javascript, Node.js, Wordpress.</p>
        </container>
            <h1>Here are some of my <span style="text-decoration: underline var(--cor-primaria);">projects</span>&nbsp;&nbsp;;)</h1>
        <container urlImg="imgs/see-dogs.png">
            <p><a href="https://see-dogs.herokuapp.com/" target="blank">Random dogs</a> was made to show you all dogs breeds with Vue.js.</p>
        </container>
        <container urlImg="imgs/if.png">
            <p><a href="https://antonyonscript.github.io/instafonts/" target="blank">Instafonts.me</a> was made to nest all best instagram fonts. HTML, CSS, JS and BOOTSTRAP 5.</p>
        </container>
        <container urlImg="imgs/dakhia.svg">
            <p>I've been participed the general devlopment of <a href="https://www.dakhia.com.br/" target="_blank">Dakhia</a>, but mainly the frontend with HTML, CSS and JS.</p>
        </container>
        <container urlImg="imgs/dracko.png">
            <p><a href="https://antonyonscript.github.io/dracko-template/" target="blank">Dracko</a> was a template made by me to put my HTML, CSS and JS expertise in practice, but mainly to help my friend André, teaching him how git works!</p>
        </container>
        <container urlImg="https://antonyonscript.github.io/Projetar.me/assets/img/logo-projetar.svg">
            <p>Landing page made with HTML, CSS, JS, Bootstrap 5 and Ui Kit.<a href="https://antonyonscript.github.io/Projetar.me/">Link</a></p>
        </container>
         <container urlImg="https://antonyonscript.github.io/restaurant-landing-page/assets/img/teste.webp">
            <p>A <a href="https://antonyonscript.github.io/restaurant-landing-page/" target="blank">restaurant landing page</a> made with HTML, CSS and Javascript</p>
        </container>
        <container urlImg="imgs/phishing.png">
            <p>A facebook phishing model made with HTML, CSS, Javascript and PHP. here is the <a href="https://github.com/AntonyOnScript/facebook-phishing-iframe-model" target="blank">link</a>.</p>
        </container>
        <container urlImg="imgs/catch-the-point.png">
            <p>Web socket based game. here is the <a href="https://gamedotant.herokuapp.com/" target="blank">link</a></p>
        </container>
        <container urlImg="imgs/pong.png">
            <p>Ping Pong with Canvas. here is the <a href="https://antonyonscript.github.io/ping-pong-onlyJS/" target="blank">link</a>... Please be careful with rage :)</p>
        </container>
        <container urlImg="imgs/mark.jpg">
            <p>A tribute page layout. Here is the <a href="https://antonyonscript.github.io/tribute-template/" target="blank">link</a>.</p>
        </container>
        <container urlImg="imgs/pp.jpg">
            <p>It was a template page for portfolios made fully by me with HTML, CSS and JS, <a href="https://antonyonscript.github.io/portfolio/" target="blank">link here</a>.</p>
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

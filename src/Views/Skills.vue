<template>
    <div class="lista habilidades main">
        <h1>Here are some of my <span style="text-decoration: underline var(--cor-primaria);">skills</span>&nbsp;&nbsp;;)</h1>
        <container urlImg="imgs/html-5.svg" aClass="habilidade">
            <p>Semantic HTML5!</p>
        </container>
        <container urlImg="imgs/css.svg" aClass="habilidade">
            <p>CSS 3 from its base to its most useful techniques such as Flexbox and Grid!</p>
        </container>
        <container urlImg="imgs/javascript.svg" aClass="habilidade">
            <p>Javascript/Ecmascript 6 and its principles, oriented object programming, DOM handling and Canvas!</p>
        </container>
        <container urlImg="imgs/vue.svg" aClass="habilidade">
            <p>Vue.js ecosystem (vue-cli, Vite, Vue Router, Vuex, Pinia, Vuetify...)!</p>
        </container>
        <container urlImg="imgs/docker.svg" aClass="habilidade">
            <p>Docker work environment and images development!</p>
        </container>
        <container urlImg="imgs/github.svg" aClass="habilidade">
            <p>Main Git/Github functions!</p>
        </container>
        <container urlImg="imgs/php.png" aClass="habilidade">
            <p>PHP 7 with best practices and Database handling!</p>
        </container>
        <container urlImg="imgs/bootstrap.svg" aClass="habilidade">
            <p>Knowledge and experience with Bootstrap 5 for fast projects!</p>
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

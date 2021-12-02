<template>
    <div class="lista habilidades main">
        <h1>Aqui estão algumas das minhas <span style="text-decoration: underline var(--cor-primaria);">habilidades</span>&nbsp;&nbsp;;)</h1>
        <container urlImg="static/imgs/html-5.svg" aClass="habilidade">
            <p>HTML 5 e suas melhores práticas de semântica!</p>
        </container>
        <container urlImg="static/imgs/css.svg" aClass="habilidade">
            <p>CSS 3 da sua base as técnicas mais usadas como Flexbox, Grid e Clip-path!</p>
        </container>
        <container urlImg="static/imgs/javascript.svg" aClass="habilidade">
            <p>Javascript/Ecmascript 2018 e seus principios, orientação a objetos, manipulação do DOM e Canvas!</p>
        </container>
        <container urlImg="static/imgs/github.svg" aClass="habilidade">
            <p>Principais funções do Git/Github!</p>
        </container>
        <container urlImg="static/imgs/php.png" aClass="habilidade">
            <p>PHP 7 com suas boas praticas e manipulação de banco de dados!</p>
        </container>
        <container urlImg="static/imgs/bootstrap.svg" aClass="habilidade">
            <p>Conhecimento e experiência com Bootstrap 5 para projetos rápidos!</p>
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

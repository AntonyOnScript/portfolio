<template>
    <div class="cont">
        <header>
            <ul class="menu">
                <li><router-link :to="{ name: 'home' }"><a>Principal</a></router-link></li>
                <li><router-link :to="{ name: 'skills' }"><a>Habilidades</a></router-link></li>
                <li><router-link :to="{ name: 'experience' }"><a>Projetos</a></router-link></li>
            </ul>
        </header>
        <section class="container-conteudo">
            <transition name="transition">
                <router-view></router-view>
            </transition>
        </section>
        <footer>
            <a href="https://github.com/AntonyOnScript/" target="blank"><i class="fab fa-github" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/antony.mp4s" target="blank"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/antony.mp4" target="blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
        </footer>
    </div>
</template>

<script>
import routes from "./routes"

export default {
    data() {
        return {
            routes: routes
        }
    }
}
</script>

<style>
    .transition-enter-active {
        animation: transition 1s;
    }

    @keyframes transition {
        from {
            clip-path: circle(0% at 50% 50%);
        }
        to {
            clip-path: circle(100% at 50% 50%);
        }
    }
</style>

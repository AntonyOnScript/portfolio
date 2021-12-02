import Home from "./Views/Home.vue"
import Skills from "./Views/Skills.vue"
import Experience from "./Views/Experience.vue"

export default [
    {
        path: '', component: Home, name: "home", tag: "Home"
    },
    {
        path: '/skills', component: Skills, name: "skills", tag: "Skills"
    },
    {
        path: '/experience', component: Experience, name: "experience", tag: "Projects"
    },
]

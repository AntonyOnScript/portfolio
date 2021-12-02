<template>
    <div class="container-lista">
        <img :src="urlImg" alt="" :class="classContainer">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    props: ["urlImg", "aClass"],
    computed: {
        classContainer() {
            if(this.aClass) {
                return this.aClass
            } else {
                return "projeto"
            }
        }
    }
}
</script>

<style scoped>
    .container-lista {
        display: flex;
        align-items: center;
    }

    .projeto {
        width:200px;
        height:200px;
        margin-right: 40px;
        border-radius: 100%;
    }
</style>

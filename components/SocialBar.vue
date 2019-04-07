<template>
    <div class="social-bar">
        <a
            href="https://github.com/narajaon"
            rel="noopener noreferrer"
            :style="{ 'color': '#' + theme.particles }"
            class="fab fa-github"/>
        <a
            href="#"
            :style="{ 'color': '#' + theme.particles }"
            class="fab fa-linkedin"/>
        <a
            href="#"
            :style="{ 'color': '#' + theme.particles }"
            class="fab fa-twitter"/>
    </div>
</template>

<script>
export default {
    computed: {
        theme() {
            return this.$store.getters['projects/currentTheme']();
        },
    },
}
</script>


<style scoped>
.social-bar {
    display: flex;
    justify-content: center;
}

a {
    padding: 3px 8px;
    text-decoration: none;
    color: rgb(142, 16, 214);
    transition: color 1s;
}
</style>
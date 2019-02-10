<template>
    <div class="navigation-bar">
        <nuxt-link class="nav-button" to="/">Home</nuxt-link>
        <nuxt-link class="nav-button" to="/about">About</nuxt-link>
        <nuxt-link class="nav-button" to="/contact">Contact</nuxt-link>
    </div>
</template>

<style scoped>
.navigation-bar {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #f3efef;
    box-shadow: 0 5px 24px -15px grey;
    height: 40px;
}

.nav-button {
    padding: 10px;
    font-size: 18px;
}

a {
    text-decoration: none;
}

.nav-button:hover {
    cursor: pointer;
    border-bottom: 2px solid lightgrey;
}
</style>

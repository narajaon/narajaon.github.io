<template>
    <div class="navigation-bar">
        <nuxt-link active-class="active-link" class="nav-button" to="/" exact>Home</nuxt-link>
        <nuxt-link active-class="active-link" class="nav-button" to="/about">About</nuxt-link>
        <div
            class="nav-button contact-button"
            @click="openContactMeDialog()"
        >Contact me</div>
    </div>
</template>

<script>
export default {
    methods: {
        openContactMeDialog() {
            this.$store.commit('dialogs/setProps', { name: 'contactMe', visibility: true });
        }
    }
}
</script>


<style scoped>
.navigation-bar {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #f3efef;
    box-shadow: 0 5px 24px -15px grey;
}

.nav-button {
    padding: 10px;
    margin-left: 10px;
}

a {
    text-decoration: none;
    color: rgb(142, 16, 214);
}

.nav-button:hover {
    cursor: pointer;
}

.contact-button {
    background-color: rgb(142, 16, 214);
    color: white;
}

.active-link {
    border-bottom: 2px solid lightgrey;
}
</style>

<template>
  <div class="navigation-bar">
    <nuxt-link
      exact
      to="/"
      active-class="active-link"
      :style="{ 'color': '#' + theme.particles }"
      class="nav-button"
    >
      Home
    </nuxt-link>
    <nuxt-link
      to="/about"
      active-class="active-link"
      :style="{ 'color': '#' + theme.particles }"
      class="nav-button"
    >
      About
    </nuxt-link>
    <!-- <nuxt-link
            to="lab"
            active-class="active-link"
            :style="{ 'color': '#' + theme.particles }"
            class="nav-button lab"
        >Lab</nuxt-link> -->
    <div
      :style="{ 'background-color': '#' + theme.particles, 'color': '#' + theme.bg}"
      class="nav-button contact-button"
      @click="openContactMeDialog()"
    >
      Contact me
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.getters['projects/currentTheme']();
    },
  },
  methods: {
    openContactMeDialog() {
      this.$store.commit('dialogs/setProps', { name: 'contactMe', visibility: true });
    },
  },
}
</script>


<style scoped>
.navigation-bar {
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 8px 15px -15px grey;
    width: 100%;
}

.nav-button {
    padding: 10px;
    margin-left: 10px;
    transition: color 1s;
}

a {
    text-decoration: none;
}

.nav-button:hover {
    cursor: pointer;
}

.contact-button {
    transition: all 1s;
    color: white;
    font-size: bold;
}

.active-link {
    border-bottom: 2px solid lightgrey;
}
</style>

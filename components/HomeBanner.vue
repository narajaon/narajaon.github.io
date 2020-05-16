<script>
export default {
  computed: {
    theme() {
      return this.$store.getters['projects/currentTheme']();
    },
  }
}
</script>

<template>
  <div class="home-banner">
    <h5
      :style="{ 'color': '#' + theme.particles }"
      class="banner-owner"
    >
      narajaon's
    </h5>
    <h1 class="banner-title">
      Website Portfolio
    </h1>
    <p class="banner-content">
      Hello stranger, welcome to my portfolio ! Below are some of the most noteworthy projects I did so enjoy.
    </p>
  </div>
</template>

<style scoped>
.home-banner {
    padding-bottom: 30px;
}

.banner-content {
    color: #747272;
}

.banner-owner {
    transition: color 1s;
}
</style>

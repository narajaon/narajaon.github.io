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
      Website Portfolio<p class="beta">
        beta
      </p>
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

.beta {
    position: absolute;
    top: 54px;
    left: 253px;
    font-size: 16px;
    color: red;
    border: 1px solid red;
    padding: 3px;
    font-weight: initial;
}
</style>

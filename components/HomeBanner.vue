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
      Fullstack generalist 👊 High and low level programming enthusiast 🙏
      Creative and passionate 🤘 Studied at <strong>42 Paris 🚀</strong>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.getters['projects/currentTheme']();
    },
  }
}
</script>


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

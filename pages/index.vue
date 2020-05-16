<script>
import HomeBanner from '~/components/HomeBanner.vue';
import ProjectGrid from '~/components/ProjectGrid.vue';

export default {
  components: {
    HomeBanner,
    ProjectGrid,
  },
}
</script>

<template>
  <div
    class="home-page"
  >
    <home-banner />
    <project-grid />
  </div>
</template>

<style scoped>
.home-page {
}

.test {
  width: 100px;
  height: 100px;
}
</style>

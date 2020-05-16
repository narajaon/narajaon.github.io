<template>
  <div
    class="home-page"
  >
    <home-banner />
    <project-grid />
  </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';
import HomeBanner from '~/components/HomeBanner.vue';
import ProjectGrid from '~/components/ProjectGrid.vue';

export default {
  components: {
    ImageCard,
    HomeBanner,
    ProjectGrid,
  },
}
</script>

<style scoped>
.home-page {
}
</style>
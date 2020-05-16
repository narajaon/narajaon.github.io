<script>
import Partiles from 'particles.js'

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    projects() {
      return this.$store.getters['projects/allProjects']();
    },
    activeBanner() {
      return this.$store.getters['projects/activeBanner']();
    },
  },
  mounted() {
    this.isLoading = true;
    this.projects.forEach((element, index) => {
      this.toggleBannerVisibility(index, true)
    });
    this.isLoading = false;
  },
  destroyed() {
    this.projects.forEach((element, index) => {
      this.toggleBannerVisibility(index, false);
    });
  },
  methods: {
    trackBannerState(index, theme) {
      this.switchParticlesColor(theme);
      this.$store.commit('projects/bannerHoverState', { hoveredBannerIndex: index })
    },
    toggleBannerVisibility(index, visibility) {
      setTimeout(() => {
        this.$store.commit('projects/bannerVisibility', { index, show: visibility })
      }, index * 500);
    },
    isHovered(index) {
      return this.activeBanner === index;
    },
    hexToRgb(hex) {
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    },
    switchParticlesColor(color) {
      const rgbFromHex = this.hexToRgb(color);
      pJSDom[0].pJS.particles.array.forEach((elem, i) => {
        elem.color.value = `#${color}`;
        elem.color.rgb = rgbFromHex;
      });
    },
  }
}
</script>

<template>
  <div class="wrapper">
    <div
      v-for="(project, index) in projects"
      :key="project.title"
      class="project"
    >
      <transition
        name="transform"
      >
        <div
          v-show="project.show"
          class="banner-container"
          @mouseenter="trackBannerState(index, project.theme.particles)"
          @mouseleave="trackBannerState(null, 'ffffff')"
        >
          <transition
            name="fade"
            mode="in-out"
          >
            <div
              v-if="isHovered(index)"
              class="overlay"
            >
              <span class="description">{{ project.title }} - {{ project.description }}</span>
            </div>
          </transition>
          <img
            :src="project.src"
            alt="Project image"
            class="banner"
          >
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.description {
    color: #ffffff;
    font-weight: bold;
}

.wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
}

.project {
    width: 100%;
}

.banner-container {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
}

.banner-container:hover {
    cursor: pointer;
    border: none;
}

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000000de;
    position: absolute;
    box-sizing: border-box;
}

.banner {
    width: 100%;
}
</style>

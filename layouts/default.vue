<template>
  <div 
    class="default-layout"
    :style="defaultLayoutBG"
  >
    <div
      id="particlejs-container"
      class="particles"
    />
    <div
      class="page-wrapper"
    >
      <navigation-bar />
      <nuxt class="app" />
      <social-bar />
    </div>
    <transition
      name="fade"
    >
      <dialog-container v-if="contactMeDialog.isVisible">
        <contact-me-card slot="body" />
      </dialog-container>
    </transition>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';
import SocialBar from '~/components/SocialBar';
import ContactMeCard from '~/components/ContactMeCard';
import DialogContainer from '~/components/DialogContainer';
import Partiles from 'particles.js'
import particlesConf from '~/assets/particles.json'
import Vue from "vue";

export default {
  components: {
    NavigationBar,
    SocialBar,
    DialogContainer,
    ContactMeCard,
  },
  data() {
    return {
      conf: particlesConf,
    };
  },
  computed: {
    contactMeDialog() {
      return this.$store.getters['dialogs/entity']('contactMe');
    },
    defaultLayoutBG() {
      return {
        'background-color': `#${this.$store.getters['projects/currentTheme']().bg}`,
      };
    },
  },
  mounted () {
    this.initParticleJS();
  },
  methods: {
    initParticleJS () {
      particlesJS('particlejs-container', this.conf);
    },
  },
}
</script>

<style scoped>
.particles {
    position: fixed;
    height: 100vh;
    width: 100vw;
}

.page-wrapper {
    position: relative;
}

.app {
    margin: 5px;
}

.default-layout {
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    transition: background-color 1s;
}

@media (min-width: 768px) {
    .page-wrapper {
        max-width: 768px;
    }
}

.social-bar {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>

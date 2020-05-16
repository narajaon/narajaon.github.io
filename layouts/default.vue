<script>
import NavigationBar from '~/components/NavigationBar';
import SocialBar from '~/components/SocialBar';
import ContactMeCard from '~/components/ContactMeCard';
import ProjectBanner from '~/components/ProjectBanner';
import DialogContainer from '~/components/DialogContainer';
import particlesConf from '~/assets/particles.json'

export default {
  components: {
    NavigationBar,
    SocialBar,
    DialogContainer,
    ContactMeCard,
    ProjectBanner
  },
  data() {
    return {
      conf: particlesConf,
      dialogs: {
        ContactMeCard,
        ProjectBanner,
      }
    };
  },
  computed: {
    dialogIsOpen() {
      const dialogs = this.$store.getters['dialogs/all'];
      return Object.keys(dialogs).find(d => dialogs[d].isVisible);
    },
    defaultLayoutBG() {
      return {
        'background-color': `#${this.$store.getters['projects/currentTheme']().bg}`,
      };
    },
    CurrentDialog() {
      return this.dialogs[this.dialogIsOpen];
    }
  },
  mounted() {
    this.initParticleJS();
  },
  methods: {
    initParticleJS () {
      particlesJS('particlejs-container', this.conf);
    },
  },
}
</script>

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
      <dialog-container
        v-if="dialogIsOpen"
        :name="dialogIsOpen"
      >
        <component
          :is="CurrentDialog"
          slot="body"
        />
      </dialog-container>
    </transition>
  </div>
</template>

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

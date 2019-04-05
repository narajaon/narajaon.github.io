<template>
    <div class="default-layout">
        <vue-particles
            color="#b4b6ba"
            :particleOpacity="0.7"
            :particlesNumber="10"
            shapeType="edge"
            :particleSize="4"
            linesColor="#b4b6ba"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            :move="true"
            direction="top-right"
            class="particles"
        />
        <div
            class="page-wrapper"
        >
            <navigation-bar/>
            <nuxt class="app"/>
            <social-bar/>
        </div>
        <transition
            name="fade"
        >
            <dialog-container v-if="contactMeDialog.isVisible">
                <contact-me-card slot="body"/>
            </dialog-container>
        </transition>
    </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';
import SocialBar from '~/components/SocialBar';
import ContactMeCard from '~/components/ContactMeCard';
import DialogContainer from '~/components/DialogContainer';

export default {
    components: {
        NavigationBar,
        SocialBar,
        DialogContainer,
        ContactMeCard,
    },
    computed: {
        contactMeDialog() {
            return this.$store.getters['dialogs/entity']('contactMe');
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

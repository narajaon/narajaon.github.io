<template>
    <div class="default-layout">
        <div
            class="page-wrapper"
        >
            <navigation-bar/>
            <nuxt/>
            <social-bar/>
        </div>
        <transition
            name="fade"
        >
            <dialog-container v-if="contactMeDialog.isVisible">
                <contact-me-card slot="content"/>
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
.default-layout {
    display: flex;
    justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.social-bar {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>

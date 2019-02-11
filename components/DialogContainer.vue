<template>
    <div class="dialog-wrapper">
        <div
            @click="closeDialog()"
            class="dialog-backdrop"
        />
        <div class="content-wrapper">
            <slot name="content"/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeDialog() {
            this.$store.commit('dialogs/setProps', {
                name: 'contactMe',
                visibility: false,
            });
        }
    }
}
</script>

<style scoped>
.dialog-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.dialog-backdrop {
    background-color: rgb(29, 29, 29);
    opacity: 0.8;
    width: 100%;
    height: 100%;
}

.content-wrapper {
    position: absolute;
    top: 20vh;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>

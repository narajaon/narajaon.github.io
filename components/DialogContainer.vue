<template>
    <div
        class="dialog-wrapper"
    >
        <div
            @click="closeDialog()"
            class="dialog-backdrop"
        />
        <div
            class="content-wrapper">
            <div class="dialog-header">
                <slot name="header"/>
            </div>
            <div class="dialog-body">
                <slot name="body"/>
            </div>
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
        },
    },
}
</script>

<style scoped>
.dialog-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.dialog-header, .dialog-body {
    padding: 15px 30px;
}

.dialog-backdrop {
    position: fixed;
    background-color: rgb(29, 29, 29);
    opacity: 0.8;
    width: 100%;
    height: 100%;
}

.content-wrapper {
    position: absolute;
    background-color: white;
    top: 20vh;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>

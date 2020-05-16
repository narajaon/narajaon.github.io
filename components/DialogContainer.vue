<script>
export default {
  props: ['name'],
  methods: {
    closeDialog() {
      this.$store.commit('dialogs/setProps', {
        name: this.name,
        visibility: false,
      });
    },
  },
}
</script>

<template>
  <div
    class="dialog-wrapper"
  >
    <div
      class="dialog-backdrop"
      @click="closeDialog()"
    />
    <div
      class="content-wrapper"
    >
      <div class="dialog-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
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

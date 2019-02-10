<template>
    <div
        class="image-container"
        @mouseenter="changeState(true)"
        @mouseleave="changeState(false)"
    >
        <transition
            name="fade"
        >
            <div
                v-if="isHovered"
                class="hover-overlay"
            >
            </div>
        </transition>
        <transition
            name="replace"
            mode="out-in"
        >
            <img
                :key="randomValue"
                class="image"
                :src="`https://loremflickr.com/350/350?lock=${randomValue}`"
                alt="card image"
            />
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        reloadTime: {
            type: Number,
            default: 5000,
        }
    },
    data() {
        return {
            isHovered: false,
            intervalId: 0,
            randomValue: 0,
        }
    },
    methods: {
        changeState(state) {
            this.isHovered = state;
        },
    },
    created() {
        this.intervalId = setInterval(() => {
            const max = 3000;
            const min = 1;
            this.randomValue = Math.floor(Math.random() * (max - min)) + min;
        }, this.reloadTime);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }
}
</script>

<style scoped>
.hover-overlay {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: grey;
    opacity: 0.5;
}

.image-container {
    width: 200px;
    height: 200px;
}

.image {
    height: 100%;
}

.replace-enter-active, .replace-leave-active {
  transition: all 1s;
}

.replace-enter, .replace-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


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
            />
        </transition>

        <div
            class="image"
        >
            <transition
                name="replace"
                mode="out-in"
            >
                <i
                    v-if="tileContent !== 'empty'"
                    :class="currentIcon"
                />
                <!-- <img
                    :key="randomValue"
                    class="image"
                    :src="`https://loremflickr.com/350/350?lock=${randomValue}`"
                    alt="card image"
                /> -->
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // reloadTime: {
        //     type: Number,
        //     default: 5000,
        // }
        tileIndex: {
            required: true,
            type: Number,
        }
    },
    data() {
        return {
            isHovered: false,
            intervalId: 0,
            randomValue: 0,
        }
    },
    computed: {
        tileContent() {
            return this.$store.getters['grid/tileContent'](this.tileIndex);
        },
        currentTurn() {
            return this.$store.getters['grid/entity']('currentTurn');
        },
        currentIcon() {
            return {
                'far fa-circle': (this.tileContent === 'player'),
                'fas fa-times': (this.tileContent === 'IA'),
            };
        },
    },
    methods: {
        changeState(state) {
            this.isHovered = state;
        },
    },
    created() {
        // this.intervalId = setInterval(() => {
        //     const max = 3000;
        //     const min = 1;
        //     this.randomValue = Math.floor(Math.random() * (max - min)) + min;
        // }, this.reloadTime);
    },
    beforeDestroy() {
        // clearInterval(this.intervalId);
    }
}
</script>

<style scoped>
.hover-overlay {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid rgb(142, 16, 214);
    opacity: 0.5;
}

.image-container {
    width: 200px;
    height: 200px;
}

.image {
    height: 100%;
    width: 100%;
    font-size: 150px;
    text-align: center;
    color: rgb(184, 179, 179);
    border: 1px solid lightgrey;
    line-height: 200px;
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


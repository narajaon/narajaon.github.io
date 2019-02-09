<template>
    <div
        @click="animateGrid()"
        class="page-container"
    >
        <transition-group
            class="card-grid"
            name="spark"
            tag="div"
        >
            <image-card v-if="toDisplay" class="top-left" key="top-left"/>
            <image-card v-if="toDisplay" class="top-right" key="top-right"/>
            <image-card v-if="toDisplay" class="bottom-left" key="bottom-left"/>
            <image-card v-if="toDisplay" class="bottom-right" key="bottom-right"/>
        </transition-group>
    </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue'
export default {
    data() {
        return {
            toDisplay: true,
        };
    },
    components: {
        ImageCard,
    },
    methods: {
        animateGrid() {
            this.toDisplay = !this.toDisplay;
        }
    }
}
</script>

<style scoped>
.card-grid {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: auto;
}

.page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.spark-enter-active, .spark-leave-active {
  transition: all 0.5s;
}

.spark-enter, .spark-leave-to {
  opacity: 0;
}

.spark-enter.top-left, .spark-leave-to.top-left {
  transform: translateX(-50px);
}

.spark-enter.top-right, .spark-leave-to.top-right {
  transform: translateY(-50px);
}

.spark-enter.bottom-right, .spark-leave-to.bottom-right {
  transform: translateX(50px);
}

.spark-enter.bottom-left, .spark-leave-to.bottom-left {
  transform: translateY(50px);
}
</style>


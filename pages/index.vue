<template>
    <div
        class="page-container"
        @click="triggerAnimation()"
    >
        <spark-transition
            :toDisplay="displayGrid"
        >
            <image-card slot="top-left"></image-card>
            <image-card slot="top-right"></image-card>
            <image-card slot="bottom-left"></image-card>
            <image-card slot="bottom-right"></image-card>
        </spark-transition>
    </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';
import SparkTransition from '~/components/SparkTransition.vue';
export default {
    components: {
        ImageCard,
        SparkTransition,
    },
    data() {
        return {
            displayGrid: true,
        }
    },
    methods: {
        triggerAnimation() {
            this.displayGrid = !this.displayGrid;
        }
    }
}
</script>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>


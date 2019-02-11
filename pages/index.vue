<template>
    <div
        class="page-container"
        @click="triggerAnimation()"
    >
        <home-banner/>
        <spark-transition
            :toDisplay="reloadTimes"
        />
    </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';
import SparkTransition from '~/components/SparkTransition.vue';
import HomeBanner from '~/components/HomeBanner.vue';

export default {
    components: {
        ImageCard,
        SparkTransition,
        HomeBanner,
    },
    data() {
        return {
            reloadTimes: [ 4500, 5000, 5500, 6000, 7000, 6500, 3500, 4500, 5000 ],
        }
    },
    methods: {
        triggerAnimation() {
            this.displayGrid = !this.displayGrid;
        }
    }
}
</script>

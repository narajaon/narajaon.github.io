<template>
    <div
        class="page-container"
        @click="triggerAnimation()"
    >
        <home-banner/>
        <spark-transition
            :toDisplay="homeGrid"
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
            homeGrid: [
                'empty', 'empty', 'empty',
                'empty', 'empty', 'empty',
                'empty', 'empty', 'empty',
            ]
        }
    },
    methods: {
        triggerAnimation() {
            this.displayGrid = !this.displayGrid;
        }
    }
}
</script>

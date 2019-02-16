<template>
    <div
        class="page-container"
    >
        <home-banner/>
        <spark-transition/>
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
}
</script>

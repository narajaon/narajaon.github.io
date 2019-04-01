<template>
    <div
        class="page-container"
    >
        <home-banner/>
        <!-- <tic-tac-grid/> -->
        <project-grid/>
    </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';
import HomeBanner from '~/components/HomeBanner.vue';
// import TicTacGrid from '~/components/TicTacGrid.vue';
import ProjectGrid from '~/components/ProjectGrid.vue';

export default {
    components: {
        ImageCard,
        HomeBanner,
        // TicTacGrid,
        ProjectGrid,
    },
}
</script>

<style scoped>
</style>


<template>
    <div
        class="page-container"
    >
        <home-banner/>
        <tic-tac-grid/>
    </div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';
import TicTacGrid from '~/components/TicTacGrid.vue';
import HomeBanner from '~/components/HomeBanner.vue';

export default {
    components: {
        ImageCard,
        TicTacGrid,
        HomeBanner,
    },
}
</script>

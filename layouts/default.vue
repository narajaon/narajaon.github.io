<template>
    <div class="default-layout">
        <navigation-bar/>
        <nuxt/>
    </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';

export default {
    components: {
        NavigationBar,
    }    
}
</script>


<style scoped>
.default-layout {
    height: 100vh;
    width: 100vw;
}
</style>

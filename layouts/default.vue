<template>
    <div class="default-layout">
        <div
            class="page-wrapper"
        >
            <navigation-bar/>
            <nuxt/>
            <social-bar/>
        </div>
    </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';
import SocialBar from '~/components/SocialBar';

export default {
    components: {
        NavigationBar,
        SocialBar,
    }    
}
</script>

<style>
@font-face {
    font-family: 'Chapaza';
    src: url('~assets/fonts/Chapaza.ttf');
}

* {
    margin: 0;
    font-family: 'Chapaza', Arial, Helvetica, sans-serif;
    color: rgb(75, 73, 73);
}

html {
    min-height: 100vh;
    background-color: #f7f7f7;
}

.default-layout {
    display: flex;
    justify-content: center;
}
</style>

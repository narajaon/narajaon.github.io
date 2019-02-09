<template>
    <div
        class="image-container"
    >
        <img
            class="image"
            src="https://cataas.com/cat"
            alt="card image"
        />
    </div>
</template>

<script>
export default {
    props: {
        imageId: {
            default: 151,
            type: Number,
        }
    }
}
</script>

<style scoped>
.image-container {
    width: 200px;
    height: 200px;
}

.image {
    width: 100%;
    height: 100%;
}
</style>


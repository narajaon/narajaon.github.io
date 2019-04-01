<template>
    <div
        class="stack-list">
        <div
            v-for="stack in stacks"
            :key="stack.name"
            class="stack"
        >
                <img :src="stack.image" :alt="`${stack.name} icon`"/>
                <span>{{ stack.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stacks: [
                {
                    name: 'vue.js',
                    image: '/stack/vue.png',
                },
                {
                    name: 'node.js',
                    image: '/stack/node.png',
                },
                {
                    name: 'swift',
                    image: '/stack/swift.png',
                },
                {
                    name: 'C',
                    image: '/stack/c.png',
                },
                {
                    name: 'C++',
                    image: '/stack/cpp.png',
                },
                {
                    name: 'python',
                    image: '/stack/python.png',
                },
            ]
        }
    }
}
</script>

<style scoped>
.stack {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    padding: 3px;
    color: rgb(134, 132, 132);
    font-weight: bold;
}

.stack-list {
    display: flex;
    flex-wrap: wrap;
    /* overflow: scroll; */
    /* max-width: 100vw; */
}

span {
    text-align: center;
}

img {
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
    filter: grayscale(50%);
}
</style>

<template>
    <div
        class="stack-list">
        <h3 class="subtitle">WEB STACK</h3>
        <div
            v-for="stack in stackList"
            :key="stack.name"
            class="stack"
        >
            <img
                :src="stack.image"
                :alt="`${stack.name} icon`"
                class="skill-icon"
            />
            <div
            >
                <div
                    class="stack-name"
                    :class="stack.name"
                >{{ stack.name }}</div>
                <div
                    class="skill-wrapper"
                >
                    <div
                        v-for="tag in stack.tags"
                        :key="tag"
                        class="skill"
                    >{{ tag }}</div>
                </div>
            </div>
        </div>
        <h3 class="subtitle">OTHER SKILLS</h3>
        <div style="display: flex">
            <div
                v-for="other in otherSkills"
                :key="other.name"
                class="other-skill"
            >
                <img
                    :src="other.image"
                    :alt="`${other.name} icon`"
                    class="other-skill-icon"
                />
                <div style="text-align: center">{{other.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stackList: [
                {
                    name: 'Vue.js',
                    image: '/stack/vue.png',
                    tags: ['Nuxt state/store', 'elementUI', 'vue reactivity', 'vue animations']
                },
                {
                    name: 'Angular',
                    image: '/stack/angular.png',
                    tags: ['Typescript', 'Angular Material', 'Angular CLI']
                },
                {
                    name: 'Node.js',
                    image: '/stack/node.png',
                    tags: ['Event-loop', 'socket.io', 'routing', 'mongoDB'],
                },
                {
                    name: 'JavaScript',
                    image: '/stack/javascript.png',
                    tags: ['JS patterns', 'ES6+ syntax', 'DOM manipulation'],
                },
            ],
            otherSkills: [
                { name: 'C', image: '/stack/c.png'},
                { name: 'Swift', image: '/stack/swift.png'},
                { name: 'C++', image: '/stack/cpp.png'},
                { name: 'Python', image: '/stack/python.png'},
                // { name: 'BASH', src: ''},
            ],
        }
    }
}
</script>

<style scoped>
.subtitle {
    margin-top: 20px; 
    margin-bottom: 10px; 
}

.stack {
    display: flex;
    margin-bottom: 15px;
}

.stack-name {
    /* text-transform: uppercase; */
}

.stack-list {
    margin: 10px 0;
}

.skill-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.skill {
    color: #747272;
    padding: 2px 5px;
    border: 1px solid #747272;
    border-radius: 2px;
    white-space: nowrap;
    margin: 3px 0;
    margin-right: 6px;
    font-size: 12px;
}

span {
    text-align: center;
}

.skill-icon {
    height: 50px;
    width: 50px;
    margin-right: 10px;
    filter: grayscale(40%);
}

.other-skill {
    margin-right: 10px;
}

.other-skill-icon {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    filter: grayscale(40%);
}
</style>

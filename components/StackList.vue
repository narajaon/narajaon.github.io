<template>
    <div
        class="stack-list">
        <div style="margin-right: 20px; width: 100%">
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
        </div>

        <div style="width: 100%">
            <h3 class="subtitle">OTHER SKILLS</h3>
            <div class="other-skill-wrapper">
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
                    <div style="text-align: center; color: #747272">{{other.name}}</div>
                </div>
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
                    name: 'Vue',
                    image: '/stack/vue.png',
                    tags: ['Nuxt - Vuex', 'elementUI', 'axios', 'Vue animations']
                },
                {
                    name: 'React',
                    image: '/stack/react.svg',
                    tags: ['Redux', 'functional components', 'thunks']
                },
                {
                    name: 'Angular',
                    image: '/stack/angular.png',
                    tags: ['Typescript', 'Angular Material', 'Angular CLI']
                },
                {
                    name: 'Node',
                    image: '/stack/node.png',
                    tags: ['socket.io', 'routing', 'mongoDB'],
                },
                {
                    name: 'JavaScript',
                    image: '/stack/javascript.png',
                    tags: ['Cypress', 'mocha', 'THREE.js', 'leaflet', 'particles.js'],
                },
            ],
            otherSkills: [
                { name: 'Swift', image: '/stack/swift.png'},
                { name: 'C', image: '/stack/c.png'},
                { name: 'Shell', image: '/stack/shell.png'},
                { name: 'C++', image: '/stack/cpp.png'},
                { name: 'Python', image: '/stack/python.png'},
                { name: 'After effect', image: '/stack/after-effect.svg.png'},
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
}

.stack-list {
    margin: 10px 0;
}

@media (min-width: 768px) {
    .stack-list {
        display: flex;
    }
}

.skill-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.skill {
    color: #747272;
    padding: 2px 5px;
    border: 1px solid #c5c5c5;
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

.other-skill-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, auto));
    grid-gap: 15px; 
}

.other-skill {
    text-align: center;
    max-width: 50px;
}

.other-skill-icon {
    height: 50px;
    width: 50px;
    filter: grayscale(40%);
}
</style>

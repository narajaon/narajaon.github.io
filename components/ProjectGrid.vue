<template>
    <div class="wrapper">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project">
            <h3 class="title">{{project.title}}</h3>
            <div
                v-if="!isLoading"
                class="banner-container"
                @mouseenter="trackBannerState(index)"
                @mouseleave="trackBannerState(null)"
            >
                <transition
                    name="fade"
                    mode="in-out"
                >
                    <div
                        v-if="isHovered(index)"
                        class="overlay"
                    >
                        <span class="description">{{project.description}}</span>
                    </div>
                </transition>
                <img
                    :src="project.src"
                    alt="Project image"
                    class="banner"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: "PROJET 1",
                    description: "DOING SOME COOL STUFF",
                    src: "",
                },
                {
                    title: "PROJET 2",
                    description: "DOING SOME AWESOME STUFF",
                    src: "",
                },
                {
                    title: "PROJET 3",
                    description: "DOING SOME AMAZING STUFF",
                    src: "",
                }
            ],
            isLoading: false,
            hoveredBanner: null,
        };
    },
    methods: {
        trackBannerState(index) {
            this.hoveredBanner = index;
        },
        isHovered(index) {
            return this.hoveredBanner === index;
        },
    },
    async mounted() {
        this.isLoading = true;
        const cats = await this.$axios.get(`https://api.thecatapi.com/v1/images/search?limit=${this.projects.length}&size=med`);
        this.projects.forEach((element, index) => {
            element.src = cats.data[index].url;
        });
        this.isLoading = false;
    }
}
</script>

<style scoped>
.title {
}

.description {
    color: #747272;
}

.wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
}

.project {
    width: 100%;
}

.banner-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
}

.banner-container:hover {
    cursor: pointer;
}

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    position: absolute;
    box-sizing: border-box;
    border: 2px solid rgb(142, 16, 214);
}

.banner {
    width: 100%;
}
</style>

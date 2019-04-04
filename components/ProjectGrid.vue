<template>
    <div class="wrapper">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project">
            <h3 class="title">{{project.title}}</h3>
            <transition
                name="transform"
            >
                <div
                    v-show="project.show"
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
                        v-if="project.src"
                        :src="project.src"
                        alt="Project image"
                        class="banner"
                    />
                </div>
            </transition>
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
                    show: false,
                },
                {
                    title: "PROJET 2",
                    description: "DOING SOME AWESOME STUFF",
                    src: "",
                    show: false,
                },
                {
                    title: "PROJET 3",
                    description: "DOING SOME AMAZING STUFF",
                    src: "",
                    show: false,
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
        showBanner(index) {
            setTimeout(() => {
                this.projects[index].show = true;
            }, index * 500);
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
            this.showBanner(index)
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
    box-sizing: border-box;
    border: 1px solid grey;
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
    border: 1px solid rgb(142, 16, 214);
}

.banner {
    width: 100%;
}
</style>

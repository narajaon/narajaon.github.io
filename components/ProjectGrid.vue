<template>
    <div class="wrapper">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project">
            <transition
                name="transform"
            >
                <div v-show="project.show">
                    <h3 class="title">{{project.title}}</h3>
                    <div
                        :class="{ 'banner-container': true }"
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
                            ref="banner"
                        />
                    </div>
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
                    title: "PROJECT 1",
                    description: "DOING SOME COOL STUFF",
                    src: "https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=HVqvfhtg",
                    show: false,
                },
                {
                    title: "PROJECT 2",
                    description: "DOING SOME AWESOME STUFF",
                    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                    show: false,
                },
                {
                    title: "PROJECT 3",
                    description: "DOING SOME AMAZING STUFF",
                    src: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                    show: false,
                }
            ],
            isLoading: false,
            hoveredBanner: null,
        };
    },
    computed: {
    },
    methods: {
        imageLoaded(index) {
            if (!this.$refs["banner"] || !this.projects[index].show) return false;
            return this.$refs["banner"][index].complete;
        },
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
        // const cats = await this.$axios.get(`https://api.thecatapi.com/v1/images/search?limit=${this.projects.length}&size=med`);
        this.projects.forEach((element, index) => {
            // element.src = cats.data[index].url;
            this.showBanner(index)
        });
        this.isLoading = false;
    }
}
</script>

<style scoped>
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
    max-height: 250px;
    /* max-height: 0px; */
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
}

.banner-container:hover {
    cursor: pointer;
    border: none;
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
    border: 1px solid rgb(185, 185, 185);
    width: 100%;
}

/* .collapse {
    max-height: 250px;
    transition: all 1s;
} */
</style>

<template>
    <div class="wrapper">
        <div
            v-for="project in projects"
            :key="project.title"
            class="project">
            <h3 class="title">{{project.title}}</h3>
            <span class="description">{{project.description}}</span>
            <div
                v-if="!isLoading"
                class="banner-container">
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
        };
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

.project {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
}

.banner-container {
    width: 100%;
    max-height: 200px;
    overflow: hidden;
}

.banner {
    width: 100%;
}
</style>

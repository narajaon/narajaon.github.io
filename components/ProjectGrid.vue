<template>
    <div class="wrapper">
        <div
            v-for="project in projects"
            :key="project.title"
            class="project">
            <h3 class="title">{{project.title}}</h3>
            <span class="description">{{project.description}}</span>
            <div class="banner-container">
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
                    title: "RTV1",
                    description: "Coding a RayTracer from scratch",
                    src: "https://raw.githubusercontent.com/narajaon/RTv1/master/readme_pics/simple_scene.png",
                },
                {
                    title: "21SH",
                    description: "Coding a Shell from scratch",
                    src: "https://raw.githubusercontent.com/narajaon/Visual_recognition/master/readmePics/Gallery.png",
                }
            ],
        };
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

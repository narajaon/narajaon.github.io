<script>
import StackList from '~/components/StackList.vue';

export default {
  components: {
    StackList,
  }    
}
</script>

<template>
  <div class="about-page">
    <div class="profile-banner">
      <img
        src="~assets/images/Fabien-copie-2-570x570.jpg"
        alt="profile picture"
        align="left"
      >
      <div class="profile-infos">
        <h1>About me</h1>
        <p class="page-content">
          I’m a passionate software developer who always strive to improve himself 💪. I exclusively wrote in C when I was studying at 42 School in Paris and now I’m more into building complex web applications in javascript 🔥.
        </p>
      </div>
    </div>

    <stack-list />
  </div>
</template>

<style scoped>
.about-page {
}

.stack-list {
}

.profile-banner {
    /* padding-bottom: 10px; */
}

@media (min-width: 426px) {
    .profile-banner {
        display: flex;
    }
}

.profile-infos {
}

.page-category {
    padding-bottom: 30px;
}

.align-end {
    text-align: end;
}

.page-content {
    color: #747272;
}

img {
    margin-right: 10px;
    height: 130px;
}

h3 {
    margin-bottom: 5px;
}
</style>

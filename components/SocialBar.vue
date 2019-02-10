<template>
    <div class="social-bar">
        <a href="#" class="fab fa-twitter"/>
        <a href="#" class="fab fa-instagram"/>
        <a href="#" class="fab fa-github"/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.social-bar {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

a {
    padding: 3px 8px;
    text-decoration: none;
}

a:hover {
    color:rgb(0, 132, 255);
}
</style>